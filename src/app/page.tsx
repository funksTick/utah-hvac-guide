import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

const cities = [
  { name: 'Ogden', slug: 'ogden', zip: '84401' },
  { name: 'Layton', slug: 'layton', zip: '84041' },
  { name: 'Logan', slug: 'logan', zip: '84321' },
  { name: 'Bountiful', slug: 'bountiful', zip: '84010' },
  { name: 'Clearfield', slug: 'clearfield', zip: '84015' },
  { name: 'Syracuse', slug: 'syracuse', zip: '84075' },
];

const stats = [
  { value: '24/7', label: 'Emergency Service' },
  { value: '500+', label: 'Utah Homes Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '$0', label: 'Consultation Fee' },
];
//
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
          <Link href="/#cities" className="hover:text-white transition-colors">Cities</Link>
          <Link href="/#quote" className="bg-[#e85d26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d04e1a] transition-colors">Get a Quote</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#e85d26]/10 border border-[#e85d26]/20 rounded-full px-4 py-1.5 text-[#e85d26] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e85d26] animate-pulse"></span>
            Northern Utah's HVAC Resource
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            Find Trusted<br />
            <span className="text-[#e85d26]">HVAC Service</span><br />
            in Utah
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
            Get matched with licensed HVAC contractors in Davis, Weber, Cache, and Box Elder counties. Free quotes, same-day service available.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#quote" className="bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm">
              Get Free Quote →
            </Link>
            <Link href="/blog" className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-4 rounded-full transition-colors text-sm">
              HVAC Resources
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

      {/* Cities */}
      <section id="cities" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-2">Service Areas</h2>
        <p className="text-white/50 mb-8">We connect homeowners across Northern Utah with local HVAC pros.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/40 hover:bg-[#e85d26]/5 transition-all"
            >
              <div className="text-lg font-bold group-hover:text-[#e85d26] transition-colors">{city.name}</div>
              <div className="text-white/40 text-sm mt-1">{city.zip} · Utah</div>
              <div className="text-[#e85d26] text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">View local HVAC →</div>
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
        <p>© {new Date().getFullYear()} Utah HVAC Guide · Northern Utah's HVAC Resource</p>
        <p className="mt-1">Serving Davis, Weber, Cache & Box Elder Counties</p>
      </footer>
    </main>
  );
}
