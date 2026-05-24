import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const dynamic = 'force-dynamic';

const cityData: Record<string, {
  name: string;
  zip: string;
  county: string;
  population: string;
  blurb: string;
}> = {
  ogden: {
    name: 'Ogden',
    zip: '84401',
    county: 'Weber County',
    population: '90,000+',
    blurb: "Ogden's high desert climate means scorching summers and frigid winters — your HVAC system works harder here than almost anywhere in Utah.",
  },
  layton: {
    name: 'Layton',
    zip: '84041',
    county: 'Davis County',
    population: '80,000+',
    blurb: "Layton homeowners face extreme temperature swings between seasons. A well-maintained HVAC system is essential for year-round comfort.",
  },
  logan: {
    name: 'Logan',
    zip: '84321',
    county: 'Cache County',
    population: '55,000+',
    blurb: "Logan's Cache Valley location creates temperature inversions that stress HVAC systems. Local expertise matters here.",
  },
  bountiful: {
    name: 'Bountiful',
    zip: '84010',
    county: 'Davis County',
    population: '45,000+',
    blurb: "Bountiful's hillside homes often have older HVAC systems that need attention. We connect you with contractors who know the area.",
  },
  clearfield: {
    name: 'Clearfield',
    zip: '84015',
    county: 'Davis County',
    population: '32,000+',
    blurb: "Clearfield's mix of newer developments and established neighborhoods means a wide range of HVAC needs — new installs to aging system repairs.",
  },
  syracuse: {
    name: 'Syracuse',
    zip: '84075',
    county: 'Davis County',
    population: '30,000+',
    blurb: "One of Utah's fastest-growing cities, Syracuse has many homes approaching the age where HVAC systems need replacement or major service.",
  },
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({ slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cityData[slug];
  console.log('slug:', slug);
  if (!city) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">City not found</h1>
          <Link href="/" className="text-[#e85d26]">← Back home</Link>
        </div>
      </div>
    );
  }

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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="text-[#e85d26] text-sm font-medium mb-3">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/#cities" className="hover:underline">Cities</Link> / {city.name}
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-4">
          HVAC Service in<br /><span className="text-[#e85d26]">{city.name}, Utah</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-6">{city.blurb}</p>
        <div className="flex gap-6 text-sm text-white/40">
          <span>{city.county}</span>
          <span>ZIP: {city.zip}</span>
          <span>Pop: {city.population}</span>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">HVAC Services in {city.name}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'AC Repair & Replacement', desc: `Fast AC repair in ${city.name} — same day service available for emergencies.` },
            { title: 'Furnace Repair & Installation', desc: `Keep your ${city.name} home warm. We service all major furnace brands.` },
            { title: 'Heat Pump Service', desc: `Heat pump installation and repair for ${city.name} homeowners looking for efficiency.` },
            { title: 'HVAC Maintenance', desc: `Regular tune-ups extend system life and cut energy bills in ${city.name} homes.` },
            { title: 'Duct Cleaning', desc: `Improve air quality in your ${city.name} home with professional duct cleaning.` },
            { title: 'Energy Audits', desc: `Find out where your ${city.name} home is losing energy and money.` },
          ].map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#e85d26]/30 transition-colors">
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-white/50 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-black mb-3">Get a Free Quote in {city.name}</h2>
          <p className="text-white/50">A local contractor will contact you within 30 minutes.</p>
        </div>
        <QuoteForm />
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · {city.name}, {city.county}</p>
      </footer>
    </main>
  );
}