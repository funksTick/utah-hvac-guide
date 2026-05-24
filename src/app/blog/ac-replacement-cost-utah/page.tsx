import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export default function ACReplacementCostPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </Link>
        <Link href="/#quote" className="bg-[#e85d26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d04e1a] transition-colors">
          Get a Quote
        </Link>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-8 text-sm text-white/40">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
        <span className="mx-2">/</span>
        <span className="text-white/60">AC Replacement Cost</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">COST GUIDES</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            How Much Does AC Replacement Cost in Utah? (2026 Guide)
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>May 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            Central AC replacement in Northern Utah typically runs <strong className="text-white">$4,000–$12,000</strong> depending on unit size, efficiency rating, and labor complexity. Here's what homeowners in Davis, Weber, Cache, and Box Elder counties actually pay.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="font-bold text-sm text-white/80 mb-4">What's covered:</h2>
          <ul className="space-y-2 text-sm text-white/60">
            <li>→ Average cost breakdown by system size</li>
            <li>→ What affects your final price</li>
            <li>→ Hidden costs to budget for</li>
            <li>→ How to get accurate quotes</li>
            <li>→ When to replace vs. repair</li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Utah AC Replacement: Average Costs by Size</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Most Northern Utah homes need a 2.5–4 ton AC unit depending on square footage, insulation, and ceiling height. Here's what you'll actually pay (installed):
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">System Size</th>
                  <th className="text-left p-4 font-medium text-white/80">Home Sq Ft</th>
                  <th className="text-left p-4 font-medium text-white/80">Cost Range</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4">2 Ton</td>
                  <td className="p-4">1,000–1,400 sq ft</td>
                  <td className="p-4 text-[#e85d26] font-medium">$4,000–$6,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">2.5 Ton</td>
                  <td className="p-4">1,400–1,800 sq ft</td>
                  <td className="p-4 text-[#e85d26] font-medium">$4,500–$7,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">3 Ton</td>
                  <td className="p-4">1,800–2,200 sq ft</td>
                  <td className="p-4 text-[#e85d26] font-medium">$5,000–$8,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">3.5 Ton</td>
                  <td className="p-4">2,200–2,600 sq ft</td>
                  <td className="p-4 text-[#e85d26] font-medium">$5,500–$9,500</td>
                </tr>
                <tr>
                  <td className="p-4">4 Ton</td>
                  <td className="p-4">2,600–3,200 sq ft</td>
                  <td className="p-4 text-[#e85d26] font-medium">$6,000–$11,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Utah Tip:</strong> Utah's dry climate and temperature extremes (100°F+ summers, sub-zero winters) mean proper sizing is critical. Never go by square footage alone — insist on a Manual J load calculation from your contractor.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">What Affects Your AC Replacement Cost?</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">1. Efficiency Rating (SEER2)</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            Higher SEER2 (Seasonal Energy Efficiency Ratio) means lower operating costs but higher upfront cost:
          </p>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">14–15 SEER2</strong> (Basic): $4,000–$6,500 · Good for rentals or budget installs</li>
            <li><strong className="text-white">16–17 SEER2</strong> (Mid-tier): $5,500–$8,500 · Best value for most homeowners</li>
            <li><strong className="text-white">18–20 SEER2</strong> (High-efficiency): $7,000–$10,000 · Lower bills, qualifies for rebates</li>
            <li><strong className="text-white">21+ SEER2</strong> (Premium): $8,500–$12,000+ · Top efficiency, longest payback</li>
          </ul>
          <p className="text-white/70 leading-relaxed mb-8">
            <strong>Utah reality check:</strong> With our hot, dry summers (90–100°F+ for weeks), a 16–17 SEER2 unit typically pays for itself in 5–7 years compared to basic 14 SEER2.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">2. Brand & Quality</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            Brand reputation affects both upfront cost and long-term reliability:
          </p>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Budget</strong> (Goodman, Coleman): $4,000–$6,000 · Shorter lifespan (10–12 years)</li>
            <li><strong className="text-white">Mid-tier</strong> (Rheem, Ruud, York): $5,000–$8,000 · Reliable, good value (12–15 years)</li>
            <li><strong className="text-white">Premium</strong> (Carrier, Trane, Lennox): $6,500–$12,000 · Best warranties (15–20 years)</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">3. Installation Complexity</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            These factors can add $500–$3,000 to your final cost:
          </p>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong>Ductwork modifications or replacement</strong> (+$1,500–$5,000)</li>
            <li><strong>Electrical panel upgrade</strong> (+$800–$2,500) — common in older Utah homes</li>
            <li><strong>Difficult access</strong> (tight attic, roof mount) (+$300–$1,000)</li>
            <li><strong>Refrigerant line set replacement</strong> (+$400–$1,200)</li>
            <li><strong>Condensate pump/drain work</strong> (+$200–$600)</li>
            <li><strong>Permits & inspections</strong> (+$100–$400) — required in most Utah cities</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">4. Optional Upgrades</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            Consider these add-ons for better comfort and efficiency:
          </p>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong>Smart thermostat</strong> (+$200–$500) — Nest, Ecobee (10–30% energy savings)</li>
            <li><strong>Variable-speed air handler</strong> (+$600–$1,500) — Better efficiency, quieter operation</li>
            <li><strong>Two-stage compressor</strong> (+$800–$2,000) — More efficient, better humidity control</li>
            <li><strong>Whole-home air purifier</strong> (+$800–$2,000) — Great for Utah inversions</li>
            <li><strong>UV light system</strong> (+$400–$800) — Kills mold, bacteria</li>
            <li><strong>Zoning system</strong> (+$2,000–$4,000) — Different temps upstairs/downstairs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Hidden Costs to Budget For</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Don't get blindsided. Here's what quotes might not include:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 space-y-4">
            <div>
              <h4 className="font-medium text-white mb-1">Old Unit Disposal</h4>
              <p className="text-sm text-white/60">$100–$300 (some contractors include this, others charge extra)</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-medium text-white mb-1">Asbestos Remediation</h4>
              <p className="text-sm text-white/60">$500–$3,000+ (if found in ductwork — common in pre-1980 Utah homes)</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-medium text-white mb-1">Concrete Pad Replacement</h4>
              <p className="text-sm text-white/60">$200–$500 (if outdoor unit pad is cracked/sinking)</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-medium text-white mb-1">Duct Sealing/Insulation</h4>
              <p className="text-sm text-white/60">$800–$2,500 (if existing ducts are leaky — very common in Utah)</p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-medium text-white mb-1">Emergency/Rush Service</h4>
              <p className="text-sm text-white/60">+$500–$1,500 (July/August peak season, expect higher prices & delays)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Rebates & Incentives (2026)</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Offset your AC replacement cost with these current programs:
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3 text-white/90">Federal Tax Credits</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong>Energy Efficient Home Improvement Credit:</strong> 30% of cost (up to $600) for qualifying AC units (must meet ENERGY STAR Most Efficient criteria)</li>
            <li><strong>Heat Pump Credit:</strong> Up to $2,000 for qualifying heat pump systems (alternative to traditional AC)</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3 text-white/90">Utah Utility Rebates</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong>Rocky Mountain Power</strong> (Weber, Cache, Box Elder): $300–$500 for high-efficiency AC (16+ SEER2)</li>
            <li><strong>Local utility programs:</strong> Check with your city (Ogden, Layton, Logan often have additional incentives)</li>
            <li><strong>Weatherization assistance:</strong> Low-income programs available through Utah.gov/energy</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">⚠️ Important:</strong> Most rebates require pre-approval or application BEFORE installation. Ask your contractor to help with paperwork — good ones do this automatically.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Repair vs. Replace: When to Upgrade</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Use this decision tree:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Replace if:</h3>
            <ul className="space-y-2 text-white/60 text-sm pl-6 list-disc mb-6">
              <li>Unit is <strong className="text-white">15+ years old</strong> (even if working)</li>
              <li>Repair cost is <strong className="text-white">&gt;50% of replacement cost</strong></li>
              <li>Multiple repairs needed in the past 2 years</li>
              <li>Uses <strong className="text-white">R-22 refrigerant</strong> (being phased out = expensive)</li>
              <li>Energy bills increasing despite maintenance</li>
              <li>Can't keep house cool on 95°F+ Utah days</li>
              <li>Frequent breakdowns (loss of comfort, emergency service fees add up)</li>
            </ul>

            <h3 className="font-bold text-white mb-4">Repair if:</h3>
            <ul className="space-y-2 text-white/60 text-sm pl-6 list-disc">
              <li>Unit is <strong className="text-white">&lt;10 years old</strong></li>
              <li>First major repair</li>
              <li>Repair cost &lt;$1,000 and unit is well-maintained</li>
              <li>Under warranty (parts or labor)</li>
              <li>Minor component failure (capacitor, contactor, fan motor)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">How to Get Accurate AC Replacement Quotes</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Follow this process to avoid overpriced or low-quality installations:
          </p>

          <ol className="space-y-4 text-white/70 mb-8 pl-6 list-decimal">
            <li>
              <strong className="text-white">Get 3–5 quotes</strong> from licensed Utah contractors (mix of large companies and local independents)
            </li>
            <li>
              <strong className="text-white">Insist on a Manual J load calculation</strong> — proper sizing is critical for Utah's climate
            </li>
            <li>
              <strong className="text-white">Ask these questions:</strong>
              <ul className="mt-2 space-y-1 pl-6 list-disc text-sm">
                <li>What's included in the quote? (Permit, disposal, warranty, labor, materials)</li>
                <li>How long have you been installing this brand?</li>
                <li>Do you handle rebate paperwork?</li>
                <li>What's your warranty on labor? (1–2 years is standard)</li>
                <li>How long until installation? (2–4 weeks normal, 6+ weeks in July/August)</li>
                <li>What happens if you find ductwork or electrical issues?</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Check credentials:</strong> Licensed (check Utah DPL), insured, bonded, good online reviews
            </li>
            <li>
              <strong className="text-white">Avoid:</strong> "Today only" pricing, pressure tactics, significantly lower than all other quotes (usually means corners cut), cash-only deals
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">Best Time to Replace Your AC in Utah</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Timing matters for both price and availability:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#4ade80] mb-3">✓ Best Times (Off-Season)</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><strong className="text-white">April–May:</strong> Before summer rush</li>
                  <li><strong className="text-white">September–October:</strong> After peak season</li>
                  <li><strong>Benefits:</strong> Lower prices, better availability, no rush fees</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#ef4444] mb-3">✗ Worst Times (Peak Season)</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><strong className="text-white">June–August:</strong> Peak summer heat</li>
                  <li><strong className="text-white">December–January:</strong> Furnace emergencies take priority</li>
                  <li><strong>Drawbacks:</strong> Higher prices, 2–6 week waits, rush fees common</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Utah-Specific Considerations</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Climate Factors</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong>Dry heat advantage:</strong> Utah's low humidity makes evaporative cooling effective — consider a supplemental swamp cooler ($800–$2,000) to reduce AC load</li>
            <li><strong>Temperature swings:</strong> 40°F+ daily variation in spring/fall means two-stage or variable-speed systems provide better comfort</li>
            <li><strong>Elevation:</strong> Cache County (Logan area) at 4,500+ ft elevation affects system sizing — Manual J calculation is critical</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Air Quality Concerns</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong>Winter inversions:</strong> Upgrade to MERV 13 filters or add a whole-home air purifier</li>
            <li><strong>Wildfire smoke:</strong> High-efficiency filtration is worth the upgrade</li>
            <li><strong>Dust:</strong> Utah's dry climate = more dust — check/replace filters monthly during peak use</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Final Thoughts: What You Should Actually Pay</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            For a typical Northern Utah home (2,000 sq ft, 3-ton unit, mid-tier efficiency):
          </p>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/30 rounded-2xl p-8 mb-8 text-center">
            <div className="text-5xl font-black text-[#e85d26] mb-2">$5,500–$8,500</div>
            <div className="text-white/60">All-in, installed, with warranty</div>
          </div>

          <p className="text-white/70 leading-relaxed mb-6">
            If you're quoted significantly higher or lower than this range, ask detailed questions. A good contractor will explain exactly what you're paying for — and what makes their quote different.
          </p>

          <p className="text-white/70 leading-relaxed mb-12">
            <strong className="text-white">Bottom line:</strong> Don't shop on price alone. The cheapest quote often means rushed work, undersized equipment, or hidden fees. The most expensive isn't always the best. Find a licensed contractor with good reviews, proper load calculations, and transparent pricing.
          </p>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Accurate Quotes?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              We'll connect you with licensed HVAC contractors in your area. Free quotes, no obligation, same-day appointments available.
            </p>
            <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors">
              Get Free Quotes →
            </Link>
          </div>
        </div>

      </article>

      {/* Related Articles */}
      <section className="border-t border-white/10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/best-hvac-systems-utah-climate" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">BUYING GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Best HVAC Systems for Utah's Climate</h3>
            <p className="text-sm text-white/40">What actually works in extreme temperature swings →</p>
          </Link>
          <Link href="/blog/furnace-repair-vs-replace" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Furnace Repair vs. Replace</h3>
            <p className="text-sm text-white/40">How to make the right decision →</p>
          </Link>
          <Link href="/blog/energy-audit-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">ENERGY SAVINGS</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Why Get an Energy Audit</h3>
            <p className="text-sm text-white/40">Find $500–$1,500 in annual savings →</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · Northern Utah's HVAC Resource</p>
        <p className="mt-1">Serving Davis, Weber, Cache & Box Elder Counties</p>
      </footer>
    </main>
  );
}
