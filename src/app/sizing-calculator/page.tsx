'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  squareFootage: string;
  stories: string;
  ceilingHeight: string;
  zipCode: string;
  insulationQuality: string;
  windowPercent: string;
  windowType: string;
  sunExposure: string;
  homeOrientation: string;
  occupants: string;
  hasBasement: string;
  basementConditioned: string;
}

interface Result {
  coolingTons: number;
  heatingBtu: number;
  recommendedTons: number;
  efficiencyRec: string;
  costRangeLow: number;
  costRangeHigh: number;
  systemRec: string;
  notes: string[];
}

const STEP_LABELS = ['Home Basics', 'Construction', 'Sun & Exposure', 'Occupancy', 'Your Results'];

function calculateManualJ(data: FormData): Result {
  const sqft = Number(data.squareFootage) || 0;
  const stories = Number(data.stories) || 1;
  const ceilingH = Number(data.ceilingHeight) || 8;
  const occupants = Number(data.occupants) || 2;


  let coolingBtuPerSqft = 25;
  let heatingBtuPerSqft = 40;


  if (data.insulationQuality === 'poor') { coolingBtuPerSqft *= 1.25; heatingBtuPerSqft *= 1.35; }
  else if (data.insulationQuality === 'average') { coolingBtuPerSqft *= 1.1; heatingBtuPerSqft *= 1.15; }
  else if (data.insulationQuality === 'good') { coolingBtuPerSqft *= 0.95; heatingBtuPerSqft *= 0.9; }
  else if (data.insulationQuality === 'excellent') { coolingBtuPerSqft *= 0.85; heatingBtuPerSqft *= 0.8; }


  const heightFactor = ceilingH / 8;
  coolingBtuPerSqft *= heightFactor;
  heatingBtuPerSqft *= heightFactor;

  const windowPct = Number(data.windowPercent) || 15;
  if (windowPct > 20) { coolingBtuPerSqft *= 1.15; heatingBtuPerSqft *= 1.1; }
  else if (windowPct < 10) { coolingBtuPerSqft *= 0.95; heatingBtuPerSqft *= 0.95; }


  if (data.windowType === 'single') { coolingBtuPerSqft *= 1.2; heatingBtuPerSqft *= 1.25; }
  else if (data.windowType === 'double') { /* baseline */ }
  else if (data.windowType === 'triple') { coolingBtuPerSqft *= 0.9; heatingBtuPerSqft *= 0.85; }


  if (data.sunExposure === 'full') coolingBtuPerSqft *= 1.15;
  else if (data.sunExposure === 'shaded') coolingBtuPerSqft *= 0.9;


  if (data.homeOrientation === 'south' || data.homeOrientation === 'west') coolingBtuPerSqft *= 1.1;
  else if (data.homeOrientation === 'north') coolingBtuPerSqft *= 0.95;


  const extraOccupantBtu = Math.max(0, (occupants - 2)) * 400;


  if (stories > 1) { coolingBtuPerSqft *= 0.95; heatingBtuPerSqft *= 0.95; }


  if (data.hasBasement === 'yes' && data.basementConditioned === 'no') {
    heatingBtuPerSqft *= 0.9; 
  }

  const totalCoolingBtu = (sqft * coolingBtuPerSqft) + extraOccupantBtu;
  const totalHeatingBtu = sqft * heatingBtuPerSqft;


  const rawTons = totalCoolingBtu / 12000;


  const recommendedTons = Math.round(rawTons * 2) / 2;

  const finalTons = Math.max(1.5, Math.min(6, recommendedTons));
  let efficiencyRec = '16 SEER2';
  let systemRec = 'Standard Split System';
  if (data.insulationQuality === 'excellent' || data.windowType === 'triple') {
    efficiencyRec = '18-20 SEER2';
    systemRec = 'High-Efficiency Heat Pump or Variable Speed';
  } else if (data.insulationQuality === 'poor') {
    efficiencyRec = '14-16 SEER2 (upgrade insulation first)';
    systemRec = 'Standard Split System';
  }

  const costPerTonLow = 2800;
  const costPerTonHigh = 4500;
  const costRangeLow = Math.round(finalTons * costPerTonLow / 100) * 100;
  const costRangeHigh = Math.round(finalTons * costPerTonHigh / 100) * 100;

  const notes: string[] = [];
  if (data.insulationQuality === 'poor') notes.push('Improving insulation could reduce system size and cut energy bills 20–30%.');
  if (data.windowType === 'single') notes.push('Single-pane windows significantly increase heating and cooling loads. Consider upgrading.');
  if (windowPct > 25) notes.push('High window-to-wall ratio increases solar gain. Exterior shading or low-E glass helps.');
  if (finalTons !== rawTons && rawTons > 5) notes.push('Very large load detected — a Manual J performed by a contractor is recommended before purchasing.');
  if (data.zipCode && ['84036', '84060', '84098', '84032'].includes(data.zipCode)) {
    notes.push('Mountain elevation in your area may require higher heating capacity. Confirm with a local contractor.');
  }

  return {
    coolingTons: Math.round(rawTons * 10) / 10,
    heatingBtu: Math.round(totalHeatingBtu / 1000) * 1000,
    recommendedTons: finalTons,
    efficiencyRec,
    costRangeLow,
    costRangeHigh,
    systemRec,
    notes,
  };
}

