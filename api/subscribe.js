const GROUPS = {
  newsletter: '182446171981087750',
  freebie:    '182751280855254447',
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { email, source } = req.body || {}
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Email non valida' })

  const token = process.env.MAILERLITE_API_TOKEN
  if (!token) return res.status(500).json({ error: 'Token mancante' })

  const groupId = GROUPS[source] || GROUPS.newsletter

  try {
    const r = await fetch(`https://connect.mailerlite.com/api/groups/${groupId}/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ email }),
    })
    const json = await r.json()
    if (r.status === 200 || r.status === 201) return res.status(200).json({ ok: true })
    return res.status(502).json({ error: 'Errore iscrizione', details: json })
  } catch (err) {
    return res.status(500).json({ error: 'Errore interno' })
  }
}
