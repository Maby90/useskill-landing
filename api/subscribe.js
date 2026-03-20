/**
 * POST /api/subscribe — ES Module (project type: module)
 * Iscrive email alla lista Newsletter su MailerLite
 */

const GROUP_ID = '182446171981087750'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const body = req.body || {}
  const email = (body.email || '').trim()

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email non valida' })
  }

  const token = process.env.MAILERLITE_API_TOKEN
  if (!token) return res.status(500).json({ error: 'Token mancante' })

  try {
    const r = await fetch(
      `https://connect.mailerlite.com/api/groups/${GROUP_ID}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      }
    )
    // 200 = già iscritto, 201 = nuovo iscritto
    if (r.status === 200 || r.status === 201) {
      return res.status(200).json({ ok: true })
    }
    const err = await r.json().catch(() => ({}))
    console.error('MailerLite error:', r.status, err)
    return res.status(502).json({ error: 'Errore iscrizione' })
  } catch (err) {
    console.error('Subscribe fallita:', err)
    return res.status(500).json({ error: 'Errore interno' })
  }
}