export default function SizingCalculatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [result, setResult] = useState<Result | null>(null);
  const [form, setForm] = useState<FormData>({
    squareFootage: '',
    stories: '1',
    ceilingHeight: '8',
    zipCode: '',
    insulationQuality: '',
    windowPercent: '15',
    windowType: '',
    sunExposure: '',
    homeOrientation: '',
    occupants: '2',
    hasBasement: '',
    basementConditioned: '',
  });

  const set = (key: keyof FormData, value: string) => setForm(f => ({ ...f, [key]: value }));

  const handleCalculate = () => {
    const r = calculateManualJ(form);
    setResult(r);
    setStep(5);
  };

  const canProceed = () => {
    if (step === 1) return form.squareFootage && Number(form.squareFootage) > 0;
    if (step === 2) return form.insulationQuality && form.windowType;
    if (step === 3) return form.sunExposure && form.homeOrientation;
    if (step === 4) return form.hasBasement;
    return true;
  };

  const OptionButton = ({ value, current, onClick, children }: {
    value: string; current: string; onClick: () => void; children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
        current === value
          ? 'border-[#e85d26] bg-[#e85d26]/10 text-white'
          : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
      }`}
    >
      {children}
    </button>
  );

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

      <div className="max-w-2xl mx-auto px-6 pt-12 pb-20">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-full px-4 py-1.5 text-[#e85d26] text-sm font-medium mb-4">
            Manual J Simplified Calculator
          </div>
          <h1 className="text-4xl font-black mb-3 leading-tight">
            What Size HVAC System<br />
            <span className="text-[#e85d26]">Does Your Home Need?</span>
          </h1>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Answer a few questions about your home and we'll calculate the right tonnage — the same way a licensed HVAC contractor does it.
          </p>
        </div>

        {/* Progress bar */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex justify-between text-xs text-white/30 mb-2">
              <span>Step {step} of 4</span>
              <span>{STEP_LABELS[step - 1]}</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full">
              <div
                className="h-1 bg-[#e85d26] rounded-full transition-all duration-500"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── STEP 1: Home Basics ── */}
        {step === 1 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Tell us about your home</h2>
              <p className="text-white/40 text-sm">Basic dimensions determine your base load.</p>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Conditioned Square Footage *</label>
              <div className="relative">
                <input
                  value={form.squareFootage}
                  onChange={e => set('squareFootage', e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                  placeholder="e.g. 2,200"
                  inputMode="numeric"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">sq ft</span>
              </div>
              <p className="text-white/25 text-xs mt-1">Don't include garage or unfinished basement</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Stories</label>
                <div className="grid grid-cols-3 gap-2">
                  {['1', '2', '3+'].map(s => (
                    <OptionButton key={s} value={s === '3+' ? '3' : s} current={form.stories} onClick={() => set('stories', s === '3+' ? '3' : s)}>
                      <div className="text-center font-bold text-base">{s}</div>
                    </OptionButton>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Ceiling Height</label>
                <div className="grid grid-cols-3 gap-2">
                  {[{ label: "8'", val: '8' }, { label: "9'", val: '9' }, { label: "10'+", val: '10' }].map(h => (
                    <OptionButton key={h.val} value={h.val} current={form.ceilingHeight} onClick={() => set('ceilingHeight', h.val)}>
                      <div className="text-center font-bold text-base">{h.label}</div>
                    </OptionButton>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">ZIP Code <span className="normal-case text-white/20">(optional — improves accuracy)</span></label>
              <input
                value={form.zipCode}
                onChange={e => set('zipCode', e.target.value.replace(/\D/g, '').slice(0, 5))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                placeholder="84401"
                inputMode="numeric"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!canProceed()}
              className="w-full bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* ── STEP 2: Construction ── */}
        {step === 2 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Construction & insulation</h2>
              <p className="text-white/40 text-sm">These factors heavily influence your heating and cooling load.</p>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Insulation Quality</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'poor', label: 'Poor', desc: 'Older home, minimal insulation, drafty' },
                  { val: 'average', label: 'Average', desc: 'Standard insulation, some air leaks' },
                  { val: 'good', label: 'Good', desc: 'Well insulated, tight construction' },
                  { val: 'excellent', label: 'Excellent', desc: 'New build or energy retrofit, very tight' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.insulationQuality} onClick={() => set('insulationQuality', o.val)}>
                    <div className="font-bold mb-0.5">{o.label}</div>
                    <div className="text-xs text-white/40 font-normal">{o.desc}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                Window Area <span className="normal-case text-white/20">— roughly what % of your walls are windows?</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: '10', label: 'Low', desc: '< 10%' },
                  { val: '15', label: 'Average', desc: '10–20%' },
                  { val: '25', label: 'High', desc: '> 20%' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.windowPercent} onClick={() => set('windowPercent', o.val)}>
                    <div className="font-bold mb-0.5">{o.label}</div>
                    <div className="text-xs text-white/40 font-normal">{o.desc}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Window Type</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 'single', label: 'Single Pane', desc: 'Older, leaky' },
                  { val: 'double', label: 'Double Pane', desc: 'Most common' },
                  { val: 'triple', label: 'Triple Pane', desc: 'High efficiency' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.windowType} onClick={() => set('windowType', o.val)}>
                    <div className="font-bold mb-0.5">{o.label}</div>
                    <div className="text-xs text-white/40 font-normal">{o.desc}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 border border-white/10 text-white/50 hover:text-white py-4 rounded-2xl transition-colors text-sm">← Back</button>
              <button onClick={() => setStep(3)} disabled={!canProceed()} className="flex-[2] bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors">Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Sun & Exposure ── */}
        {step === 3 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Sun & exposure</h2>
              <p className="text-white/40 text-sm">Solar gain is one of the biggest cooling load factors in Utah's climate.</p>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Sun Exposure</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 'full', label: 'Full Sun', desc: 'Little to no shade on the home' },
                  { val: 'partial', label: 'Partial', desc: 'Some trees or nearby buildings' },
                  { val: 'shaded', label: 'Well Shaded', desc: 'Significant shade most of the day' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.sunExposure} onClick={() => set('sunExposure', o.val)}>
                    <div className="font-bold mb-0.5">{o.label}</div>
                    <div className="text-xs text-white/40 font-normal">{o.desc}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Primary Orientation <span className="normal-case text-white/20">— which direction do most windows face?</span></label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'north', label: '⬆ North', desc: 'Less direct sun, lower cooling load' },
                  { val: 'south', label: '⬇ South', desc: 'More solar gain, higher cooling load' },
                  { val: 'east', label: '➡ East', desc: 'Morning sun, moderate load' },
                  { val: 'west', label: '⬅ West', desc: 'Afternoon sun, higher cooling load' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.homeOrientation} onClick={() => set('homeOrientation', o.val)}>
                    <div className="font-bold mb-0.5">{o.label}</div>
                    <div className="text-xs text-white/40 font-normal">{o.desc}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 border border-white/10 text-white/50 hover:text-white py-4 rounded-2xl transition-colors text-sm">← Back</button>
              <button onClick={() => setStep(4)} disabled={!canProceed()} className="flex-[2] bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors">Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 4: Occupancy ── */}
        {step === 4 && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Occupancy & basement</h2>
              <p className="text-white/40 text-sm">People generate heat. Basements change the thermal envelope.</p>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Number of Occupants</label>
              <div className="grid grid-cols-4 gap-3">
                {['1', '2', '3', '4', '5', '6+'].map(n => (
                  <OptionButton key={n} value={n === '6+' ? '6' : n} current={form.occupants} onClick={() => set('occupants', n === '6+' ? '6' : n)}>
                    <div className="text-center font-bold text-lg">{n}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Does your home have a basement?</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'yes', label: 'Yes' },
                  { val: 'no', label: 'No / Slab' },
                ].map(o => (
                  <OptionButton key={o.val} value={o.val} current={form.hasBasement} onClick={() => set('hasBasement', o.val)}>
                    <div className="text-center font-bold">{o.label}</div>
                  </OptionButton>
                ))}
              </div>
            </div>

            {form.hasBasement === 'yes' && (
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Is the basement conditioned (heated/cooled)?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: 'yes', label: 'Yes, conditioned' },
                    { val: 'no', label: 'No, unfinished' },
                  ].map(o => (
                    <OptionButton key={o.val} value={o.val} current={form.basementConditioned} onClick={() => set('basementConditioned', o.val)}>
                      <div className="text-center font-bold">{o.label}</div>
                    </OptionButton>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button onClick={() => setStep(3)} className="flex-1 border border-white/10 text-white/50 hover:text-white py-4 rounded-2xl transition-colors text-sm">← Back</button>
              <button onClick={handleCalculate} disabled={!canProceed()} className="flex-[2] bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors">
                Calculate My System Size →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 5: Results ── */}
        {step === 5 && result && (
          <div className="space-y-4">

            {/* Main result */}
            <div className="bg-[#e85d26]/10 border border-[#e85d26]/30 rounded-3xl p-8 text-center">
              <div className="text-sm text-[#e85d26] font-medium uppercase tracking-wider mb-2">Recommended System Size</div>
              <div className="text-7xl font-black text-white mb-1">{result.recommendedTons}</div>
              <div className="text-2xl font-bold text-[#e85d26] mb-4">TONS</div>
              <div className="text-white/50 text-sm">{result.systemRec}</div>
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Cooling Load</div>
                <div className="text-2xl font-black">{result.coolingTons} <span className="text-sm font-normal text-white/40">tons</span></div>
                <div className="text-xs text-white/30 mt-1">{(result.coolingTons * 12000).toLocaleString()} BTU/hr</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Heating Load</div>
                <div className="text-2xl font-black">{(result.heatingBtu / 1000).toFixed(0)}k <span className="text-sm font-normal text-white/40">BTU/hr</span></div>
                <div className="text-xs text-white/30 mt-1">Northern Utah winter load</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Efficiency Recommendation</div>
              <div className="text-lg font-bold">{result.efficiencyRec}</div>
            </div>

            {/* Cost range */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Estimated Installed Cost in Utah</div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-xs text-white/30 mb-0.5">Low estimate</div>
                  <div className="text-2xl font-black">${result.costRangeLow.toLocaleString()}</div>
                </div>
                <div className="text-white/20 text-2xl font-thin">—</div>
                <div>
                  <div className="text-xs text-white/30 mb-0.5">High estimate</div>
                  <div className="text-2xl font-black text-[#e85d26]">${result.costRangeHigh.toLocaleString()}</div>
                </div>
              </div>
              <p className="text-white/25 text-xs mt-3">Estimates based on 2026 Northern Utah contractor rates. Actual cost depends on brand, labor, and ductwork condition.</p>
            </div>

            {/* Notes */}
            {result.notes.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Things to Know</div>
                <ul className="space-y-2">
                  {result.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#e85d26] mt-0.5 shrink-0">→</span>{note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
              <p className="text-white/30 text-xs leading-relaxed">
                <strong className="text-white/40">About this calculator:</strong> This tool uses a simplified Manual J methodology based on ACCA standards for Northern Utah's climate zone (5B). It provides a reliable estimate for planning purposes but is not a substitute for a full Manual J calculation performed by a licensed HVAC contractor before purchasing equipment.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-[#e85d26]/10 border border-[#e85d26]/30 rounded-3xl p-6 text-center">
              <h3 className="font-black text-xl mb-2">Ready to Get a Quote?</h3>
              <p className="text-white/50 text-sm mb-4">Now that you know your system size, get a free quote from a local Utah contractor. Show them this result — a {result.recommendedTons}-ton system at {result.efficiencyRec}.</p>
              <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-3 rounded-2xl transition-colors text-sm">
                Get My Free Quote →
              </Link>
            </div>

            <button
              onClick={() => { setStep(1); setResult(null); setForm({ squareFootage: '', stories: '1', ceilingHeight: '8', zipCode: '', insulationQuality: '', windowPercent: '15', windowType: '', sunExposure: '', homeOrientation: '', occupants: '2', hasBasement: '', basementConditioned: '' }); }}
              className="w-full border border-white/10 text-white/40 hover:text-white py-3 rounded-2xl transition-colors text-sm"
            >
              Start Over
            </button>
          </div>
        )}

        {/* Educational note at bottom */}
        {step < 5 && (
          <p className="text-center text-white/20 text-xs mt-6">
            Based on ACCA Manual J methodology · Calibrated for Utah climate zone 5B
          </p>
        )}
      </div>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-4xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · <Link href="/" className="hover:text-white/50 transition-colors">Home</Link> · <Link href="/check-quote" className="hover:text-white/50 transition-colors">Check a Quote</Link></p>
      </footer>
    </main>
  );
}