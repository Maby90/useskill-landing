/**
 * POST /api/stripe-webhook
 * Riceve checkout.session.completed da Stripe
 * Invia Purchase event a Meta CAPI
 */

const Stripe = require('stripe')
const crypto = require('crypto')

const PIXEL_ID = '34173091455668145'

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function hashEmail(email) {
  return crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex')
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  const rawBody = await getRawBody(req)
  const sig     = req.headers['stripe-signature']
  const secret  = process.env.STRIPE_WEBHOOK_SECRET
  const stripe  = Stripe(process.env.STRIPE_SECRET_KEY)

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret)
  } catch (err) {
    console.error('Webhook signature invalida:', err.message)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ skipped: true })
  }

  const session  = event.data.object
  if (session.payment_status !== 'paid') return res.status(200).json({ skipped: true })

  const email    = session.customer_details?.email || ''
  const value    = (session.amount_total || 0) / 100
  const currency = (session.currency || 'eur').toUpperCase()
  const product  = session.metadata?.product || 'Skill UseSkill.it'
  const orderId  = session.id

  const accessToken = process.env.META_CAPI_ACCESS_TOKEN
  if (!accessToken) return res.status(200).json({ warning: 'no capi token' })

  try {
    await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          event_id: `stripe_${orderId}`,
          action_source: 'website',
          event_source_url: 'https://useskill.it',
          user_data: {
            em: email ? [hashEmail(email)] : [],
          },
          custom_data: {
            value,
            currency,
            content_name: product,
            content_type: 'product',
            order_id: orderId,
          },
        }],
      }),
    })
    console.log(`[Stripe Webhook] Purchase OK — ${product} ${value}€`)
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Meta CAPI error:', err)
    return res.status(500).json({ error: 'capi_error' })
  }
}
