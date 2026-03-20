/**
 * POST /api/purchase — ES Module (project type: module)
 * Invia Purchase a Meta Conversions API con fbc/fbp per migliore attribuzione
 */

const PIXEL_ID = '34173091455668145'
const META_CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const {
    event_time,
    value,
    currency = 'EUR',
    content_name = 'Skill UseSkill.it',
    order_id = '',
    client_user_agent = '',
    fbc = '',
    fbp = '',
    email_hash = '',
  } = req.body || {}

  if (!value) return res.status(400).json({ error: 'value required' })

  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!accessToken) {
    console.warn('META_CAPI_ACCESS_TOKEN mancante')
    return res.status(200).json({ warning: 'no token' })
  }

  const userData = {
    client_ip_address: req.headers['x-forwarded-for']?.split(',')[0] || '',
    client_user_agent,
  }
  if (fbc) userData.fbc = fbc
  if (fbp) userData.fbp = fbp
  if (email_hash) userData.em = [email_hash]

  const capiPayload = {
    data: [{
      event_name: 'Purchase',
      event_time: event_time || Math.floor(Date.now() / 1000),
      event_id: `client_${order_id || Date.now()}`,
      action_source: 'website',
      event_source_url: 'https://useskill.it',
      user_data: userData,
      custom_data: {
        value: parseFloat(value),
        currency: currency.toUpperCase(),
        content_name,
        content_type: 'product',
        order_id,
      },
    }],
  }

  try {
    const r = await fetch(`${META_CAPI_URL}?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(capiPayload),
    })
    const json = await r.json()
    if (!r.ok) {
      console.error('Meta CAPI error:', json)
      return res.status(502).json({ error: 'capi_error', details: json })
    }
    console.log(`[Purchase CAPI] ${content_name} — ${value}${currency} — ordine ${order_id}`)
    return res.status(200).json({ ok: true, events_received: json.events_received })
  } catch (err) {
    console.error('Fetch CAPI fallita:', err)
    return res.status(500).json({ error: 'internal' })
  }
}
