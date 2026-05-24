import Link from 'next/link';

export default function OgdenHVACCompaniesPage() {
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
        <span className="text-white/60">Choosing an HVAC Company</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-[#e85d26] font-medium mb-4">LOCAL GUIDES</div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
            How to Choose an HVAC Company in Ogden, Utah
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
            <span>March 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed">
            What to look for when hiring an HVAC contractor in Ogden — <strong className="text-white">licensing, insurance, reviews</strong>, and red flags to avoid. Plus questions to ask before signing any contract.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Why This Matters in Ogden</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            The HVAC industry in Northern Utah has hundreds of contractors — from one-person operations to regional chains. Quality varies dramatically:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Great contractors</strong> properly size systems, do clean installs, stand behind their work, and charge fair prices</li>
            <li><strong className="text-white">Bad contractors</strong> oversell, rush installations, cut corners on permits, and disappear when warranty work is needed</li>
          </ul>

          <p className="text-white/70 leading-relaxed mb-8">
            In Ogden's climate (sub-zero winters, 100°F+ summers), a poorly installed system doesn't just waste money — it fails when you need it most. Here's how to find the good ones.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 1: Verify Licensing & Insurance</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            <strong className="text-white">Non-negotiable requirements:</strong>
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">What Every Ogden HVAC Contractor Must Have:</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="text-white">Utah HVAC Contractor License (S200/S220)</strong>
                <p className="text-white/60 mt-1">Verify at: <span className="text-[#e85d26]">dopl.utah.gov/lookup</span> (Division of Professional Licensing)</p>
              </li>
              <li>
                <strong className="text-white">General Liability Insurance</strong>
                <p className="text-white/60 mt-1">Protects you if they damage your home during installation</p>
              </li>
              <li>
                <strong className="text-white">Workers' Compensation Insurance</strong>
                <p className="text-white/60 mt-1">Protects you if a technician gets injured on your property</p>
              </li>
              <li>
                <strong className="text-white">Bonded</strong>
                <p className="text-white/60 mt-1">Financial protection if contractor doesn't complete work</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">⚠️ Red Flag:</strong> Any contractor who hesitates to provide license numbers or insurance certificates. Legitimate contractors share this information freely — it's required by law.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 2: Check Reviews & References</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Where to Look</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li><strong className="text-white">Google Reviews</strong> — Most transparent, hard to fake</li>
            <li><strong className="text-white">Better Business Bureau (BBB)</strong> — Shows complaint history</li>
            <li><strong className="text-white">Nextdoor</strong> — Neighborhood recommendations (Ogden, Roy, South Ogden)</li>
            <li><strong className="text-white">Facebook</strong> — Community groups often have candid discussions</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">What to Look For</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#4ade80] mb-3">✓ Green Flags:</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>4.0+ star average (no one is perfect)</li>
                <li>Hundreds of reviews (not just 10–20)</li>
                <li>Consistent quality over time</li>
                <li>Owner responds to negative reviews professionally</li>
                <li>Specific details in positive reviews ("John explained everything clearly")</li>
                <li>Mentions of clean work, on-time service</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-bold text-[#ef4444] mb-3">✗ Red Flags:</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Below 3.5 stars</li>
                <li>Pattern of negative reviews (not isolated incidents)</li>
                <li>Complaints about shoddy work, ghosting, pressure sales</li>
                <li>No online presence at all (suspicious in 2026)</li>
                <li>Too many 5-star reviews in short time (likely fake)</li>
                <li>Owner argues with customers publicly</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Ask for Local References</h3>
          <p className="text-white/70 leading-relaxed mb-8">
            Request 3–5 recent references (past 12 months) in Ogden or nearby. Call them and ask:
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li>"Would you hire them again?"</li>
            <li>"Did they show up on time?"</li>
            <li>"Was the work site left clean?"</li>
            <li>"Any issues during or after installation?"</li>
            <li>"How was communication throughout the project?"</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Step 3: Get Multiple Quotes (But Not Too Many)</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            <strong className="text-white">Sweet spot: 3–5 quotes</strong>
          </p>

          <ul className="space-y-2 text-white/70 mb-8 pl-6 list-disc">
            <li><strong className="text-white">Too few (1–2):</strong> No price/quality comparison</li>
            <li><strong className="text-white">Just right (3–5):</strong> Good range, manageable</li>
            <li><strong className="text-white">Too many (6+):</strong> Exhausting, diminishing returns</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Mix Your Choices:</h3>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li><strong className="text-white">1–2 large regional companies</strong> — established brands, often more expensive but predictable</li>
              <li><strong className="text-white">2–3 local Ogden contractors</strong> — often better prices, more personal service</li>
              <li><strong className="text-white">1 newer/smaller operation</strong> — sometimes great value if owner-operated</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Questions to Ask During Quotes</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Don't just collect numbers. Ask these questions to separate good contractors from bad:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">1. Load Calculation</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "Do you do a Manual J load calculation?"</p>
              <p><strong className="text-[#4ade80]">Good answer:</strong> "Yes, we perform a full Manual J for every installation" (may charge $50–$150, often credited toward install)</p>
              <p><strong className="text-[#ef4444]">Bad answer:</strong> "We can eyeball it based on square footage" or "Same size as your old unit is fine"</p>
              <p className="text-white/50 mt-2"><strong>Why it matters:</strong> Proper sizing is critical in Ogden's extreme climate. Guessing leads to oversized or undersized systems.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">2. Experience & Specialization</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "How long have you been installing [specific brand]?"</p>
              <p><strong className="text-[#4ade80]">Good answer:</strong> "5+ years with this brand, we're factory-trained and do 50+ installs per year"</p>
              <p><strong className="text-[#ef4444]">Bad answer:</strong> "We install everything" (jack-of-all-trades, master of none)</p>
              <p className="text-white/50 mt-2"><strong>Tip:</strong> Choose a contractor who specializes in 2–3 brands and has deep experience with them.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">3. What's Included</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "What exactly is included in this price?"</p>
              <p><strong className="text-[#4ade80]">Should include:</strong></p>
              <ul className="pl-6 list-disc space-y-1 text-white/60">
                <li>All equipment (indoor + outdoor units)</li>
                <li>Installation labor</li>
                <li>Permits and inspections</li>
                <li>Old equipment disposal</li>
                <li>Startup and testing</li>
                <li>Warranty registration</li>
              </ul>
              <p><strong className="text-[#ef4444]">Red flag:</strong> Vague answer, or "permits are extra" (they shouldn't be)</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">4. Timeline</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "When can you install, and how long will it take?"</p>
              <p><strong className="text-[#4ade80]">Typical timeline:</strong></p>
              <ul className="pl-6 list-disc space-y-1 text-white/60">
                <li>Off-season (April–May, Sept–Oct): 1–2 weeks</li>
                <li>Peak season (July, January): 3–6 weeks</li>
                <li>Install time: 1 day (simple), 2 days (complex)</li>
              </ul>
              <p><strong className="text-[#ef4444]">Red flag:</strong> "We can start tomorrow" (when others are booked weeks out — suggests slow business for a reason)</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">5. Warranty</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "What warranty do you offer on labor?"</p>
              <p><strong className="text-[#4ade80]">Standard:</strong> 1–2 years on installation labor (equipment warranty is separate, 5–10 years from manufacturer)</p>
              <p><strong className="text-[#ef4444]">Red flag:</strong> No labor warranty, or "call the manufacturer" (means they won't stand behind their work)</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">6. Rebates & Financing</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p><strong className="text-white">Ask:</strong> "Do you handle utility rebate paperwork?"</p>
              <p><strong className="text-[#4ade80]">Good contractors:</strong> Will help with Rocky Mountain Power rebates and federal tax credit documentation</p>
              <p><strong className="text-white">Also ask:</strong> Financing options (many offer 0% for 6–12 months)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Red Flags to Avoid</h2>

          <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-white mb-4">Walk Away If You See:</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="text-white">Pressure to decide today</strong>
                <p className="text-white/50 mt-1">"This price is only good if you sign right now" — legitimate contractors give you time</p>
              </li>
              <li>
                <strong className="text-white">Significantly cheaper than all other quotes</strong>
                <p className="text-white/50 mt-1">10%+ cheaper usually means corners will be cut (cheap parts, no permits, unlicensed helpers)</p>
              </li>
              <li>
                <strong className="text-white">No written estimate</strong>
                <p className="text-white/50 mt-1">Verbal quotes lead to disputes. Get everything in writing.</p>
              </li>
              <li>
                <strong className="text-white">Cash-only or "discount for cash"</strong>
                <p className="text-white/50 mt-1">Often means they're avoiding taxes, won't be around for warranty work</p>
              </li>
              <li>
                <strong className="text-white">Won't provide proof of insurance</strong>
                <p className="text-white/50 mt-1">You could be liable if they're injured or damage your home</p>
              </li>
              <li>
                <strong className="text-white">Upfront payment demanded</strong>
                <p className="text-white/50 mt-1">Standard is 0–25% deposit, balance on completion. Never pay 100% upfront.</p>
              </li>
              <li>
                <strong className="text-white">Pushes oversized equipment</strong>
                <p className="text-white/50 mt-1">"Bigger is better" is false — properly sized > oversized</p>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Comparing Quotes: Price Isn't Everything</h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Once you have 3–5 quotes, compare on these factors:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left p-4 font-medium text-white/80">Factor</th>
                  <th className="text-left p-4 font-medium text-white/80">Weight</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Installation quality reputation</strong></td>
                  <td className="p-4 text-[#e85d26]">High (most important)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Proper sizing (Manual J)</strong></td>
                  <td className="p-4 text-[#e85d26]">High</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Labor warranty</strong></td>
                  <td className="p-4 text-[#e85d26]">High</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Equipment brand/efficiency</strong></td>
                  <td className="p-4 text-white">Medium</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4"><strong className="text-white">Total price</strong></td>
                  <td className="p-4 text-white">Medium (within reason)</td>
                </tr>
                <tr>
                  <td className="p-4"><strong className="text-white">Financing options</strong></td>
                  <td className="p-4 text-white">Low (nice to have)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 leading-relaxed">
              <strong className="text-[#e85d26]">💡 Ogden Reality:</strong> A $7,000 system installed perfectly will outperform a $10,000 system installed poorly. Don't choose solely on price or brand — installation quality is what matters most.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Local vs. National Companies</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Local Ogden Contractors</h3>
              <p className="text-sm text-[#4ade80] mb-3">Pros:</p>
              <ul className="space-y-1 text-sm text-white/60 pl-6 list-disc mb-4">
                <li>Often better prices</li>
                <li>More flexible, personal service</li>
                <li>Owner-operated = accountability</li>
                <li>Familiar with Ogden climate/homes</li>
              </ul>
              <p className="text-sm text-[#ef4444] mb-3">Cons:</p>
              <ul className="space-y-1 text-sm text-white/60 pl-6 list-disc">
                <li>Smaller crew = longer wait times</li>
                <li>May lack resources for huge jobs</li>
                <li>Less brand selection</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Regional/National Companies</h3>
              <p className="text-sm text-[#4ade80] mb-3">Pros:</p>
              <ul className="space-y-1 text-sm text-white/60 pl-6 list-disc mb-4">
                <li>More availability (bigger crews)</li>
                <li>Established reputation</li>
                <li>More warranty backing</li>
                <li>Better financing options</li>
              </ul>
              <p className="text-sm text-[#ef4444] mb-3">Cons:</p>
              <ul className="space-y-1 text-sm text-white/60 pl-6 list-disc">
                <li>Higher prices (overhead)</li>
                <li>Less flexible, more corporate</li>
                <li>May use subcontractors</li>
              </ul>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            <strong className="text-white">Both can be great.</strong> Focus on the individual contractor's quality, not company size. A 3-person local shop with 4.8 stars beats a national chain with 3.5 stars.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">After Installation: What to Expect</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Day of Install</h3>
          <ul className="space-y-2 text-white/70 mb-6 pl-6 list-disc">
            <li>Crew arrives on time (or calls if delayed)</li>
            <li>Protects floors/walls with drop cloths</li>
            <li>Explains work before starting</li>
            <li>Cleans up thoroughly (including old equipment removal)</li>
            <li>Tests system completely before leaving</li>
            <li>Shows you how to operate new system/thermostat</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white/90">Before Final Payment</h3>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/70 mb-4"><strong className="text-white">Verify these before signing off:</strong></p>
            <ul className="space-y-2 text-sm text-white/70 pl-6 list-disc">
              <li>System heats/cools properly</li>
              <li>All vents have good airflow</li>
              <li>Outdoor unit running smoothly</li>
              <li>Thermostat programmed correctly</li>
              <li>Warranty paperwork provided</li>
              <li>Permit inspection passed (if required)</li>
              <li>Work area cleaned completely</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Your Ogden HVAC Contractor Checklist</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
            <p className="text-white/70 mb-4">Use this checklist when evaluating contractors:</p>
            <div className="space-y-2 text-sm text-white/70">
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Utah HVAC license verified (dopl.utah.gov)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Insurance certificates provided (liability + workers comp)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>4.0+ star reviews, 50+ reviews minimum</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Will perform Manual J load calculation</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Written estimate provided (not just verbal)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>1–2 year labor warranty included</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Permits/inspections included in price</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Reasonable timeline (not "tomorrow" or "3 months")</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>Professional communication (returns calls, answers questions)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>No high-pressure sales tactics</span>
              </label>
            </div>
            <p className="text-white/70 mt-6">
              <strong className="text-white">If 8+ boxes checked:</strong> Good candidate. <strong className="text-white">If less than 6:</strong> Keep looking.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="bg-gradient-to-br from-[#e85d26]/20 to-[#e85d26]/5 border border-[#e85d26]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Quotes from Licensed Ogden Contractors?</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              We'll connect you with pre-screened, licensed HVAC companies in the Ogden area. Compare quotes, no obligation.
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
          <Link href="/blog/ac-replacement-cost-utah" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">COST GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">AC Replacement Costs</h3>
            <p className="text-sm text-white/40">Know what fair pricing looks like →</p>
          </Link>
          <Link href="/blog/best-hvac-systems-utah-climate" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">BUYING GUIDES</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Best Systems for Utah</h3>
            <p className="text-sm text-white/40">What to ask contractors to install →</p>
          </Link>
          <Link href="/blog/hvac-maintenance-checklist" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 transition-all">
            <div className="text-xs text-[#e85d26] font-medium mb-2">MAINTENANCE</div>
            <h3 className="font-bold mb-2 group-hover:text-[#e85d26] transition-colors">Maintenance Checklist</h3>
            <p className="text-sm text-white/40">After install, keep it running well →</p>
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
