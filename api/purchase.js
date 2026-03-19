/**
 * POST /api/purchase
 * Riceve i dati di acquisto completato da LemonSqueezy (via client)
 * e li invia alla Meta Conversions API (server-side) per deduplicazione iOS14+.
 *
 * ENV VARS necessarie su Vercel:
 *   META_PIXEL_ID          → 34173091455668145
 *   META_CAPI_ACCESS_TOKEN → generato da Meta Business Manager > Events Manager
 */

const PIXEL_ID = process.env.META_PIXEL_ID || '34173091455668145'
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || ''

module.exports = async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', 'https://useskill.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  if (!ACCESS_TOKEN) {
    // Token non ancora configurato: logga e ritorna OK per non bloccare il flusso
    console.warn('[purchase] META_CAPI_ACCESS_TOKEN non configurato')
    return res.status(200).json({ ok: true, capi: false })
  }

  try {
    const {
      event_time,
      value,
      currency,
      content_name,
      order_id,
      client_user_agent,
      fbc,
      fbp,
    } = req.body

    const payload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: event_time || Math.floor(Date.now() / 1000),
          event_id: `purchase_${order_id || Date.now()}`, // deduplicazione col pixel client-side
          action_source: 'website',
          event_source_url: 'https://useskill.it',
          user_data: {
            client_user_agent: client_user_agent || '',
            fbc: fbc || '',
            fbp: fbp || '',
          },
          custom_data: {
            value: value || 0,
            currency: currency || 'EUR',
            content_name: content_name || 'Skill UseSkill.it',
            content_type: 'product',
            order_id: order_id || '',
          },
        },
      ],
    }

    const capiRes = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const capiData = await capiRes.json()

    if (!capiRes.ok) {
      console.error('[purchase] CAPI error:', capiData)
      return res.status(500).json({ error: 'CAPI error', detail: capiData })
    }

    return res.status(200).json({ ok: true, capi: true, events_received: capiData.events_received })
  } catch (err) {
    console.error('[purchase] Exception:', err)
    return res.status(500).json({ error: err.message })
  }
}
