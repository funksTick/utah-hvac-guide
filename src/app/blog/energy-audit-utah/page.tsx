import Link from 'next/link';

export default function EnergyAuditPage() {
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
        <span className="text-white/60">Energy Audit</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">ENERGY SAVINGS</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            Why Every Northern Utah Homeowner Should Get an Energy Audit
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>April 2026</span>
            <span>·</span>
            <span>4 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            A home energy audit costs <strong className="text-white">$200–$400</strong> and typically identifies <strong className="text-white">$500–$1,500 in annual savings</strong>. Here's what to expect and how to find the right auditor in Utah.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">What Is a Home Energy Audit?</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            A professional home energy audit (also called a home energy assessment) is a comprehensive inspection that identifies where your home is wasting energy — and how to fix it.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">What auditors test:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">Air leaks</strong> (windows, doors, outlets, attic access, basement)</li>
              <li><strong className="text-white">Insulation levels</strong> (attic, walls, basement, ductwork)</li>
              <li><strong className="text-white">HVAC efficiency</strong> (furnace/AC performance, duct leaks)</li>
              <li><strong className="text-white">Thermostat programming</strong> (settings, scheduling, placement)</li>
              <li><strong className="text-white">Hot water heater</strong> (age, efficiency, temperature setting)</li>
              <li><strong className="text-white">Lighting & appliances</strong> (energy usage patterns)</li>
              <li><strong className="text-white">Windows & doors</strong> (U-factor, weather-stripping)</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            At the end, you receive a detailed report with prioritized recommendations: fix this first (biggest impact), then this, then that. No guesswork.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why Utah Homes Benefit More Than Most</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Northern Utah's climate makes energy audits especially valuable:
          </p>

          <ul className="space-y-3 text-white/70 mb-8 pl-6 list-disc">
            <li>
              <strong className="text-white">Extreme temperature swings (100°F+ summers, sub-zero winters)</strong>
              <p className="text-sm text-white/50 mt-1">Your HVAC works harder than most climates → small efficiency improvements = big savings</p>
            </li>
            <li>
              <strong className="text-white">Long heating season (4–6 months)</strong>
              <p className="text-sm text-white/50 mt-1">Heating accounts for 40–60% of Utah energy bills</p>
            </li>
            <li>
              <strong className="text-white">Older housing stock</strong>
              <p className="text-sm text-white/50 mt-1">Many pre-1980 homes in Ogden, Layton, Logan are under-insulated by modern standards</p>
            </li>
            <li>
              <strong className="text-white">Dry climate = more air leaks</strong>
              <p className="text-sm text-white/50 mt-1">Wood framing shifts and cracks more in low humidity</p>
            </li>
            <li>
              <strong className="text-white">Basements common</strong>
              <p className="text-sm text-white/50 mt-1">Uninsulated rim joists are a major source of heat loss (easy to miss without audit)</p>
            </li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Utah Reality:</strong> Rocky Mountain Power reports that homes built before 1980 in Northern Utah average $2,000–$3,500/year in energy costs. After implementing audit recommendations, most homeowners save 20–35% — that's $400–$1,200 per year.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">What You Get: Professional vs. DIY</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Professional Audit ($200–$400)</h3>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-white mb-3">Includes:</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">Blower door test:</strong> Measures total air leakage (pressurizes house, finds every leak)</li>
              <li><strong className="text-white">Thermal imaging:</strong> Infrared camera shows heat loss/cold spots in real-time</li>
              <li><strong className="text-white">Duct leakage test:</strong> Quantifies duct losses (often 20–30% in Utah homes)</li>
              <li><strong className="text-white">Combustion safety test:</strong> Ensures furnace isn't backdrafting (carbon monoxide risk)</li>
              <li><strong className="text-white">Insulation inspection:</strong> Measures R-value in attic, walls, basement</li>
              <li><strong className="text-white">Written report:</strong> Prioritized recommendations with cost/savings estimates</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Time commitment:</strong> 2–4 hours on-site, report within 1 week
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">DIY Audit (Free / Low Cost)</h3>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-3">What you can check yourself:</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">Visual inspection:</strong> Look for obvious gaps, cracks, missing insulation</li>
              <li><strong className="text-white">Incense stick test:</strong> Hold near windows/doors on windy day (watch smoke for drafts)</li>
              <li><strong className="text-white">Hand test:</strong> Feel for air movement around outlets, baseboards, attic access</li>
              <li><strong className="text-white">Utility bill analysis:</strong> Compare month-to-month and year-over-year usage</li>
              <li><strong className="text-white">Thermostat check:</strong> Is it in a good location? Programmed efficiently?</li>
            </ul>
            <p className="text-sm text-white/60 mt-4">
              <strong>Limitation:</strong> You'll find obvious problems but miss hidden issues (duct leaks, insulation voids, backdrafting risks).
            </p>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Our take:</strong> DIY audit is a good starting point, but professional audit pays for itself if you implement even 2–3 major recommendations.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Typical Audit Findings in Utah Homes</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Here's what energy auditors commonly find in Northern Utah (especially older homes):
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">Issue</th>
                  <th className="text-left p-4 font-medium text-white/80">Impact</th>
                  <th className="text-left p-4 font-medium text-white/80">Fix Cost</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Insufficient attic insulation</strong></td>
                  <td className="p-4">15–25% heat loss</td>
                  <td className="p-4 text-[#e85d26]">$1,500–$3,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Duct leaks</strong></td>
                  <td className="p-4">20–30% energy waste</td>
                  <td className="p-4 text-[#e85d26]">$500–$1,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Air leaks (whole house)</strong></td>
                  <td className="p-4">10–20% heat loss</td>
                  <td className="p-4 text-[#4ade80]">$200–$800 DIY</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Uninsulated rim joists</strong></td>
                  <td className="p-4">10–15% heat loss</td>
                  <td className="p-4 text-[#4ade80]">$200–$600 DIY</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Old windows (single-pane)</strong></td>
                  <td className="p-4">10–25% heat loss</td>
                  <td className="p-4 text-white/60">$3,000–$15,000</td>
                </tr>
                <tr>
                  <td className="p-4"><strong className="text-white">Thermostat issues</strong></td>
                  <td className="p-4">5–15% waste</td>
                  <td className="p-4 text-[#4ade80]">$150–$300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Real Example: Ogden Home Audit</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 mb-4">
              <strong className="text-white">Home:</strong> 1,800 sq ft, 1975 construction, two-story, Ogden 84404
            </p>
            <p className="text-sm text-white/70 mb-4">
              <strong className="text-white">Annual energy costs (before):</strong> $2,400 ($140/month gas, $60/month electric)
            </p>

            <h4 className="font-bold text-white mt-6 mb-3">Audit findings:</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>Attic insulation: R-19 (should be R-49 for Utah)</li>
              <li>Duct leakage: 28% (should be &lt;10%)</li>
              <li>Rim joists: No insulation</li>
              <li>Air leaks: Significant (blower door test showed 2,200 CFM50)</li>
              <li>Thermostat: Old manual, poorly located (near fireplace)</li>
            </ul>

            <h4 className="font-bold text-white mb-3">Implemented fixes:</h4>
            <ol className="space-y-2 text-sm text-white/70 pl-6 list-decimal mb-6">
              <li>Added attic insulation to R-49 ($1,800)</li>
              <li>Sealed duct leaks ($900 professional)</li>
              <li>Insulated rim joists ($350 DIY)</li>
              <li>Air-sealed obvious leaks ($150 DIY)</li>
              <li>Upgraded thermostat, relocated ($280)</li>
            </ol>

            <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-white">Total investment:</strong> $3,480
              </p>
              <p className="text-sm text-white/70 mb-2">
                <strong className="text-white">Annual savings:</strong> $720 (30% reduction)
              </p>
              <p className="text-sm text-white/70">
                <strong className="text-[#4ade80]">Payback period:</strong> 4.8 years
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">How to Find an Energy Auditor in Utah</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Option 1: Rocky Mountain Power (Subsidized)</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            If you're a Rocky Mountain Power customer (Weber, Cache, Box Elder counties):
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-white/70">
              <li><strong className="text-white">Cost:</strong> Often free or heavily discounted ($0–$100)</li>
              <li><strong className="text-white">What's included:</strong> Full professional audit + written report + rebate guidance</li>
              <li><strong className="text-white">How to sign up:</strong> Call 1-888-221-7070 or visit wattsmart.com</li>
              <li><strong className="text-white">Wait time:</strong> 2–6 weeks for appointment</li>
              <li><strong className="text-white">Bonus:</strong> Access to wattsmart rebates for implementing recommendations</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Option 2: Private Energy Auditor</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            For Dominion Energy customers (Davis County, some areas) or if you want faster service:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-white/70">
              <li><strong className="text-white">Cost:</strong> $200–$400 (not subsidized)</li>
              <li><strong className="text-white">Certification to look for:</strong> BPI (Building Performance Institute) or RESNET HERS Rater</li>
              <li><strong className="text-white">What to ask:</strong> "Do you use blower door and thermal imaging?" (Both are essential)</li>
              <li><strong className="text-white">Local companies:</strong> Search "BPI certified energy auditor Utah"</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Option 3: HVAC Contractor Energy Assessment</h3>
          <p className="text-white/70 leading-relaxed mb-8">
            Some Utah HVAC companies offer basic energy assessments as part of a system replacement quote:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-[#4ade80]">Pro:</strong> Often free if considering new HVAC</li>
            <li><strong className="text-[#ef4444]">Con:</strong> Less comprehensive than dedicated energy audit</li>
            <li><strong className="text-[#ef4444]">Con:</strong> May push equipment sales over cost-effective fixes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Quick Wins You Can Do Before an Audit</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            While waiting for your audit appointment, tackle these easy fixes:
          </p>

          <ol className="space-y-3 text-white/70 mb-8 pl-6 list-decimal">
            <li>
              <strong className="text-white">Replace HVAC filter</strong> ($10–$25) — dirty filters waste 5–15% energy
            </li>
            <li>
              <strong className="text-white">Caulk obvious gaps</strong> ($5–$20) — windows, door frames, pipe penetrations
            </li>
            <li>
              <strong className="text-white">Add door sweeps</strong> ($10–$30 each) — especially exterior doors
            </li>
            <li>
              <strong className="text-white">Insulate attic access</strong> ($20–$50) — DIY foam board + weather-strip
            </li>
            <li>
              <strong className="text-white">Lower water heater temp</strong> (free) — 120°F is sufficient, saves $30–$50/year
            </li>
            <li>
              <strong className="text-white">Program thermostat</strong> (free) — 68°F occupied, 62°F away/sleeping in winter
            </li>
          </ol>

          <p className="text-white/70 leading-relaxed mb-8">
            These simple steps can save $100–$300/year immediately — and the audit will reveal where to focus next.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Rebates & Incentives for Improvements</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            After your audit, these programs help pay for upgrades:
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Rocky Mountain Power wattsmart</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Insulation:</strong> Up to $1.00/sq ft for attic, $0.50/sq ft for walls</li>
            <li><strong className="text-white">Air sealing:</strong> Up to $500</li>
            <li><strong className="text-white">Duct sealing:</strong> Up to $600</li>
            <li><strong className="text-white">HVAC upgrade:</strong> $300–$500 for high-efficiency systems</li>
            <li><strong className="text-white">Smart thermostat:</strong> $50–$100</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Federal Tax Credits (2026)</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Insulation:</strong> 30% credit, up to $1,200/year</li>
            <li><strong className="text-white">Windows/doors:</strong> 30% credit, up to $600/year</li>
            <li><strong className="text-white">Heat pump:</strong> 30% credit, up to $2,000</li>
            <li><strong className="text-white">Home energy audit:</strong> 30% credit, up to $150</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Stack Them:</strong> You can combine utility rebates AND federal tax credits. Example: $1,800 attic insulation → $500 Rocky Mountain Power rebate + $540 federal tax credit = $860 total savings (48% off).
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Is an Energy Audit Worth It?</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            <strong className="text-white">Short answer: Yes, especially for homes built before 2000.</strong>
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
            <h3 className="font-bold text-white mb-4">You should definitely get an audit if:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>Energy bills are high compared to similar homes</li>
              <li>Home is uncomfortable (cold spots, drafts, uneven temps)</li>
              <li>You're planning to upgrade HVAC anyway (audit helps size system correctly)</li>
              <li>Home was built before 1980</li>
              <li>You're doing a major renovation (know what to fix first)</li>
              <li>Considering solar (reduce energy use before adding panels = smaller system needed)</li>
            </ul>

            <h3 className="font-bold text-white mt-6 mb-4">You might skip the audit if:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>New construction (&lt;5 years old) with modern efficiency standards</li>
              <li>Recent comprehensive energy upgrades</li>
              <li>Bills are already low for your home size</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Lower Your Energy Bills?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Connect with energy auditors and HVAC contractors who can help you save. Get free quotes on recommended improvements.
            </p>
            <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors">
              Get Started →
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
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Best HVAC Systems for Utah</h3>
            <p className="text-sm text-white/40">Systems that handle our extremes →</p>
          </Link>
          <Link href="/blog/hvac-maintenance-checklist" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">MAINTENANCE</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">HVAC Maintenance Checklist</h3>
            <p className="text-sm text-white/40">Keep your system running efficiently →</p>
          </Link>
          <Link href="/blog/ac-replacement-cost-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">COST GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">AC Replacement Costs</h3>
            <p className="text-sm text-white/40">What to expect in 2026 →</p>
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
