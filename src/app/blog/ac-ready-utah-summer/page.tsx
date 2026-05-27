import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Your AC Ready for Utah Summer Heat? | Utah HVAC Guide',
  description: 'Northern Utah temperatures are climbing. Get your AC ready before the heat wave hits with our summer preparation checklist and local pro recommendations.',
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
          <div className="text-sm text-white/50 mb-4">May 27, 2026 • 6 min read</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Is Your AC Ready for Utah Summer Heat?
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Northern Utah temperatures are climbing fast. Don't wait for a breakdown on the hottest day of summer — here's how to prep your AC now.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Why Early Summer AC Prep Matters in Northern Utah</h2>
          <p>
            Utah summers are no joke. When temperatures hit 95°F+ in Davis, Weber, and Cache counties, your AC becomes mission-critical. The problem? Most people don't think about their cooling system until it fails — and by then, every HVAC company in Ogden and Layton is booked solid.
          </p>
          <p>
            A May or early June tune-up means you beat the rush, catch small problems before they become expensive emergencies, and keep your home comfortable when it matters most.
          </p>

          <h2>The 5-Minute DIY AC Check</h2>
          <p>Before you call a pro, do this quick walkthrough:</p>
          
          <h3>1. Check Your Air Filter</h3>
          <p>
            Dirty filters are the #1 cause of AC inefficiency. If it looks gray or clogged, replace it. Standard filters should be changed every 1-3 months during cooling season. You can buy them at any hardware store in Bountiful, Clearfield, or Logan.
          </p>
          <p><strong>Cost to ignore this:</strong> 5-15% higher energy bills, plus extra wear on your system.</p>

          <h3>2. Clear the Outdoor Unit</h3>
          <p>
            Walk outside and look at your condenser (the big metal box). Clear away leaves, grass clippings, and debris within 2 feet. Trim back bushes or plants that have grown too close. Airflow is everything.
          </p>

          <h3>3. Test Airflow at Vents</h3>
          <p>
            Hold your hand up to each vent in your home. Weak airflow in some rooms? That could mean duct leaks, a dying blower motor, or refrigerant issues. Time to call a tech.
          </p>

          <h3>4. Listen for Strange Noises</h3>
          <p>
            Grinding, squealing, or banging sounds are red flags. Normal AC operation is a steady hum. Anything else means something is wrong.
          </p>

          <h3>5. Check the Thermostat</h3>
          <p>
            Set your thermostat to cool mode and drop the temp 5 degrees below current room temp. Does the AC kick on within a minute? If not, you might have a thermostat or electrical issue.
          </p>

          <h2>When to Call a Professional</h2>
          <p>
            Even if your system passes the DIY check, a professional tune-up is worth it. Here's what a good Northern Utah HVAC tech will do during a maintenance visit:
          </p>
          <ul>
            <li>Clean condenser coils (improves efficiency by 5-15%)</li>
            <li>Check refrigerant levels (low refrigerant = poor cooling + higher bills)</li>
            <li>Inspect electrical connections and capacitors</li>
            <li>Lubricate moving parts</li>
            <li>Test airflow and temperature differentials</li>
            <li>Catch small issues before they become big problems</li>
          </ul>
          <p>
            <strong>Average maintenance cost in Northern Utah:</strong> $80-$150. Compare that to a $300-$800 emergency repair or $5,000+ replacement, and it's a no-brainer.
          </p>

          <h2>Red Flags: When Maintenance Won't Cut It</h2>
          <p>
            Sometimes a tune-up isn't enough. Here's when you should consider repair or replacement:
          </p>
          <ul>
            <li><strong>Age 12+ years:</strong> Older systems are less efficient and more prone to failure</li>
            <li><strong>Frequent repairs:</strong> If you've called for service 2-3 times in the past year, replacement might be cheaper long-term</li>
            <li><strong>Rising energy bills:</strong> 30%+ increase over last summer? Your system is dying</li>
            <li><strong>Uneven cooling:</strong> Some rooms hot, others cold? Could be ductwork, but often signals a struggling system</li>
            <li><strong>R-22 refrigerant:</strong> If your system uses R-22 (phased out in 2020), repairs are expensive and replacement makes more sense</li>
          </ul>

          <h2>What Does AC Maintenance Cost in Northern Utah?</h2>
          <p>Here's what you should expect to pay:</p>
          <ul>
            <li><strong>Basic tune-up:</strong> $80-$150 (includes filter, coil cleaning, safety check)</li>
            <li><strong>Premium maintenance plan:</strong> $150-$250/year (includes 2 visits: spring AC check + fall furnace check)</li>
            <li><strong>Emergency service call:</strong> $150-$300 just to show up, plus parts and labor</li>
          </ul>
          <p>
            Maintenance plans are popular in Ogden and Layton because they include priority service — meaning when everyone else is waiting 3-5 days for a tech in July, you get same-day or next-day.
          </p>

          <h2>Finding a Good HVAC Tech in Northern Utah</h2>
          <p>Not all HVAC companies are created equal. Here's what to look for:</p>
          <ul>
            <li><strong>Licensed and insured:</strong> Non-negotiable. Check Utah DOPL license status online</li>
            <li><strong>Upfront pricing:</strong> Good companies quote labor + parts before starting work</li>
            <li><strong>No high-pressure sales:</strong> If they push a $7,000 replacement for a $200 repair, walk away</li>
            <li><strong>Local reputation:</strong> Check Google reviews, ask neighbors, look for 4+ stars with 50+ reviews</li>
            <li><strong>Service area coverage:</strong> Make sure they actually serve your city (some companies say "Northern Utah" but won't come to Logan or Ogden)</li>
          </ul>

          <h2>DIY Maintenance You Can Do All Summer</h2>
          <p>
            Between professional tune-ups, keep your system running smoothly:
          </p>
          <ul>
            <li><strong>Change filters monthly</strong> during peak summer (June-August)</li>
            <li><strong>Spray down the outdoor unit</strong> with a garden hose every few weeks to remove dust/debris</li>
            <li><strong>Keep vents unblocked</strong> — no furniture or curtains blocking airflow</li>
            <li><strong>Use a programmable thermostat</strong> — raise temp when you're gone, save 10-15% on cooling costs</li>
            <li><strong>Close blinds during peak sun</strong> — reduces cooling load by 20%+</li>
          </ul>

          <h2>Bottom Line: Don't Wait for a Heat Wave</h2>
          <p>
            Every summer in Northern Utah, thousands of homeowners scramble for emergency AC repairs when temperatures spike. The smart move? Get ahead of it now. A $100 tune-up in May beats a $500 emergency repair in July — or worse, going without AC for days while you wait for an available tech.
          </p>
          <p>
            Need help finding a reliable local HVAC company? We connect Northern Utah homeowners with vetted pros in Davis, Weber, Cache, and Box Elder counties. Get quotes, compare pricing, and make an informed decision.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold mb-3">Get Connected with Local HVAC Pros</h3>
            <p className="text-white/70 mb-4">
              We'll help you find trusted, licensed HVAC technicians in your area. No pressure, no spam — just honest recommendations.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/maintenance" 
                className="inline-block bg-[#e85d26] hover:bg-[#d14d1a] px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Schedule Maintenance
              </Link>
              <Link 
                href="/quote" 
                className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
