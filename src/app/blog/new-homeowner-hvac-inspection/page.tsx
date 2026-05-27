import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Homeowner HVAC Inspection Guide for Northern Utah | Utah HVAC Guide',
  description: 'Just bought a home in Ogden, Layton, or Logan? Learn what to check, red flags to watch for, and when to call an HVAC pro for a thorough inspection.',
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
          <div className="text-sm text-white/50 mb-4">May 27, 2026 • 8 min read</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            New Homeowner HVAC Inspection Guide for Northern Utah
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Just moved into a home in Ogden, Layton, or Logan? Here's everything you need to know about inspecting your HVAC system — what to check yourself, when to call a pro, and red flags that could cost you thousands.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Why New Homeowners Should Inspect Their HVAC</h2>
          <p>
            Congratulations on your new home! But before you settle in, there's one critical system you need to understand: your HVAC. In Northern Utah, where summers hit 95°F+ and winters drop below 10°F, a failing furnace or AC isn't just uncomfortable — it's a safety and financial emergency.
          </p>
          <p>
            Here's the problem: home inspections rarely catch HVAC issues. Most general inspectors do a basic visual check and test the system for 5 minutes. They won't catch:
          </p>
          <ul>
            <li>Low refrigerant levels</li>
            <li>Aging heat exchangers (potential carbon monoxide risk)</li>
            <li>Poor airflow from duct leaks</li>
            <li>Systems on their last legs (working today, dead in 6 months)</li>
          </ul>
          <p>
            A post-purchase HVAC inspection by a licensed technician costs $80-$150 and can save you thousands in surprise repairs or replacements.
          </p>

          <h2>What to Check Before You Call a Pro</h2>
          <p>
            Before scheduling a professional inspection, do this DIY walkthrough. It takes 15 minutes and helps you understand your system's condition.
          </p>

          <h3>1. Find Your HVAC Equipment</h3>
          <p>
            Locate your furnace (usually in the basement, garage, or utility closet) and outdoor AC condenser (the metal box outside). Take photos of the brand name and model numbers — you'll need this for parts, service, and warranty lookups.
          </p>

          <h3>2. Check the Age</h3>
          <p>
            Look for a metal data plate on the furnace and AC unit. The serial number usually includes the manufacturing date. Decode it online (each brand formats differently) or ask an HVAC tech.
          </p>
          <p><strong>Age matters:</strong></p>
          <ul>
            <li><strong>0-7 years:</strong> Should be reliable with basic maintenance</li>
            <li><strong>8-12 years:</strong> Watch for signs of wear; budget for potential replacement within 3-5 years</li>
            <li><strong>13+ years:</strong> Living on borrowed time; start planning for replacement</li>
            <li><strong>18+ years:</strong> Urgently replace; efficiency is terrible and failure is imminent</li>
          </ul>

          <h3>3. Change the Air Filter</h3>
          <p>
            Find the filter slot (usually near the furnace or in a return vent). Pull it out and check its size (printed on the frame). If it's clogged or gray, replace it immediately.
          </p>
          <p>
            Dirty filters are the #1 cause of HVAC problems. They restrict airflow, reduce efficiency, and cause premature wear. Buy a multi-pack at any hardware store in Bountiful or Clearfield and change it every 1-3 months.
          </p>

          <h3>4. Inspect the Outdoor Unit</h3>
          <p>
            Walk around your AC condenser. Look for:
          </p>
          <ul>
            <li>Bent fins (reduces efficiency)</li>
            <li>Rust or corrosion</li>
            <li>Plants/debris within 2 feet</li>
            <li>Unlevel installation (should be on a flat pad)</li>
            <li>Refrigerant line insulation damage (the copper pipes running to the house)</li>
          </ul>
          <p>
            Clear away any leaves, grass, or junk. Good airflow = efficient cooling.
          </p>

          <h3>5. Test Airflow at Every Vent</h3>
          <p>
            Turn on your furnace or AC and check airflow at every register in your home. Weak or uneven airflow means:
          </p>
          <ul>
            <li>Duct leaks (common in older Utah homes)</li>
            <li>Blocked or closed vents</li>
            <li>Undersized ductwork</li>
            <li>Failing blower motor</li>
          </ul>
          <p>
            If some rooms barely get air, that's a problem worth investigating.
          </p>

          <h3>6. Listen for Strange Noises</h3>
          <p>
            Normal HVAC operation is a steady hum. Listen for:
          </p>
          <ul>
            <li><strong>Grinding/squealing:</strong> Worn bearings or belt</li>
            <li><strong>Banging/clanking:</strong> Loose components</li>
            <li><strong>Hissing:</strong> Refrigerant leak (expensive fix)</li>
            <li><strong>Clicking on/off repeatedly:</strong> Electrical issue or failing component</li>
          </ul>
          <p>
            Any of these sounds = call a tech before something breaks.
          </p>

          <h3>7. Check the Thermostat</h3>
          <p>
            Make sure your thermostat is working properly:
          </p>
          <ul>
            <li>Set to HEAT, raise temp 5 degrees → furnace should kick on within 1-2 minutes</li>
            <li>Set to COOL, lower temp 5 degrees → AC should kick on within 1-2 minutes</li>
            <li>If nothing happens, you might have a thermostat, electrical, or system failure</li>
          </ul>

          <h2>Red Flags That Require a Professional Inspection</h2>
          <p>
            Some issues can only be diagnosed by a licensed HVAC technician. Here's when to call:
          </p>

          <h3>System Age 12+ Years</h3>
          <p>
            Even if it's working fine, an aging system needs a thorough inspection. A tech can assess remaining life, identify wear, and help you budget for replacement before an emergency failure.
          </p>

          <h3>No Service Records</h3>
          <p>
            If the previous owner didn't provide maintenance records (or you suspect they never serviced it), assume the worst. Years of neglect lead to dirty coils, low refrigerant, and stressed components.
          </p>

          <h3>Uneven Temperatures</h3>
          <p>
            Hot upstairs, cold downstairs? One room always stuffy? This could be undersized equipment, duct leaks, or zoning issues. A pro can diagnose and recommend solutions.
          </p>

          <h3>High Energy Bills</h3>
          <p>
            Ask the previous owner or neighbors what their summer/winter utility bills look like. If yours are 30%+ higher, your HVAC is probably inefficient or malfunctioning.
          </p>

          <h3>Rust, Corrosion, or Water Stains</h3>
          <p>
            Water near your furnace (especially around the heat exchanger) can indicate a cracked heat exchanger — a serious safety hazard that requires immediate replacement. Rust on the AC unit suggests refrigerant leaks or weather damage.
          </p>

          <h2>What a Professional HVAC Inspection Includes</h2>
          <p>
            When you hire a licensed HVAC tech in Northern Utah, here's what a comprehensive inspection should cover:
          </p>

          <h3>Furnace Inspection</h3>
          <ul>
            <li>Heat exchanger condition (carbon monoxide safety check)</li>
            <li>Burner operation and flame pattern</li>
            <li>Gas pressure and connections</li>
            <li>Blower motor and belt condition</li>
            <li>Electrical connections and capacitors</li>
            <li>Flue pipe and venting (proper draft)</li>
            <li>Air filter condition</li>
            <li>Thermostat calibration</li>
          </ul>

          <h3>AC Inspection</h3>
          <ul>
            <li>Refrigerant charge (low refrigerant = poor cooling + higher bills)</li>
            <li>Condenser and evaporator coil cleanliness</li>
            <li>Compressor operation and amp draw</li>
            <li>Electrical connections and capacitors</li>
            <li>Airflow and temperature differential (should be 15-20°F difference between supply and return air)</li>
            <li>Condensate drain operation (prevents water damage)</li>
            <li>Refrigerant line insulation</li>
          </ul>

          <h3>Ductwork and Airflow</h3>
          <ul>
            <li>Duct leaks (can waste 20-30% of your conditioned air)</li>
            <li>Insulation in attic ducts</li>
            <li>Proper sizing for your home</li>
            <li>Return air adequacy</li>
          </ul>

          <h3>Overall System Assessment</h3>
          <ul>
            <li>Equipment age and expected remaining life</li>
            <li>Efficiency rating (SEER for AC, AFUE for furnace)</li>
            <li>Safety issues (carbon monoxide, gas leaks, electrical hazards)</li>
            <li>Recommended repairs or upgrades</li>
            <li>Estimated replacement cost (so you can budget accordingly)</li>
          </ul>

          <h2>How Much Does an HVAC Inspection Cost?</h2>
          <p>
            In Northern Utah (Ogden, Layton, Logan, Bountiful), expect to pay:
          </p>
          <ul>
            <li><strong>Basic inspection:</strong> $80-$150 (30-45 minutes, visual check + basic testing)</li>
            <li><strong>Comprehensive inspection:</strong> $150-$250 (1-2 hours, includes detailed report and photos)</li>
            <li><strong>Pre-purchase inspection (before closing):</strong> $200-$300 (more thorough, gives you negotiating power with the seller)</li>
          </ul>
          <p>
            Many HVAC companies waive the inspection fee if you proceed with recommended repairs or replacements. Ask about this upfront.
          </p>

          <h2>What Happens If the Inspection Finds Problems?</h2>

          <h3>Minor Issues ($100-$500)</h3>
          <ul>
            <li>Dirty coils → cleaning</li>
            <li>Worn capacitor → replacement</li>
            <li>Low refrigerant → recharge (assuming no leak)</li>
            <li>Thermostat malfunction → upgrade to programmable</li>
          </ul>
          <p>
            These are normal wear-and-tear items. Fix them now to avoid bigger problems later.
          </p>

          <h3>Major Issues ($1,000-$3,000)</h3>
          <ul>
            <li>Refrigerant leak → find and repair + recharge</li>
            <li>Blower motor failure → replacement</li>
            <li>Duct sealing and insulation → professional service</li>
            <li>Heat exchanger cracks → furnace replacement required (safety issue)</li>
          </ul>
          <p>
            These repairs are expensive but often worth it if the system is under 10 years old and otherwise in good shape.
          </p>

          <h3>System Replacement ($4,000-$12,000)</h3>
          <p>
            If your system is 15+ years old, has multiple problems, or poses a safety risk (cracked heat exchanger, severe refrigerant leak), replacement is the smart move.
          </p>
          <p>
            Don't panic — you have options:
          </p>
          <ul>
            <li><strong>Get multiple quotes:</strong> 2-3 local HVAC companies to compare pricing</li>
            <li><strong>Check for rebates:</strong> Rocky Mountain Power, federal tax credits, manufacturer promotions</li>
            <li><strong>Financing:</strong> Many contractors offer 0% for 12-24 months</li>
            <li><strong>Plan for off-season:</strong> Install in spring or fall for better pricing and faster scheduling</li>
          </ul>

          <h2>Questions to Ask Your HVAC Technician</h2>
          <p>
            When the tech finishes the inspection, make sure you understand:
          </p>
          <ul>
            <li>What's the age and expected remaining life of my system?</li>
            <li>Are there any safety concerns? (carbon monoxide, gas leaks, electrical hazards)</li>
            <li>What repairs are urgent vs. can wait?</li>
            <li>How much will repairs cost vs. replacement?</li>
            <li>What efficiency rating does my current system have? What could I upgrade to?</li>
            <li>Are there duct leaks or airflow issues affecting comfort?</li>
            <li>When should I schedule the next maintenance visit?</li>
          </ul>
          <p>
            A good HVAC tech will answer these clearly and honestly. If they pressure you into an immediate $7,000 replacement without explaining why, get a second opinion.
          </p>

          <h2>Ongoing Maintenance for New Homeowners</h2>
          <p>
            Once your inspection is done and any necessary repairs are made, set up a maintenance schedule:
          </p>
          <ul>
            <li><strong>Spring (April-May):</strong> AC tune-up before summer heat</li>
            <li><strong>Fall (September-October):</strong> Furnace tune-up before winter cold</li>
            <li><strong>Monthly:</strong> Check and change air filters</li>
            <li><strong>Quarterly:</strong> Clear debris from outdoor AC unit</li>
          </ul>
          <p>
            Many Northern Utah HVAC companies offer maintenance plans ($150-$250/year) that include 2 seasonal tune-ups + priority service + discounts on repairs. Worth it if you want peace of mind.
          </p>

          <h2>Bottom Line: Don't Skip the HVAC Inspection</h2>
          <p>
            You just spent hundreds of thousands of dollars on a home in Ogden, Layton, or Logan. Spending $100-$150 to understand your HVAC system's condition is one of the smartest investments you can make as a new homeowner.
          </p>
          <p>
            Catch problems early, budget for future replacements, and avoid a mid-summer AC failure or mid-winter furnace breakdown. Your future self will thank you.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold mb-3">Schedule Your New Homeowner HVAC Inspection</h3>
            <p className="text-white/70 mb-4">
              We'll connect you with trusted, licensed HVAC technicians in Northern Utah who specialize in thorough home inspections. Get peace of mind before your first summer or winter in your new home.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/inspection" 
                className="inline-block bg-[#e85d26] hover:bg-[#d14d1a] px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Schedule Inspection
              </Link>
              <Link 
                href="/blog" 
                className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Read More Guides
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
