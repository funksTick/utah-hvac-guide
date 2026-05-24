import Link from 'next/link';

export default function HVACMaintenanceChecklistPage() {
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
        <span className="text-white/60">Maintenance Checklist</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">MAINTENANCE</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            HVAC Maintenance Checklist for Utah Homeowners
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>March 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            Change filters every <strong className="text-white">90 days</strong>, schedule professional tune-ups <strong className="text-white">twice a year</strong>, and know the warning signs before they become emergencies. Here's your complete Utah HVAC maintenance guide.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Maintenance Matters More in Utah</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Utah's climate is harder on HVAC systems than most regions:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Extreme temperature range</strong> — 100°F+ summers to sub-zero winters means year-round system stress</li>
            <li><strong className="text-white">Dry, dusty climate</strong> — filters clog faster, components wear faster</li>
            <li><strong className="text-white">Long seasons</strong> — 4–6 months heating + 3–4 months cooling = heavy use</li>
            <li><strong className="text-white">Air quality issues</strong> — winter inversions and wildfire smoke strain filters</li>
          </ul>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 The Reality:</strong> Well-maintained systems last 15–20 years in Utah. Neglected systems fail at 8–12 years. Annual maintenance costs $200–$300. Emergency repairs cost $300–$1,500. Prevention wins.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Monthly Tasks (5 minutes)</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Every Month Year-Round:</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <strong className="text-white">Check air filter</strong>
                    <p className="text-sm text-white/60 mt-1">Hold up to light — if you can't see through it, replace it</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <strong className="text-white">Inspect vents & registers</strong>
                    <p className="text-sm text-white/60 mt-1">Make sure furniture, curtains, or rugs aren't blocking airflow</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <strong className="text-white">Listen for strange noises</strong>
                    <p className="text-sm text-white/60 mt-1">Grinding, squealing, or rattling = call for service</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <strong className="text-white">Check thermostat</strong>
                    <p className="text-sm text-white/60 mt-1">Is it maintaining temperature? Any error messages?</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Filter Replacement Schedule for Utah</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Utah's dust and dry climate means more frequent filter changes than manufacturer recommendations:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">Filter Type</th>
                  <th className="text-left p-4 font-medium text-white/80">Utah Schedule</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4">1" disposable (basic)</td>
                  <td className="p-4 text-white">Every 30 days during peak use, 60 days off-season</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">1" pleated (MERV 8–11)</td>
                  <td className="p-4 text-white">Every 60–90 days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">4" pleated (MERV 11–13)</td>
                  <td className="p-4 text-white">Every 6–12 months</td>
                </tr>
                <tr>
                  <td className="p-4">HEPA / specialty filters</td>
                  <td className="p-4 text-white">Follow manufacturer specs (typically 6–12 months)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Check more often if:</strong> You have pets, live near construction, experience wildfire smoke, or run system constantly during inversions.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Seasonal Tasks</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Spring Checklist (Before Cooling Season)</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            <strong>When:</strong> April–May, before first 85°F+ day
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-4">DIY Tasks (30 minutes):</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>Replace air filter</li>
              <li>Clear debris from outdoor AC unit (leaves, cottonwood seeds, dirt)</li>
              <li>Spray down outdoor coils gently with hose (top to bottom)</li>
              <li>Check condensate drain line for clogs (pour cup of water + vinegar)</li>
              <li>Test AC in cooling mode (make sure cold air comes out)</li>
              <li>Inspect insulation on refrigerant lines (replace if cracked)</li>
              <li>Check thermostat batteries</li>
              <li>Clean vents and registers indoors</li>
            </ul>

            <h4 className="font-bold text-white mb-4">Professional Service ($100–$150):</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>Refrigerant level check (top off if low)</li>
              <li>Deep clean evaporator and condenser coils</li>
              <li>Check electrical connections and tighten</li>
              <li>Test capacitor and contactor</li>
              <li>Measure amp draw on compressor/fan motors</li>
              <li>Lubricate moving parts if needed</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Fall Checklist (Before Heating Season)</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            <strong>When:</strong> September–October, before first freeze
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-4">DIY Tasks (30 minutes):</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>Replace air filter</li>
              <li>Test furnace in heating mode</li>
              <li>Check all vents and registers (open for winter)</li>
              <li>Inspect furnace flame (should be steady blue, not yellow)</li>
              <li>Test carbon monoxide detectors (replace batteries)</li>
              <li>Clean around furnace area (no storage within 3 feet)</li>
              <li>Check chimney/flue for obstructions (if gas furnace)</li>
            </ul>

            <h4 className="font-bold text-white mb-4">Professional Service ($100–$150):</h4>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>Inspect heat exchanger for cracks (carbon monoxide risk)</li>
              <li>Test gas pressure and burner combustion</li>
              <li>Clean flame sensor</li>
              <li>Check blower motor and belt (if belt-drive)</li>
              <li>Test safety controls (limit switches, rollout switches)</li>
              <li>Measure temperature rise across heat exchanger</li>
            </ul>
          </div>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">⚠️ Utah Winter Reality:</strong> Furnace failures peak in January during cold snaps. Don't skip the fall tune-up — it's cheap insurance against a sub-zero emergency at 2 AM.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">During Peak Seasons</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Summer (June–August)</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li>Check/replace filter monthly</li>
            <li>Keep 3-foot clearance around outdoor unit (trim bushes, remove debris)</li>
            <li>Monitor for ice on refrigerant lines (sign of low refrigerant or airflow issue)</li>
            <li>Listen for unusual noises</li>
            <li>Ensure indoor vents aren't blocked by furniture</li>
            <li>Watch for water pooling near indoor unit (clogged drain)</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Winter (December–February)</h3>
          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li>Check/replace filter monthly</li>
            <li>Keep snow/ice clear from outdoor heat pump unit (if applicable)</li>
            <li>Don't block vents with holiday decorations or furniture</li>
            <li>Watch for short-cycling (frequent on/off) — sign of problem</li>
            <li>Monitor flame (should stay steady blue)</li>
            <li>Keep garage door closed if furnace is in garage</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Warning Signs: When to Call a Pro</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Don't ignore these red flags:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#ef4444] mb-4">🚨 Call Immediately (Safety Issues):</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>Carbon monoxide alarm sounds</li>
              <li>Gas smell near furnace</li>
              <li>Yellow or flickering furnace flame</li>
              <li>Burning electrical smell</li>
              <li>Water leaking from furnace</li>
            </ul>

            <h3 className="font-bold text-[#e85d26] mb-4">⚠️ Schedule Service Soon:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>System won't maintain temperature</li>
              <li>Increasing energy bills without usage change</li>
              <li>Uneven temperatures between rooms</li>
              <li>System cycles on/off frequently</li>
              <li>Weak airflow from vents</li>
              <li>Loud or unusual noises (grinding, squealing, banging)</li>
              <li>Excessive dust in home</li>
            </ul>

            <h3 className="font-bold text-white mb-4">ℹ️ Monitor / DIY First:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>Slight temperature swings (normal in extreme weather)</li>
              <li>Light frost on heat pump in winter (normal during defrost)</li>
              <li>Ductwork popping sounds (normal expansion/contraction)</li>
              <li>Thermostat not responding (replace batteries first)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Professional Maintenance Plans</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Most Utah HVAC companies offer annual maintenance plans:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Typical Plan Includes:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc mb-6">
              <li>Spring AC tune-up</li>
              <li>Fall furnace tune-up</li>
              <li>Priority emergency service (no after-hours fees)</li>
              <li>Discounts on repairs (10–20% typical)</li>
              <li>Filter reminders</li>
            </ul>

            <h3 className="font-bold text-white mb-4">Cost & Value:</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><strong className="text-white">Annual cost:</strong> $150–$300/year</li>
              <li><strong className="text-white">Value:</strong> 2 tune-ups alone = $200–$300, plus peace of mind</li>
              <li><strong className="text-white">ROI:</strong> Prevents 80% of emergency failures ($$$ savings)</li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Worth it if:</strong> Your system is 10+ years old, you don't have time for DIY maintenance, or you've had past emergency failures.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Maintenance Costs Breakdown</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">Task</th>
                  <th className="text-left p-4 font-medium text-white/80">Frequency</th>
                  <th className="text-left p-4 font-medium text-white/80">Cost</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4">Air filters</td>
                  <td className="p-4">Monthly (peak season)</td>
                  <td className="p-4 text-white">$10–$30/each</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Professional tune-up</td>
                  <td className="p-4">Spring + Fall</td>
                  <td className="p-4 text-white">$100–$150 each</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Thermostat batteries</td>
                  <td className="p-4">Annually</td>
                  <td className="p-4 text-white">$5–$10</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">Humidifier pad (if applicable)</td>
                  <td className="p-4">Annually</td>
                  <td className="p-4 text-white">$15–$40</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Total Annual Cost</td>
                  <td className="p-4"></td>
                  <td className="p-4 text-[#e85d26] font-bold">$300–$500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong>Compare to:</strong> Emergency AC repair in July: $500–$1,500 + discomfort. Emergency furnace repair in January: $500–$2,000 + frozen pipe risk. Maintenance is the bargain.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Your Annual Maintenance Calendar</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">January</div>
                <div className="text-white/70">Check filter, monitor for issues during peak heating</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">February</div>
                <div className="text-white/70">Check filter, test CO detectors</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">March</div>
                <div className="text-white/70">Check filter</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-white min-w-[80px]">April</div>
                <div className="text-white/70"><strong className="text-white">Spring tune-up (AC)</strong>, replace filter, clean outdoor unit</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">May</div>
                <div className="text-white/70">Check filter, test AC before heat</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">June</div>
                <div className="text-white/70">Check filter monthly during cooling season</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">July</div>
                <div className="text-white/70">Check filter, keep outdoor unit clear</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">August</div>
                <div className="text-white/70">Check filter, monitor performance</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">September</div>
                <div className="text-white/70">Check filter</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-white min-w-[80px]">October</div>
                <div className="text-white/70"><strong className="text-white">Fall tune-up (Furnace)</strong>, replace filter, test heat</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">November</div>
                <div className="text-white/70">Check filter, replace CO detector batteries</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-[#e85d26] min-w-[80px]">December</div>
                <div className="text-white/70">Check filter monthly during heating season</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Quick Reference: What's Normal vs. Not</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-[#4ade80] mb-4">✓ Normal in Utah:</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>System runs constantly on extreme temp days (100°F+ or below 10°F)</li>
                <li>Light frost on heat pump during winter defrost cycle</li>
                <li>Ductwork popping/creaking when starting</li>
                <li>Slight temperature difference between floors (2–3°F)</li>
                <li>System takes 15–20 min to reach set temp</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-[#ef4444] mb-4">✗ Not Normal — Call Service:</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Ice on refrigerant lines in summer</li>
                <li>Yellow furnace flame</li>
                <li>Burning smell beyond first use</li>
                <li>Water pooling around equipment</li>
                <li>Loud grinding, squealing, or banging</li>
                <li>System won't reach set temp on moderate days</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Need Professional HVAC Maintenance?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Connect with licensed Utah contractors offering annual maintenance plans and tune-ups. Keep your system running efficiently.
            </p>
            <Link href="/#quote" className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors">
              Find Local Service →
            </Link>
          </div>
        </div>

      </article>

      {/* Related Articles */}
      <section className="border-t border-white/10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/furnace-repair-vs-replace" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Repair vs Replace Decision</h3>
            <p className="text-sm text-white/40">When maintenance isn't enough →</p>
          </Link>
          <Link href="/blog/energy-audit-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">ENERGY SAVINGS</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Home Energy Audits</h3>
            <p className="text-sm text-white/40">Find hidden inefficiencies →</p>
          </Link>
          <Link href="/blog/best-hvac-systems-utah-climate" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">BUYING GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Best Systems for Utah</h3>
            <p className="text-sm text-white/40">If you need a replacement →</p>
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
