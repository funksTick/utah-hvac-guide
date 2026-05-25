'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  'AC Repair',
  'AC Replacement / New Unit',
  'Furnace Repair',
  'Furnace Replacement / New Unit',
  'Heat Pump Installation',
  'Duct Cleaning',
  'HVAC Maintenance / Tune-up',
  'Thermostat Installation',
  'Refrigerant Recharge',
  'Blower Motor Replacement',
  'Capacitor Replacement',
  'Compressor Replacement',
  'Energy Audit',
  'Other',
];

type Rating = 'great' | 'fair' | 'high' | 'very_high';

interface Result {
  rating: Rating;
  score: number;
  headline: string;
  summary: string;
  averageRange: string;
  yourPrice: string;
  factors: string[];
  recommendation: string;
  showQuoteForm: boolean;
}

const ratingConfig = {
  great: { label: 'Great Deal', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', emoji: '🟢' },
  fair: { label: 'Fair Price', color: '#eab308', bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.3)', emoji: '🟡' },
  high: { label: 'Slightly High', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)', emoji: '🟠' },
  very_high: { label: 'Overpriced', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', emoji: '🔴' },
};

export default function QuoteCheckerPage() {
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    if (!service || !price) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/check-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, price, details }),
      });

      if (!res.ok) throw new Error('Failed to analyze quote');
      const data = await res.json();
      setResult(data);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const config = result ? ratingConfig[result.rating] : null;

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </Link>
        <Link href="/#quote" className="bg-[#e85d26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d04e1a] transition-colors">
          Get a Quote
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-16 pb-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-full px-4 py-1.5 text-[#e85d26] text-sm font-medium mb-6">
            AI-Powered Price Check
          </div>
          <h1 className="text-4xl font-black mb-4 leading-tight">
            Is Your HVAC Quote<br />
            <span className="text-[#e85d26]">Fair or Overpriced?</span>
          </h1>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Enter the quote you received and our AI will instantly rate it against real Northern Utah HVAC pricing.
          </p>
        </div>

        {/* Input Card */}
        {!result && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="mb-5">
              <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Service Type *</label>
              <select
                value={service}
                onChange={e => setService(e.target.value)}
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50"
              >
                <option value="">Select the service you were quoted for...</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Quoted Price *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
                <input
                  value={price}
                  onChange={e => setPrice(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                  placeholder="1,200"
                  type="text"
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="mb-7">
              <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Additional Details <span className="normal-case text-white/20">(optional but improves accuracy)</span></label>
              <textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20 resize-none"
                placeholder="e.g. 3-ton unit, 2,000 sq ft home, Layton UT, 15 year old system, includes labor and parts..."
                rows={3}
              />
            </div>

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <button
              onClick={handleCheck}
              disabled={!service || !price || loading}
              className="w-full bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Analyzing Northern Utah prices...
                </>
              ) : (
                'Check My Quote →'
              )}
            </button>
            <p className="text-center text-white/20 text-xs mt-3">Free · Instant · No contact info required</p>
          </div>
        )}

        {/* Result Card */}
        {result && config && (
          <div className="space-y-4">

            {/* Rating Banner */}
            <div
              className="rounded-3xl p-8 text-center border"
              style={{ background: config.bg, borderColor: config.border }}
            >
              <div className="text-5xl mb-3">{config.emoji}</div>
              <div className="text-3xl font-black mb-2" style={{ color: config.color }}>
                {config.label}
              </div>
              <div className="text-white/80 text-lg font-medium mb-1">{result.headline}</div>
              <div className="text-white/50 text-sm">{result.summary}</div>
            </div>

            {/* Price Comparison */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xs text-white/40 uppercase tracking-wider mb-4">Price Breakdown</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="text-xs text-white/40 mb-1">Your Quote</div>
                  <div className="text-2xl font-black text-white">${Number(price).toLocaleString()}</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="text-xs text-white/40 mb-1">Typical Range in Utah</div>
                  <div className="text-2xl font-black" style={{ color: config.color }}>{result.averageRange}</div>
                </div>
              </div>
            </div>

            {/* Factors */}
            {result.factors.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-xs text-white/40 uppercase tracking-wider mb-4">What Affects This Price</h3>
                <ul className="space-y-2">
                  {result.factors.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-[#e85d26] mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendation */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xs text-white/40 uppercase tracking-wider mb-3">Our Recommendation</h3>
              <p className="text-white/80 text-sm leading-relaxed">{result.recommendation}</p>
            </div>

            {/* CTA */}
            {result.showQuoteForm && (
              <div className="bg-[#e85d26]/10 border border-[#e85d26]/30 rounded-3xl p-6 text-center">
                <h3 className="font-black text-lg mb-2">Get a Free Second Opinion</h3>
                <p className="text-white/50 text-sm mb-4">1-Home serves Northern Utah with transparent, competitive pricing. No surprise fees.</p>
                <Link
                  href="/#quote"
                  className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-3 rounded-2xl transition-colors text-sm"
                >
                  Get a Free Quote from 1-Home →
                </Link>
              </div>
            )}

            {/* Check another */}
            <button
              onClick={() => { setResult(null); setService(''); setPrice(''); setDetails(''); }}
              className="w-full border border-white/10 text-white/50 hover:text-white py-3 rounded-2xl transition-colors text-sm"
            >
              Check Another Quote
            </button>
          </div>
        )}
      </div>
    </main>
  );
}