/**
 * POST /api/webhook
 * Webhook server-side da LemonSqueezy (order_created)
 * Deduplication con event_id ls_{orderId} vs client_{orderId}
 */

const crypto = require('crypto')

const PIXEL_ID = '34173091455668145'
const META_CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function sha256(value) {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  const rawBody = await getRawBody(req)

  // Verifica firma HMAC
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET
  if (secret) {
    const sig = req.headers['x-signature']
    const digest = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')
    if (sig !== digest) {
      console.error('Firma LemonSqueezy non valida')
      return res.status(401).json({ error: 'invalid_signature' })
    }
  }

  let payload
  try { payload = JSON.parse(rawBody) } catch { return res.status(400).end() }

  const eventName = payload?.meta?.event_name
  const attrs     = payload?.data?.attributes
  if (eventName !== 'order_created' || attrs?.status !== 'paid') {
    return res.status(200).json({ skipped: true })
  }

  const email       = attrs.user_email || ''
  const value       = ((attrs.total || 0) / 100).toFixed(2)
  const currency    = (attrs.currency || 'EUR').toUpperCase()
  const productName = attrs.first_order_item?.product_name || 'Skill UseSkill.it'
  const orderId     = payload?.data?.id || ''

  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!accessToken) return res.status(200).json({ warning: 'no token' })

  const capiPayload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: `ls_${orderId}`,   // stesso prefisso client_ per deduplicazione
        action_source: 'website',
        event_source_url: 'https://useskill.it',
        user_data: {
          em: email ? [sha256(email)] : [],
        },
        custom_data: {
          value: parseFloat(value),
          currency,
          content_name: productName,
          content_type: 'product',
          order_id: orderId,
        },
      },
    ],
  }

  try {
    const r = await fetch(`${META_CAPI_URL}?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(capiPayload),
    })
    const json = await r.json()
    if (!r.ok) return res.status(502).json({ error: 'capi_error', details: json })
    console.log(`[Webhook CAPI] ${productName} ${value}${currency} ordine ${orderId}`)
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'internal' })
  }
}
