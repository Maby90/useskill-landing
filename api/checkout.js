const PRICES = {
  'linkedin-post-writer':   { name: 'LinkedIn Post Writer Calibrato', amount: 900  },
  'newsletter-generator':   { name: 'Newsletter Generator IT',        amount: 1200 },
  'instagram-carousel':     { name: 'Instagram Carousel Script',      amount: 900  },
  'content-calendar':       { name: 'Content Calendar Builder',       amount: 1500 },
  'client-onboarding':      { name: 'Client Onboarding Interview',    amount: 700  },
  'bundle-metodo':          { name: 'Il Metodo UseSkill.it (Bundle)', amount: 4700 },
  'plugin-content-creator':  { name: 'Content Creator Pro Plugin',     amount: 6700  },
  'personal-brand-system':   { name: 'Personal Brand System Plugin',   amount: 14900 },
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { product } = req.body || {}
  const price = PRICES[product]
  if (!price) return res.status(400).json({ error: 'Prodotto non trovato' })

  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return res.status(500).json({ error: 'Stripe key mancante' })

  const params = new URLSearchParams({
    mode: 'payment',
    locale: 'it',
    allow_promotion_codes: 'true',
    'line_items[0][quantity]': '1',
    'line_items[0][price_data][currency]': 'eur',
    'line_items[0][price_data][unit_amount]': String(price.amount),
    'line_items[0][price_data][product_data][name]': price.name,
    'line_items[0][price_data][product_data][description]': 'Skill AI per UseSkill.it — pronta per Claude, Antigravity, Manus',
    'metadata[product]': product,
    success_url: `https://useskill.it/grazie?prodotto=${product}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: 'https://useskill.it/#catalog',
  })

  try {
    const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })
    const data = await r.json()
    if (!r.ok) {
      console.error('Stripe error:', data.error?.message)
      return res.status(502).json({ error: data.error?.message || 'Stripe error' })
    }
    return res.status(200).json({ url: data.url })
  } catch (err) {
    console.error('Fetch Stripe error:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
