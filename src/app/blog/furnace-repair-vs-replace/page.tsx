import Link from 'next/link';

export default function FurnaceRepairVsReplacePage() {
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
        <span className="text-white/60">Furnace Repair vs Replace</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">GUIDES</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            Furnace Repair vs. Replace: What Utah Homeowners Need to Know
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>May 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            If your furnace is over <strong className="text-white">15 years old</strong> and repairs cost more than <strong className="text-white">50% of replacement</strong>, it's time to replace. Here's how to make the right call for Utah's cold winters.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">The Quick Decision Framework</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Use this simple rule to decide in 60 seconds:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-[#e85d26] mb-2">Age × Repair Cost = Decision</div>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <p><strong className="text-white">The $5,000 Rule:</strong></p>
              <p className="pl-4">Multiply your furnace's age by the repair cost. If the result is greater than $5,000, replace it.</p>
              <p><strong className="text-white">Examples:</strong></p>
              <ul className="space-y-2 pl-8 list-disc">
                <li>12 years old × $600 repair = $7,200 → <span className="text-[#e85d26] font-medium">Replace</span></li>
                <li>8 years old × $400 repair = $3,200 → <span className="text-[#4ade80] font-medium">Repair</span></li>
                <li>18 years old × $300 repair = $5,400 → <span className="text-[#e85d26] font-medium">Replace</span></li>
              </ul>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            This rule accounts for both the age-related risk of future failures and the opportunity cost of sinking money into an aging system. But there are other factors to consider...
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">When to Replace Your Furnace</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Age: The #1 Factor</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Gas furnaces in Northern Utah typically last:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">10–15 years:</strong></td>
                  <td className="p-4">Increased breakdowns expected, consider replacement if major repair needed</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">15–20 years:</strong></td>
                  <td className="p-4">Living on borrowed time, parts getting expensive/scarce</td>
                </tr>
                <tr>
                  <td className="p-4"><strong className="text-white">20+ years:</strong></td>
                  <td className="p-4">Replace immediately (even if working) — failure risk during Utah winter is too high</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">❄️ Utah Reality Check:</strong> A furnace failure during a January cold snap (sub-zero temps) isn't just uncomfortable — it's a frozen pipe emergency. Don't gamble with a 20+ year old furnace.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Repair Cost Threshold</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Common repair costs in Northern Utah:
          </p>

          <ul className="space-y-3 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Minor repairs</strong> ($150–$500): Thermostat, flame sensor, igniter, limit switch
              <span className="block text-sm text-white/50 mt-1">→ Almost always worth repairing, regardless of age</span>
            </li>
            <li><strong className="text-white">Medium repairs</strong> ($500–$1,500): Blower motor, gas valve, control board, inducer motor
              <span className="block text-sm text-white/50 mt-1">→ Repair if &lt;10 years old, consider replacement if 15+</span>
            </li>
            <li><strong className="text-white">Major repairs</strong> ($1,500–$3,000): Heat exchanger, entire blower assembly, full control system
              <span className="block text-sm text-white/50 mt-1">→ Usually makes more sense to replace unless very new</span>
            </li>
          </ul>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Rule of thumb:</strong> If the repair costs more than 50% of a new furnace, replace it (especially if over 12 years old).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Efficiency Matters in Utah</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            With Utah's 4–6 month heating season and cold winters, efficiency upgrades pay off faster than most climates.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-4">Energy Savings Example (2,000 sq ft Utah home):</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>Old 80% AFUE furnace:</span>
                <span className="text-white font-medium">$1,200/year heating cost</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>New 95% AFUE furnace:</span>
                <span className="text-white font-medium">$1,010/year heating cost</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4ade80] font-medium">Annual savings:</span>
                <span className="text-[#4ade80] font-bold">$190/year</span>
              </div>
            </div>
            <p className="text-xs text-white/50 mt-4">
              Based on typical Dominion Energy gas rates and 4,500 heating degree days in Ogden/Layton area.
            </p>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            With a new furnace costing $3,000–$5,500, you'll recoup the efficiency upgrade in 8–12 years — and that's before factoring in avoided repairs on the old unit.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Multiple Repairs = Red Flag</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            If you've had 2+ repairs in the past 2 years, your furnace is telling you something.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-3">Calculate your total cost:</h4>
            <ul className="space-y-2 text-sm text-white/60 pl-6 list-disc">
              <li>Past 2 years of repairs</li>
              <li>+ Current needed repair</li>
              <li>+ Likely repairs in next 2 years (estimate $500–$1,000 for aging furnace)</li>
              <li>+ Emergency service fees (often $200+ for after-hours calls)</li>
              <li>+ Lost comfort / frozen pipe risk</li>
            </ul>
            <p className="text-white/70 mt-4">
              If this total approaches $2,000–$3,000, you're better off replacing now and getting a 15+ year warranty.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Replace Immediately If:</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-[#ef4444]">Cracked heat exchanger</strong> — carbon monoxide danger, immediate replacement required</li>
            <li><strong className="text-white">Yellow or flickering flame</strong> — incomplete combustion, potential CO issue</li>
            <li><strong className="text-white">Soot around registers</strong> — sign of combustion problems</li>
            <li><strong className="text-white">Rust on flue pipe or heat exchanger</strong> — structural failure imminent</li>
            <li><strong className="text-white">Age 20+ years</strong> — even if working fine, don't risk winter failure</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">When to Repair Your Furnace</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Repair Makes Sense If:</h3>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-3 text-white/70">
              <li>
                <strong className="text-[#4ade80]">✓ Furnace is under 10 years old</strong>
                <p className="text-sm text-white/50 mt-1">Still has significant life left, repairs are worth it</p>
              </li>
              <li>
                <strong className="text-[#4ade80]">✓ First major repair</strong>
                <p className="text-sm text-white/50 mt-1">One component failure doesn't indicate system-wide issues</p>
              </li>
              <li>
                <strong className="text-[#4ade80]">✓ Repair cost under $500</strong>
                <p className="text-sm text-white/50 mt-1">Minor fixes (igniter, flame sensor, thermostat) are cheap insurance</p>
              </li>
              <li>
                <strong className="text-[#4ade80]">✓ Under warranty</strong>
                <p className="text-sm text-white/50 mt-1">Parts or labor covered — no-brainer to repair</p>
              </li>
              <li>
                <strong className="text-[#4ade80]">✓ Well-maintained unit</strong>
                <p className="text-sm text-white/50 mt-1">Annual tune-ups extend life significantly</p>
              </li>
              <li>
                <strong className="text-[#4ade80]">✓ Budget constraints right now</strong>
                <p className="text-sm text-white/50 mt-1">A $300 repair buys you time to save for replacement (but don't wait too long if 15+ years old)</p>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Common Repairs Worth Making</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            These repairs are usually worth it regardless of age:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">Component</th>
                  <th className="text-left p-4 font-medium text-white/80">Cost</th>
                  <th className="text-left p-4 font-medium text-white/80">Worth Repairing?</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4">Igniter</td>
                  <td className="p-4">$150–$300</td>
                  <td className="p-4 text-[#4ade80]">✓ Always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Flame sensor</td>
                  <td className="p-4">$100–$250</td>
                  <td className="p-4 text-[#4ade80]">✓ Always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Thermostat</td>
                  <td className="p-4">$150–$400</td>
                  <td className="p-4 text-[#4ade80]">✓ Always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Limit switch</td>
                  <td className="p-4">$150–$300</td>
                  <td className="p-4 text-[#4ade80]">✓ Always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Blower motor</td>
                  <td className="p-4">$400–$800</td>
                  <td className="p-4 text-white">Maybe (depends on age)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Gas valve</td>
                  <td className="p-4">$400–$900</td>
                  <td className="p-4 text-white">Maybe (depends on age)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Control board</td>
                  <td className="p-4">$400–$1,000</td>
                  <td className="p-4 text-white">Maybe (depends on age)</td>
                </tr>
                <tr>
                  <td className="p-4">Heat exchanger</td>
                  <td className="p-4">$1,500–$3,000</td>
                  <td className="p-4 text-[#ef4444]">✗ Rarely (replace furnace instead)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Utah-Specific Considerations</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Winter Failure Risk</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Utah winters are unforgiving:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Sub-zero nights are common</strong> in Weber, Cache, and Box Elder counties (December–February)</li>
            <li><strong className="text-white">Frozen pipes happen fast</strong> — within 6–12 hours without heat in extreme cold</li>
            <li><strong className="text-white">Emergency HVAC service is expensive</strong> — $200+ after-hours fees, 2–6 hour wait times</li>
            <li><strong className="text-white">Peak season replacement delays</strong> — January furnace failures mean 1–2 week wait for new install</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">⚠️ Risk Assessment:</strong> If your furnace is 18+ years old, consider replacing in fall (September–October) rather than gambling on another winter. Emergency replacements in January cost more and you have no time to shop around.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Best Time to Replace in Utah</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#4ade80] mb-3">✓ Off-Season (Best Value)</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><strong className="text-white">September–November:</strong> Before winter rush</li>
                <li><strong className="text-white">April–May:</strong> After heating season</li>
                <li><strong>Benefits:</strong> Better pricing, 1–2 week install times, no emergency pressure</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#ef4444] mb-3">✗ Peak Season (Expect Delays)</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><strong className="text-white">December–January:</strong> Highest demand</li>
                <li><strong className="text-white">July–August:</strong> AC work takes priority</li>
                <li><strong>Drawbacks:</strong> Higher prices, 2–4 week waits, limited contractor availability</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Consider a Dual-Fuel System</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            If replacing your furnace, consider upgrading to a heat pump + gas furnace combo:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Heat pump handles mild temps</strong> (35°F+) very efficiently</li>
            <li><strong className="text-white">Gas furnace kicks in during deep cold</strong> (below 35°F or when heat pump can't keep up)</li>
            <li><strong className="text-white">Saves 20–40% on heating costs</strong> compared to gas-only in Utah's variable climate</li>
            <li><strong className="text-white">Federal tax credits available</strong> — up to $2,000 for qualifying heat pumps (2026)</li>
          </ul>

          <p className="text-white/70 leading-relaxed mb-8">
            Dual-fuel systems cost $7,000–$14,000 installed (vs. $3,000–$5,500 for gas furnace only), but energy savings and rebates make them worth considering if you're replacing anyway.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">How to Make the Decision</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Follow this decision tree when your furnace breaks down:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <ol className="space-y-4 text-white/70">
              <li>
                <strong className="text-white text-lg">1. Check the age</strong>
                <ul className="mt-2 space-y-1 pl-6 list-disc text-sm text-white/60">
                  <li>Under 10 years? → Lean toward repair</li>
                  <li>10–15 years? → Depends on repair cost and history</li>
                  <li>15–20 years? → Lean toward replacement</li>
                  <li>20+ years? → Replace immediately</li>
                </ul>
              </li>
              <li>
                <strong className="text-white text-lg">2. Get a diagnosis</strong>
                <p className="text-sm text-white/60 mt-1">
                  Have a licensed technician diagnose the problem and provide a written estimate. Ask: "If this were your house, what would you do?"
                </p>
              </li>
              <li>
                <strong className="text-white text-lg">3. Calculate total cost</strong>
                <p className="text-sm text-white/60 mt-1">
                  Add up: Current repair + recent repairs (past 2 years) + likely future repairs + risk of winter failure
                </p>
              </li>
              <li>
                <strong className="text-white text-lg">4. Compare to replacement</strong>
                <ul className="mt-2 space-y-1 pl-6 list-disc text-sm text-white/60">
                  <li>New furnace: $3,000–$5,500 (standard efficiency)</li>
                  <li>New high-efficiency: $4,000–$7,000 (95%+ AFUE)</li>
                  <li>Dual-fuel system: $7,000–$14,000</li>
                </ul>
              </li>
              <li>
                <strong className="text-white text-lg">5. Factor in peace of mind</strong>
                <p className="text-sm text-white/60 mt-1">
                  A new furnace means 10–15 years of worry-free heating, lower energy bills, and no emergency calls during Utah's brutal winters. That's worth something.
                </p>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Questions to Ask Your HVAC Contractor</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Before deciding, ask these questions:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="text-white">"What's the root cause of this failure?"</strong>
                <p className="text-white/50 mt-1">If it's a one-off component failure, repair makes sense. If it's age-related wear, other parts will fail soon.</p>
              </li>
              <li>
                <strong className="text-white">"How long will this repair last?"</strong>
                <p className="text-white/50 mt-1">Honest contractors will give you realistic expectations, not guarantees.</p>
              </li>
              <li>
                <strong className="text-white">"What other issues did you see during inspection?"</strong>
                <p className="text-white/50 mt-1">Multiple small issues indicate system-wide aging.</p>
              </li>
              <li>
                <strong className="text-white">"If this were your house, would you repair or replace?"</strong>
                <p className="text-white/50 mt-1">Cut through the sales pitch and get their honest opinion.</p>
              </li>
              <li>
                <strong className="text-white">"What would a new furnace cost, installed?"</strong>
                <p className="text-white/50 mt-1">Get both options quoted so you can compare accurately.</p>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Financing Your Replacement</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            If replacement makes sense but budget is tight:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">0% financing:</strong> Many contractors offer 6–12 month no-interest financing</li>
            <li><strong className="text-white">HELOC:</strong> Home equity line of credit (tax-deductible interest)</li>
            <li><strong className="text-white">Utility bill financing:</strong> Dominion Energy offers on-bill financing for qualified homeowners</li>
            <li><strong className="text-white">Energy efficiency rebates:</strong> Rocky Mountain Power offers $300–$600 for high-efficiency furnaces</li>
            <li><strong className="text-white">Federal tax credits:</strong> 30% credit (up to $600) for qualifying high-efficiency furnaces</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-12">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Pro Tip:</strong> Factor in energy savings when calculating affordability. A new 95% AFUE furnace saves $150–$250/year on gas bills compared to an old 80% unit — that's like a $15–$25/month payment toward itself.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Not Sure Whether to Repair or Replace?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Get honest opinions from licensed Utah HVAC contractors. No pressure, just straight talk about what's best for your situation.
            </p>
            <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors">
              Get Free Assessment →
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
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">AC Replacement Cost in Utah</h3>
            <p className="text-sm text-white/40">What you'll actually pay in 2026 →</p>
          </Link>
          <Link href="/blog/best-hvac-systems-utah-climate" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">BUYING GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Best HVAC Systems for Utah</h3>
            <p className="text-sm text-white/40">Systems that handle extreme temps →</p>
          </Link>
          <Link href="/blog/hvac-maintenance-checklist" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">MAINTENANCE</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">HVAC Maintenance Checklist</h3>
            <p className="text-sm text-white/40">Extend your system's lifespan →</p>
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
