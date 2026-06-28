const CF = {
  propertyAddress:  'coQufhgGteccTkAZ2hAW',
  motivation:       '92SM85hcwy2ZjgsKzzD9',
  timeline:         'dmyZ8zeywVtxwY4bZwFk',
  notes:            'nlx8zlNlwFUUhS1nyWad',
  proCasaSource:    'CMkD17iofqkwapy2lOVg',
  smsTransactional: 'BY0GglHTTYshbv9mEqCZ',
  smsMarketing:     'N8ajtQLEqJPao8PVvilD',
}

function normalizePhone(val) {
  const d = val.replace(/\D/g, '')
  const t = d.length === 11 && d[0] === '1' ? d.slice(1) : d
  return t.length === 10 ? `(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}` : val
}

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phone, address, reason, timeline, message,
            smsTransactional, smsMarketing, turnstileToken } = data

    const vr = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP') ?? '',
      }),
    })
    if (!(await vr.json()).success) {
      return Response.json({ error: 'Bot verification failed' }, { status: 400 })
    }

    const now = new Date().toISOString()
    const customFields = [
      { id: CF.propertyAddress, field_value: address || '' },
      { id: CF.proCasaSource,   field_value: 'procasainvestments.com' },
    ]
    if (reason)           customFields.push({ id: CF.motivation,       field_value: reason })
    if (timeline)         customFields.push({ id: CF.timeline,         field_value: timeline })
    if (message)          customFields.push({ id: CF.notes,            field_value: message })
    if (smsTransactional) customFields.push({ id: CF.smsTransactional, field_value: `Yes - ${now}` })
    if (smsMarketing)     customFields.push({ id: CF.smsMarketing,     field_value: `Yes - ${now}` })

    const tags = ['Pro Casa Website']
    if (smsTransactional) tags.push('SMS Transactional Opt-In')
    if (smsMarketing)     tags.push('SMS Marketing Opt-In')

    const gr = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GHL_API_KEY}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify({
        locationId: env.GHL_LOCATION_ID,
        firstName, lastName, email,
        phone: normalizePhone(phone),
        source: 'Pro Casa Website',
        tags,
        customFields,
      }),
    })

    if (!gr.ok) {
      console.error('GHL error:', await gr.text())
      return Response.json({ error: 'CRM error' }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch (e) {
    console.error(e)
    return Response.json({ error: 'Internal error' }, { status: 500 })
  }
}
