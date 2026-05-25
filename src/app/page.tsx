import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import QuoteCheckerEmbed from '@/components/QuoteCheckerEmbed';

const counties = [
  { name: 'Salt Lake County', slug: 'salt-lake', cities: 'Salt Lake City, Sandy, West Jordan, Murray, Draper', pop: '1.2M+' },
  { name: 'Davis County', slug: 'davis', cities: 'Layton, Bountiful, Clearfield, Syracuse, Kaysville', pop: '380,000+' },
  { name: 'Weber County', slug: 'weber', cities: 'Ogden, Roy, Riverdale, North Ogden, Washington Terrace', pop: '270,000+' },
  { name: 'Utah County', slug: 'utah', cities: 'Provo, Orem, Lehi, American Fork, Spanish Fork', pop: '700,000+' },
  { name: 'Tooele County', slug: 'tooele', cities: 'Tooele, Grantsville, Stansbury Park, Erda', pop: '75,000+' },
  { name: 'Summit County', slug: 'summit', cities: 'Park City, Coalville, Henefer, Kamas', pop: '45,000+' },
  { name: 'Wasatch County', slug: 'wasatch', cities: 'Heber City, Midway, Daniel, Charleston', pop: '35,000+' },
];

const stats = [
  { value: '24/7', label: 'Emergency Service' },
  { value: '500+', label: 'Utah Homes Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '$0', label: 'Consultation Fee' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">

      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
          <Link href="/#check-quote" className="hover:text-white transition-colors">Check a Quote</Link>
          <Link href="/#counties" className="hover:text-white transition-colors">Service Areas</Link>
          <Link href="/#quote" className="bg-[#e85d26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d04e1a] transition-colors">Get a Quote</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-full px-4 py-1.5 text-[#e85d26] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e85d26] animate-pulse"></span>
            Utah's HVAC Resource
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            Find Trusted<br />
            <span className="text-[#e85d26]">HVAC Service</span><br />
            in Utah
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
            Get matched with licensed HVAC contractors across Salt Lake, Davis, Weber, Utah, Tooele, Summit, and Wasatch counties. Free quotes, same-day service available.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#quote" className="bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm">
              Get Free Quote →
            </Link>
            <Link href="#check-quote" className="border border-white/20 hover:border-[#e85d26]/50 text-white/80 hover:text-white font-medium px-8 py-4 rounded-full transition-colors text-sm">
              Check My Quote
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-black text-[#e85d26] mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8 text-center">Services We Match You With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['AC Repair', 'Furnace Repair', 'New Installation', 'Maintenance', 'Heat Pump', 'Duct Cleaning', 'Energy Audit', 'Emergency Service'].map((service) => (
            <div key={service} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-sm text-white/70 hover:border-[#e85d26]/40 hover:text-white transition-all cursor-default">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Quote Checker Embed */}
      <section id="check-quote" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-full px-4 py-1.5 text-[#e85d26] text-sm font-medium mb-4">
            AI-Powered
          </div>
          <h2 className="text-3xl font-black mb-3">Is Your HVAC Quote Fair?</h2>
          <p className="text-white/50">Got a quote from another contractor? Enter it below and our AI will instantly tell you if it's a good deal based on real Northern Utah pricing.</p>
        </div>
        <QuoteCheckerEmbed />
      </section>

      {/* Counties */}
      <section id="counties" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-2">Service Areas</h2>
        <p className="text-white/50 mb-8">We connect homeowners across Utah with local licensed HVAC contractors.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/counties/${county.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/40 hover:bg-[#e85d26]/5 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-lg font-bold group-hover:text-[#e85d26] transition-colors">{county.name}</div>
                <div className="text-xs text-white/30 mt-1">{county.pop}</div>
              </div>
              <div className="text-white/40 text-xs leading-relaxed">{county.cities}</div>
              <div className="text-[#e85d26] text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">View service area →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-black mb-3">Get a Free HVAC Quote</h2>
          <p className="text-white/50">Tell us about your situation and we'll connect you with the right contractor fast.</p>
        </div>
        <QuoteForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · Utah's HVAC Resource</p>
        <p className="mt-1">Serving Salt Lake, Davis, Weber, Utah, Tooele, Summit & Wasatch Counties</p>
        <div className="flex justify-center gap-6 mt-3 text-white/20">
          <Link href="/blog" className="hover:text-white/40 transition-colors">Resources</Link>
          <Link href="/check-quote" className="hover:text-white/40 transition-colors">Check a Quote</Link>
        </div>
      </footer>
    </main>
  );
}