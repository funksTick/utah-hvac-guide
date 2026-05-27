import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, phone, email, street, city, zip, serviceType, urgency, mode, notes } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const palmettoPayload = {
      firstName,
      lastName,
      phone,
      email: email || '',
      address: {
        street: street || '',
        city: city || '',
        state: 'Utah',
        zip: zip || '',
      },
      palmettoId: `hvacGuide_${phone}`,
      notes: [serviceType, urgency, notes, mode].filter(Boolean).join(' | '),
    };

    const palmettoRes = await fetch('https://leads.1-home.com/lead/palmetto', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.PALMETTO_API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(palmettoPayload),
    });

    if (!palmettoRes.ok) {
      const errText = await palmettoRes.text();
      console.error('Palmetto error:', palmettoRes.status, errText);
      return NextResponse.json({ error: 'Lead submission failed' }, { status: 500 });
    }

    const result = await palmettoRes.json();
    console.log('Lead submitted successfully:', result);

    return NextResponse.json({ success: true, data: result });

  } catch (err) {
    console.error('Submit lead error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}