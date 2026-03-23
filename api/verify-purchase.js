export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  if (req.method !== 'GET') return res.status(405).end()

  const { session_id } = req.query
  if (!session_id) return res.status(400).json({ error: 'session_id mancante' })

  const key = process.env.STRIPE_SECRET_KEY
  try {
    const r = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}`, {
      headers: { 'Authorization': `Bearer ${key}` },
    })
    const data = await r.json()
    if (!r.ok) return res.status(502).json({ ok: false })
    if (data.payment_status === 'paid') {
      return res.status(200).json({ ok: true, product: data.metadata?.product || '' })
    }
    return res.status(402).json({ ok: false, status: data.payment_status })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
