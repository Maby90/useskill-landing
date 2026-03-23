/**
 * POST /api/checkout
 * Crea una Stripe Checkout Session e restituisce l'URL
 */

const Stripe = require('stripe')

const PRICES = {
  'linkedin-post-writer':   { name: 'LinkedIn Post Writer Calibrato', amount: 900  },
  'newsletter-generator':   { name: 'Newsletter Generator IT',        amount: 1200 },
  'instagram-carousel':     { name: 'Instagram Carousel Script',      amount: 900  },
  'content-calendar':       { name: 'Content Calendar Builder',       amount: 1500 },
  'client-onboarding':      { name: 'Client Onboarding Interview',    amount: 700  },
  'bundle-metodo':          { name: 'Il Metodo UseSkill.it (Bundle)', amount: 4700 },
  'plugin-content-creator': { name: 'Content Creator Pro Plugin',     amount: 6700 },
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { product } = req.body || {}
  const price = PRICES[product]
  if (!price) return res.status(400).json({ error: 'Prodotto non trovato' })

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'eur',
          unit_amount: price.amount,
          product_data: {
            name: price.name,
            description: 'Skill AI per UseSkill.it — file .md pronto per Claude, Antigravity, Manus',
          },
        },
        quantity: 1,
      }],
      metadata: { product },
      success_url: `https://useskill.it/grazie?prodotto=${product}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://useskill.it/#catalog`,
      locale: 'it',
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
      billing_address_collection: 'auto',
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return res.status(500).json({ error: 'Errore creazione sessione' })
  }
}
