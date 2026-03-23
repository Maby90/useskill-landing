/**
 * GET /api/verify-purchase?session_id=cs_xxx
 * Verifica che la sessione Stripe sia pagata prima di mostrare i download
 */

const Stripe = require('stripe')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  if (req.method !== 'GET') return res.status(405).end()

  const { session_id } = req.query
  if (!session_id) return res.status(400).json({ error: 'session_id mancante' })

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    if (session.payment_status === 'paid') {
      return res.status(200).json({
        ok: true,
        product: session.metadata?.product || '',
        amount: session.amount_total,
        currency: session.currency,
        email: session.customer_details?.email || '',
      })
    }
    return res.status(402).json({ ok: false, status: session.payment_status })
  } catch (err) {
    console.error('Stripe verify error:', err)
    return res.status(500).json({ error: 'Errore verifica' })
  }
}
