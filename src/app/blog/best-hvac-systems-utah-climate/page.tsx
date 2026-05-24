import Link from 'next/link';

export default function BestHVACSystemsPage() {
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
        <span className="text-white/60">Best HVAC Systems for Utah</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">BUYING GUIDES</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            Best HVAC Systems for Utah's Climate
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>April 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            Utah's extreme temperature swings — from <strong className="text-white">100°F summers</strong> to <strong className="text-white">single-digit winters</strong> — demand specific HVAC specs. Here's what actually works in Northern Utah.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Utah's HVAC Challenges</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Northern Utah (Davis, Weber, Cache, Box Elder counties) isn't your average climate:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-3 text-sm text-white/70">
              <li><strong className="text-white">Summer extremes:</strong> 90–105°F for weeks at a time (June–August)</li>
              <li><strong className="text-white">Winter cold:</strong> 0–30°F typical, occasional -10°F cold snaps</li>
              <li><strong className="text-white">Daily swings:</strong> 40°F+ temperature variation in spring/fall</li>
              <li><strong className="text-white">Dry climate:</strong> 10–40% relative humidity year-round</li>
              <li><strong className="text-white">Elevation:</strong> 4,300 ft (Ogden) to 4,800 ft (Logan) affects system performance</li>
              <li><strong className="text-white">Air quality issues:</strong> Winter inversions, summer wildfire smoke</li>
              <li><strong className="text-white">Long seasons:</strong> 4–6 months heating, 3–4 months cooling</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong>Bottom line:</strong> You need robust heating AND cooling. Systems designed for mild climates will struggle here. Don't skimp on either function.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">System #1: Gas Furnace + Central AC (Most Common)</h2>
          
          <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-white mb-2">Best For: Most Northern Utah Homes</h3>
                <p className="text-sm text-white/70">The proven workhorse. Handles extreme temps reliably, gas is cost-effective, and every local contractor services these systems.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Why It Works in Utah</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Gas heating is reliable in extreme cold</strong> — no performance loss at -10°F (unlike heat pumps)</li>
            <li><strong className="text-white">Cost-effective</strong> — natural gas is abundant in Utah, cheaper than electric resistance heat</li>
            <li><strong className="text-white">Proven technology</strong> — 100+ years of refinement, simple to service</li>
            <li><strong className="text-white">Separate systems = redundancy</strong> — if AC fails, you still have heat (and vice versa)</li>
            <li><strong className="text-white">Universal contractor support</strong> — every HVAC company in Utah can service these</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">What to Look For</h3>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-4">Furnace Specs:</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li><strong className="text-white">95%+ AFUE efficiency</strong> — Utah's long heating season makes high efficiency worth it</li>
              <li><strong className="text-white">Two-stage or modulating burner</strong> — better comfort during shoulder seasons</li>
              <li><strong className="text-white">Variable-speed blower</strong> — quieter, more efficient, better air filtration</li>
              <li><strong className="text-white">Sealed combustion</strong> — draws outdoor air for combustion (improves indoor air quality)</li>
            </ul>

            <h4 className="font-bold text-white mb-4">AC Specs:</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">16+ SEER2 rating</strong> — balances upfront cost with operating efficiency</li>
              <li><strong className="text-white">Two-stage compressor</strong> — handles 85°F days efficiently, ramps up for 100°F+ heat</li>
              <li><strong className="text-white">Copper coils</strong> — more durable than aluminum in Utah's dry climate</li>
              <li><strong className="text-white">Quality brand</strong> — Carrier, Trane, Lennox, Rheem (parts availability matters)</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Typical Cost</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Furnace:</strong> $3,000–$6,000 (installed, 95% AFUE)</li>
            <li><strong className="text-white">Central AC:</strong> $4,000–$8,000 (installed, 16+ SEER2)</li>
            <li><strong className="text-white">Total system:</strong> $7,000–$14,000 (if replacing both)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">System #2: Dual-Fuel (Heat Pump + Gas Furnace)</h2>

          <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-white mb-2">Best For: Maximum Efficiency + Reliability</h3>
                <p className="text-sm text-white/70">The best of both worlds. Heat pump handles mild temps efficiently, gas furnace kicks in when it's truly cold. Perfect for Utah's variable climate.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Why It's Ideal for Utah</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Heat pump handles fall/spring efficiently</strong> — 40–60°F days are perfect for heat pump operation (2–3× more efficient than gas)</li>
            <li><strong className="text-white">Gas furnace handles deep winter</strong> — below 35°F, gas takes over (reliable and powerful)</li>
            <li><strong className="text-white">AC included</strong> — heat pump provides summer cooling (just like a regular AC)</li>
            <li><strong className="text-white">20–40% heating cost savings</strong> — by using heat pump during mild temps</li>
            <li><strong className="text-white">Federal tax credits</strong> — up to $2,000 for qualifying heat pump systems</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Utah Reality:</strong> Ogden/Layton/Logan see 30–50+ days per year in the "sweet spot" (35–55°F) where heat pumps are 2–3× more efficient than gas. That's where dual-fuel systems shine.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">What to Look For</h3>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">Cold-climate heat pump</strong> — rated to -15°F or lower (Carrier, Trane, Mitsubishi)</li>
              <li><strong className="text-white">18+ SEER2 / 9+ HSPF2</strong> — high efficiency for both cooling and heating</li>
              <li><strong className="text-white">Smart switchover logic</strong> — automatically picks most efficient fuel source</li>
              <li><strong className="text-white">Quality gas backup</strong> — 95%+ AFUE furnace (you're already investing, don't cheap out)</li>
              <li><strong className="text-white">Proper installation</strong> — requires smart thermostat and correct staging setup</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Typical Cost</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Complete system:</strong> $9,000–$16,000 (installed)</li>
            <li><strong className="text-white">After federal tax credit:</strong> ~$7,000–$14,000 (26% credit, up to $2,000)</li>
            <li><strong className="text-white">Payback period:</strong> 7–12 years (vs. gas-only system)</li>
          </ul>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong>Is it worth it?</strong> If you're replacing both heating and cooling anyway, the incremental cost for dual-fuel is $2,000–$4,000. With energy savings and tax credits, it pencils out for most Utah homes.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">System #3: Ductless Mini-Splits</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-xl">→</div>
              <div>
                <h3 className="font-bold text-white mb-2">Best For: Specific Zones, Not Whole-Home Primary</h3>
                <p className="text-sm text-white/70">Great for additions, bonus rooms, finished basements, or supplemental heating/cooling. Not ideal as the sole system for most Utah homes.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Where Mini-Splits Shine in Utah</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Finished basements</strong> — common in Utah, often too cold in winter without dedicated heat</li>
            <li><strong className="text-white">Home offices</strong> — independent temp control without affecting whole house</li>
            <li><strong className="text-white">Master bedroom</strong> — keep it cooler for sleeping without chilling the whole house</li>
            <li><strong className="text-white">Mother-in-law apartments</strong> — separate HVAC system for multigenerational living</li>
            <li><strong className="text-white">Garage conversions / additions</strong> — no ductwork needed</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Pros for Utah Climate</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Very efficient</strong> — 18–30+ SEER2 ratings common</li>
            <li><strong className="text-white">Zone control</strong> — different temps in different rooms (great for two-story Utah homes)</li>
            <li><strong className="text-white">No ductwork</strong> — avoids duct losses (10–30% energy loss in typical ducts)</li>
            <li><strong className="text-white">Quiet operation</strong> — indoor units are whisper-quiet</li>
            <li><strong className="text-white">Cold-climate models available</strong> — Mitsubishi, Fujitsu rated to -15°F</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Cons for Utah Climate</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Indoor units visible on walls</strong> — aesthetics matter in living spaces</li>
            <li><strong className="text-white">Multiple units needed</strong> — whole-home coverage gets expensive fast</li>
            <li><strong className="text-white">Performance drops in extreme cold</strong> — even cold-climate models struggle below 0°F</li>
            <li><strong className="text-white">Limited service network</strong> — fewer Utah contractors service mini-splits (improving)</li>
            <li><strong className="text-white">Not great for open floor plans</strong> — work best when rooms have doors</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Typical Cost</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Single-zone:</strong> $3,500–$6,000 (one room)</li>
            <li><strong className="text-white">Multi-zone (3–4 rooms):</strong> $10,000–$18,000</li>
            <li><strong className="text-white">Federal tax credit:</strong> 30% credit available (up to $2,000)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">System #4: Geothermal Heat Pump</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-xl">→</div>
              <div>
                <h3 className="font-bold text-white mb-2">Best For: New Construction, Large Properties, Long-Term Owners</h3>
                <p className="text-sm text-white/70">Extremely efficient and reliable, but very high upfront cost. Only makes sense if you're staying 15+ years.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Pros for Utah</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Lowest operating costs</strong> — 30–60% cheaper than gas/AC combo</li>
            <li><strong className="text-white">Works in any temperature</strong> — ground temp is stable 50–55°F year-round</li>
            <li><strong className="text-white">Long lifespan</strong> — 25+ years for ground loop, 15–20 for indoor unit</li>
            <li><strong className="text-white">Federal tax credit</strong> — 30% of total cost (no cap!)</li>
            <li><strong className="text-white">Pairs well with radiant floor heat</strong> — popular in custom Utah homes</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Cons for Utah</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Very high upfront cost</strong> — $25,000–$45,000 for typical home</li>
            <li><strong className="text-white">Disruptive installation</strong> — drilling/trenching required</li>
            <li><strong className="text-white">Rocky soil challenges</strong> — parts of Utah have difficult drilling conditions (increases cost)</li>
            <li><strong className="text-white">Few qualified installers</strong> — limited contractors in Northern Utah</li>
            <li><strong className="text-white">Long payback</strong> — 15–25 years typically</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">When It Makes Sense</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li>New construction (include in mortgage)</li>
            <li>Rural property with space for ground loops</li>
            <li>Plan to stay 15+ years</li>
            <li>High energy bills (large home, poor insulation)</li>
            <li>Environmental priority (lowest carbon footprint)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Supplemental Options for Utah Homes</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Evaporative "Swamp" Coolers</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Utah's dry climate is perfect for evaporative cooling:
          </p>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Extremely efficient</strong> — uses 75% less energy than AC</li>
            <li><strong className="text-white">Works best in low humidity</strong> — Utah's 10–30% humidity is ideal</li>
            <li><strong className="text-white">Popular in Utah</strong> — many homes use swamp cooler + supplemental AC</li>
            <li><strong className="text-white">Cost:</strong> $2,000–$5,000 installed (whole-home), $300–$800 (portable)</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-white">Hybrid approach:</strong> Many Utah homeowners run a swamp cooler during May–June and September (dry, mild temps) and switch to AC in July–August (when humidity rises slightly or temps exceed 95°F).
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Whole-Home Humidifiers</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Not technically HVAC, but essential for Utah winters:
          </p>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Why you need it:</strong> Utah's winter humidity can drop to 5–15% (Sahara Desert is ~25%)</li>
            <li><strong className="text-white">Benefits:</strong> Better health, improved comfort, protects wood furniture/floors, reduces static</li>
            <li><strong className="text-white">Target:</strong> 30–40% relative humidity indoors</li>
            <li><strong className="text-white">Cost:</strong> $500–$1,500 installed</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">What About System Size?</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Proper sizing is critical in Utah's extreme climate. Never go by rules of thumb.
          </p>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Insist on Manual J Load Calculation</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              A proper load calculation accounts for:
            </p>
            <ul className="space-y-1 text-sm text-white/60 pl-6 list-disc">
              <li>Home square footage</li>
              <li>Insulation levels (walls, attic, basement)</li>
              <li>Window size, type, and orientation (south-facing in Utah gets intense sun)</li>
              <li>Air sealing quality</li>
              <li>Ceiling height</li>
              <li>Number of occupants</li>
              <li>Duct losses</li>
              <li>Local climate data (Ogden ≠ Logan ≠ Layton)</li>
              <li>Elevation effects (Cache County at 4,800+ ft)</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Red flag:</strong> Any contractor who quotes a system size without a detailed calculation or inspection is guessing. Find someone else.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Brands That Work Well in Utah</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Top Tier (Best Performance, Highest Cost)</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Carrier / Bryant:</strong> Excellent cold-weather performance, strong local service network</li>
            <li><strong className="text-white">Trane / American Standard:</strong> Very reliable, good for extreme climates</li>
            <li><strong className="text-white">Lennox:</strong> High efficiency, smart home integration</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Mid-Tier (Best Value)</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Rheem / Ruud:</strong> Great reliability for price, widely available in Utah</li>
            <li><strong className="text-white">Goodman / Daikin:</strong> Budget-friendly, decent efficiency</li>
            <li><strong className="text-white">York:</strong> Solid mid-range choice</li>
          </ul>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Utah tip:</strong> Choose a brand your local contractor specializes in. A well-installed mid-tier system beats a poorly-installed premium system every time.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Recommendation for Most Utah Homes</h2>

          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Gas Furnace (95%+ AFUE) + AC (16+ SEER2)</h3>
            <p className="text-white/70 text-center mb-6">
              Or step up to <strong className="text-white">Dual-Fuel</strong> if budget allows
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Why:</h4>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>✓ Proven reliable in Utah's extremes</li>
                  <li>✓ Every contractor services these</li>
                  <li>✓ Gas heating works in any cold</li>
                  <li>✓ Reasonable upfront cost</li>
                  <li>✓ Parts always available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Typical Cost:</h4>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>Gas + AC: $7,000–$14,000</li>
                  <li>Dual-Fuel: $9,000–$16,000</li>
                  <li>Expected life: 15–20 years</li>
                  <li>After rebates: -$500–$2,000</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Final Tips for Utah Homeowners</h2>

          <ol className="space-y-4 text-white/70 mb-12 pl-6 list-decimal">
            <li>
              <strong className="text-white">Don't cheap out on installation.</strong> A $5,000 system installed perfectly outperforms a $10,000 system installed poorly.
            </li>
            <li>
              <strong className="text-white">Upgrade your air filtration.</strong> Winter inversions and summer smoke make MERV 11–13 filters essential.
            </li>
            <li>
              <strong className="text-white">Consider a smart thermostat.</strong> Utah's rapid temp swings benefit from adaptive scheduling (Ecobee, Nest).
            </li>
            <li>
              <strong className="text-white">Size it right.</strong> Insist on Manual J calculation. Oversized = short-cycling. Undersized = never comfortable.
            </li>
            <li>
              <strong className="text-white">Plan for maintenance.</strong> Annual tune-ups (spring + fall) prevent 80% of emergency failures.
            </li>
            <li>
              <strong className="text-white">Install before peak season.</strong> Replace in spring or fall, not July or January when demand is highest.
            </li>
          </ol>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Find the Right System for Your Home?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Get personalized recommendations and quotes from licensed contractors who understand Utah's climate.
            </p>
            <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors">
              Get Free Consultation →
            </Link>
          </div>
        </div>

      </article>

      {/* Related Articles */}
      <section className="border-t border-white/10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ac-replacement-cost-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">COST GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">AC Replacement Cost Guide</h3>
            <p className="text-sm text-white/40">What to expect in 2026 →</p>
          </Link>
          <Link href="/blog/furnace-repair-vs-replace" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Repair vs Replace Decision</h3>
            <p className="text-sm text-white/40">Make the right call →</p>
          </Link>
          <Link href="/blog/energy-audit-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">ENERGY SAVINGS</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Home Energy Audits</h3>
            <p className="text-sm text-white/40">Find hidden savings →</p>
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
