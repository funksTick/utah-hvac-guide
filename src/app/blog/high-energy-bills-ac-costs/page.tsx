import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Energy Bills? Your AC May Be Costing You Hundreds | Utah HVAC Guide',
  description: 'Learn how aging AC systems drive up summer energy costs in Northern Utah, when to repair vs. replace, and how to save money without sacrificing comfort.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </Link>
        <Link href="/blog" className="text-sm text-white/60 hover:text-white">← Back to Blog</Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        <header className="mb-12">
          <div className="text-sm text-white/50 mb-4">May 27, 2026 • 7 min read</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            High Energy Bills? Your AC May Be Costing You Hundreds
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            If your summer electricity bills are climbing year over year, your HVAC system is probably the culprit. Here's how to diagnose the problem and decide if repair or replacement makes sense.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>The Hidden Cost of an Aging AC System</h2>
          <p>
            Most Northern Utah homeowners don't think about their AC until it breaks. But long before total failure, aging systems start bleeding money through inefficiency. A 15-year-old AC can cost 30-50% more to run than a new high-efficiency model — that's $300-$600+ per summer in extra electricity costs.
          </p>
          <p>
            Rocky Mountain Power rates in Utah have climbed steadily, and summer is peak pricing season. When your AC runs 8-12 hours per day in July and August, every efficiency point matters.
          </p>

          <h2>How to Spot an Energy-Wasting AC</h2>
          <p>Here are the warning signs your AC is costing you more than it should:</p>

          <h3>1. Your Bills Are Up 20%+ Over Last Year</h3>
          <p>
            Pull out last summer's Rocky Mountain Power bills and compare. If June-August costs are significantly higher and your usage habits haven't changed, your AC is likely struggling. Normal year-over-year variance is 5-10% (weather + rate changes). Anything above that is a red flag.
          </p>

          <h3>2. Your System Runs Constantly</h3>
          <p>
            A properly sized, efficient AC should cycle on and off throughout the day. If your outdoor unit runs nonstop from noon to 8 PM, it's either undersized, low on refrigerant, or losing efficiency to age and wear.
          </p>
          <p>
            <strong>Normal:</strong> 15-20 minute cycles with 5-10 minute breaks<br />
            <strong>Problem:</strong> 45+ minute continuous run with no break
          </p>

          <h3>3. Some Rooms Are Hot, Others Are Cold</h3>
          <p>
            Uneven cooling means your system can't keep up. This forces it to run longer to satisfy the thermostat (usually placed in a cooler room), wasting energy trying to cool spaces it can't reach.
          </p>
          <p>
            Possible causes: duct leaks, undersized system, failing compressor, or poor airflow.
          </p>

          <h3>4. Your System Is 10+ Years Old</h3>
          <p>
            HVAC efficiency has improved dramatically in the past decade. A system installed in 2016 or earlier is likely 30-40% less efficient than a 2025 model. Technology moves fast, and older systems simply can't compete.
          </p>

          <h3>5. You've Had Multiple Repairs in the Past 2 Years</h3>
          <p>
            Frequent repairs are a symptom of declining efficiency. When one component fails, it often puts extra strain on others, creating a cascade of problems. Each repair costs money — but ongoing inefficiency costs even more.
          </p>

          <h2>What's Normal for Summer Energy Bills in Northern Utah?</h2>
          <p>
            Average summer (June-August) electricity costs for a typical 1,800-2,200 sq ft home in Davis, Weber, or Cache counties:
          </p>
          <ul>
            <li><strong>Well-maintained 5-year-old system:</strong> $120-$180/month</li>
            <li><strong>Average 10-12 year old system:</strong> $180-$250/month</li>
            <li><strong>Aging 15+ year old system:</strong> $250-$350+/month</li>
          </ul>
          <p>
            If you're in Ogden or Layton paying $300+/month and your neighbors are at $150-$200, something's wrong.
          </p>

          <h2>Common Causes of High AC Energy Bills</h2>

          <h3>Low Refrigerant (Leak)</h3>
          <p>
            When refrigerant leaks, your AC loses cooling power. It runs longer to reach the set temperature, burning more electricity. Low refrigerant also damages the compressor, leading to expensive repairs or total failure.
          </p>
          <p><strong>Fix cost:</strong> $200-$600 (find leak + recharge). If your system uses R-22 (phased out), refrigerant alone can cost $100+/lb.</p>

          <h3>Dirty Coils and Filters</h3>
          <p>
            Clogged filters and dirty condenser coils reduce airflow and heat transfer efficiency. Your system works harder to move the same amount of cool air. This is the easiest (and cheapest) problem to fix.
          </p>
          <p><strong>Fix cost:</strong> $15-$30 DIY filter replacement, or $100-$150 for a professional coil cleaning.</p>

          <h3>Undersized System</h3>
          <p>
            If your AC was undersized from day one (common in spec homes built in the 2000s), it will never keep up on hot days. It runs constantly, uses maximum power, and still can't cool your home properly.
          </p>
          <p><strong>Fix cost:</strong> None — you need a replacement. This is a design problem, not a repair issue.</p>

          <h3>Poor Insulation or Duct Leaks</h3>
          <p>
            If your home has inadequate insulation or leaky ductwork (especially in the attic), your AC is cooling the outdoors instead of your living space. No amount of AC efficiency can overcome a poorly insulated home.
          </p>
          <p><strong>Fix cost:</strong> $1,500-$5,000 for attic insulation upgrade or duct sealing. But this pays for itself in 3-5 years through lower bills.</p>

          <h3>Aging, Inefficient System</h3>
          <p>
            If your AC is 15+ years old, it's simply outdated. Wear and tear reduce efficiency over time, and older technology uses more power by design. This is the most common culprit for high bills in Northern Utah.
          </p>
          <p><strong>Fix cost:</strong> $4,000-$8,000 for replacement. High upfront cost, but 30-50% lower operating costs moving forward.</p>

          <h2>Repair vs. Replace: The $5,000 Question</h2>
          <p>
            When your AC is costing you hundreds in extra energy bills, should you repair it or replace it? Here's the math:
          </p>

          <h3>When to Repair</h3>
          <ul>
            <li>System is under 8 years old</li>
            <li>Single, isolated issue (capacitor, fan motor, thermostat)</li>
            <li>Repair cost is under $500</li>
            <li>You plan to move within 2-3 years</li>
          </ul>

          <h3>When to Replace</h3>
          <ul>
            <li>System is 12+ years old</li>
            <li>Repair cost is over $1,500</li>
            <li>You've had 2+ repairs in the past 2 years</li>
            <li>Summer energy bills are $250+/month for an average-sized home</li>
            <li>Your system uses R-22 refrigerant (phased out, expensive to refill)</li>
          </ul>

          <h3>The 50% Rule</h3>
          <p>
            Many HVAC pros use this guideline: if the repair cost is more than 50% of a replacement AND your system is over 10 years old, replace it. You'll recoup the difference in energy savings within 5-7 years.
          </p>

          <h2>How Much Can a New AC Save You?</h2>
          <p>
            Let's say you're in Layton with a 15-year-old 10 SEER system paying $300/month in summer. A new 16 SEER system would cost roughly $5,500 installed, and drop your bills to $190/month.
          </p>
          <p><strong>Savings:</strong> $110/month × 4 months = $440/year</p>
          <p><strong>Payback period:</strong> 12-13 years on energy savings alone (plus increased home value, better comfort, and no repair costs)</p>
          <p>
            If your old system needs a $1,500 repair, that payback drops to 9-10 years. And if Rocky Mountain Power rates keep climbing (they have historically), payback accelerates.
          </p>

          <h2>What to Do Next</h2>

          <h3>Step 1: Get a Professional Energy Assessment</h3>
          <p>
            Before you spend thousands on a new AC, have a qualified HVAC tech inspect your system. They'll check:
          </p>
          <ul>
            <li>Refrigerant levels</li>
            <li>Airflow and ductwork</li>
            <li>Coil condition</li>
            <li>Insulation and home efficiency</li>
            <li>System age and expected remaining life</li>
          </ul>
          <p>
            Cost: $80-$150 (often free if you get a replacement quote). This diagnostic tells you whether a simple repair will solve the problem or if you're better off replacing.
          </p>

          <h3>Step 2: Compare Replacement Options</h3>
          <p>
            If replacement makes sense, get 2-3 quotes from licensed local HVAC companies in Northern Utah. Make sure quotes include:
          </p>
          <ul>
            <li>Equipment model and SEER rating</li>
            <li>Installation labor and materials</li>
            <li>Permits and inspections</li>
            <li>Warranty coverage (parts + labor)</li>
            <li>Expected energy savings</li>
          </ul>
          <p>
            Avoid the cheapest quote (often low quality) and the most expensive (often unnecessary upgrades). The middle quote is usually the sweet spot.
          </p>

          <h3>Step 3: Look Into Rebates and Financing</h3>
          <p>
            Rocky Mountain Power and some local Utah programs offer rebates for high-efficiency HVAC upgrades. Check for:
          </p>
          <ul>
            <li>Utility rebates: $50-$300 for 16+ SEER systems</li>
            <li>Federal tax credits: Up to $300-$600 for qualifying systems</li>
            <li>Manufacturer rebates: Seasonal promotions from Carrier, Trane, Lennox, etc.</li>
            <li>Contractor financing: 0% APR for 12-24 months (common in Ogden/Layton market)</li>
          </ul>
          <p>
            Between rebates and financing, a $5,500 replacement might end up costing $4,800 upfront and $200/month savings immediately.
          </p>

          <h2>Don't Wait Until It Dies</h2>
          <p>
            The worst time to replace an AC is in the middle of a July heat wave when you have no negotiating power and HVAC companies are slammed. If your system is aging and your bills are climbing, plan ahead. Get quotes in May or September when contractors are slower and more willing to negotiate.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold mb-3">Get a Free Energy Assessment</h3>
            <p className="text-white/70 mb-4">
              We'll connect you with licensed Northern Utah HVAC pros who can diagnose your system and give you honest recommendations — repair or replace.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/quote" 
                className="inline-block bg-[#e85d26] hover:bg-[#d14d1a] px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/sizing-calculator" 
                className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Size Calculator
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
