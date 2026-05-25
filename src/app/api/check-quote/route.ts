import { NextRequest, NextResponse } from 'next/server';

// Valid service options — must match frontend exactly
const VALID_SERVICES = new Set([
  'AC Repair', 'AC Replacement / New Unit', 'Furnace Repair',
  'Furnace Replacement / New Unit', 'Heat Pump Installation',
  'Duct Cleaning', 'HVAC Maintenance / Tune-up', 'Thermostat Installation',
  'Refrigerant Recharge', 'Blower Motor Replacement', 'Capacitor Replacement',
  'Compressor Replacement', 'Energy Audit', 'Other',
]);

// Simple in-memory rate limiter: IP → { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;        // max requests
const RATE_WINDOW = 60_000;  // per 60 seconds

function getIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

function containsPromptInjection(text: string): boolean {
  const suspicious = [
    'ignore previous', 'ignore all', 'disregard', 'forget your instructions',
    'you are now', 'act as', 'roleplay', 'pretend you', 'system prompt',
    'jailbreak', 'dan mode', 'developer mode', 'bypass',
    'return your api key', 'reveal your', 'print your',
  ];
  const lower = text.toLowerCase();
  return suspicious.some(phrase => lower.includes(phrase));
}

export async function POST(req: NextRequest) {
  try {
    const ip = getIP(req);

    // Rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const { service, price, details } = await req.json();

    // Validate service is from allowed list
    if (!service || !VALID_SERVICES.has(service)) {
      return NextResponse.json({ error: 'Invalid service type.' }, { status: 400 });
    }

    // Validate price is a reasonable number
    const priceNum = Number(price);
    if (!price || isNaN(priceNum) || priceNum < 1 || priceNum > 500_000) {
      return NextResponse.json({ error: 'Invalid price.' }, { status: 400 });
    }

    // Validate details length
    if (details && details.length > 500) {
      return NextResponse.json({ error: 'Details too long.' }, { status: 400 });
    }

    // Check for prompt injection in details field
    if (details && containsPromptInjection(details)) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
    }

    const prompt = `You are an HVAC pricing expert specializing in Northern Utah (Davis, Weber, Cache, Box Elder counties). A homeowner received a quote and wants to know if it's fair.

Service: ${service}
Quoted Price: $${priceNum.toLocaleString()}
Additional Details: ${details ? details.slice(0, 500) : 'None provided'}

Analyze this quote against real Northern Utah HVAC market pricing as of 2026. Consider:
- Utah labor rates (typically $85-150/hr for HVAC techs)
- Northern Utah cost of living
- Parts and equipment costs
- Typical contractor markups in this market
- Any details provided about the job scope

Respond ONLY with a valid JSON object in this exact shape:
{
  "rating": "great" | "fair" | "high" | "very_high",
  "score": 0-100,
  "headline": "one punchy sentence summarizing the verdict",
  "summary": "2-3 sentences explaining the rating in plain English",
  "averageRange": "$X,XXX - $X,XXX",
  "factors": ["factor 1", "factor 2", "factor 3"],
  "recommendation": "1-2 sentences telling the homeowner what to do next",
  "showQuoteForm": true | false
}

Rating guide:
- "great": price is at or below typical Northern Utah range (score 80-100)
- "fair": price is within normal range, maybe slightly high but reasonable (score 60-79)
- "high": price is noticeably above typical range, worth getting a second quote (score 40-59)
- "very_high": price is significantly overpriced for this market (score 0-39)

Set showQuoteForm to true if rating is "high" or "very_high".

Return ONLY the JSON. No markdown, no explanation, no backticks.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return NextResponse.json({ error: 'AI analysis failed' }, { status: 500 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    let result;
    try {
      result = JSON.parse(text.replace(/```json|```/g, '').trim());
    } catch {
      console.error('Failed to parse AI response:', text);
      return NextResponse.json({ error: 'Failed to parse analysis' }, { status: 500 });
    }

    // Validate response shape before returning
    if (!result.rating || !VALID_SERVICES.size) {
      return NextResponse.json({ error: 'Invalid analysis result' }, { status: 500 });
    }

    return NextResponse.json(result);

  } catch (err) {
    console.error('Check quote error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}