/**
 * POST /api/subscribe
 * Iscrive una email alla lista Newsletter su MailerLite
 */

const https = require('https')

const GROUP_ID = '182446171981087750'

function httpsPost(url, data, token) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data)
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(body),
      },
    }
    const req = https.request(url, opts, (res) => {
      let raw = ''
      res.on('data', c => { raw += c })
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(raw) }) }
        catch { resolve({ status: res.statusCode, body: raw }) }
      })
    })
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

// Body parser manuale per Vercel non-Next.js
function parseBody(req) {
  return new Promise((resolve, reject) => {
    // body già parsato da Vercel
    if (req.body && typeof req.body === 'object') return resolve(req.body)
    let raw = ''
    req.on('data', c => { raw += c })
    req.on('end', () => {
      try { resolve(JSON.parse(raw)) } catch { resolve({}) }
    })
    req.on('error', reject)
  })
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const body = await parseBody(req)
  const email = (body.email || '').trim()

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email non valida' })
  }

  const token = process.env.MAILERLITE_API_TOKEN
  if (!token) return res.status(500).json({ error: 'Token mancante' })

  try {
    const url = `https://connect.mailerlite.com/api/groups/${GROUP_ID}/subscribers`
    const result = await httpsPost(url, { email }, token)

    // 200 = già iscritto, 201 = nuovo iscritto — entrambi ok
    if (result.status === 200 || result.status === 201) {
      return res.status(200).json({ ok: true })
    }
    console.error('MailerLite error:', result.status, result.body)
    return res.status(502).json({ error: 'Errore iscrizione' })
  } catch (err) {
    console.error('HTTPS MailerLite fallita:', err)
    return res.status(500).json({ error: 'Errore interno' })
  }
}
