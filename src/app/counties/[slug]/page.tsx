import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const dynamic = 'force-dynamic';

const countyData: Record<string, {
  name: string;
  cities: string;
  population: string;
  blurb: string;
  zips: string;
}> = {
  'salt-lake': {
    name: 'Salt Lake County',
    cities: 'Salt Lake City, Sandy, West Jordan, Murray, Draper, Millcreek, Taylorsville, Cottonwood Heights',
    population: '1.2M+',
    zips: '84101–84199',
    blurb: "Salt Lake County's urban density and elevation swings mean HVAC systems work overtime — from valley inversions in winter to intense summer heat.",
  },
  davis: {
    name: 'Davis County',
    cities: 'Layton, Bountiful, Clearfield, Syracuse, Kaysville, Farmington, North Salt Lake',
    population: '380,000+',
    zips: '84010–84075',
    blurb: "One of Utah's fastest-growing counties, Davis County has a wide mix of home ages — from 1960s ramblers in Bountiful to new builds in Syracuse — each with different HVAC needs.",
  },
  weber: {
    name: 'Weber County',
    cities: 'Ogden, Roy, Riverdale, North Ogden, Washington Terrace, Harrisville, Plain City',
    population: '270,000+',
    zips: '84401–84414',
    blurb: "Weber County's high desert climate drives extreme seasonal demand on HVAC systems. Ogden's older housing stock means many homes are overdue for system upgrades.",
  },
  utah: {
    name: 'Utah County',
    cities: 'Provo, Orem, Lehi, American Fork, Spanish Fork, Springville, Pleasant Grove',
    population: '700,000+',
    zips: '84601–84664',
    blurb: "Utah County is Utah's fastest growing area. New construction dominates but many established neighborhoods in Provo and Orem have aging systems approaching replacement age.",
  },
  tooele: {
    name: 'Tooele County',
    cities: 'Tooele, Grantsville, Stansbury Park, Erda, Wendover',
    population: '75,000+',
    zips: '84029–84074',
    blurb: "Tooele County's desert climate and rapid growth in Stansbury Park mean increasing HVAC demand. Fewer local contractors means response times matter.",
  },
  summit: {
    name: 'Summit County',
    cities: 'Park City, Coalville, Henefer, Kamas, Snyderville',
    population: '45,000+',
    zips: '84036–84098',
    blurb: "Summit County's mountain elevation and harsh winters put serious strain on heating systems. Park City homes especially need reliable, high-efficiency equipment.",
  },
  wasatch: {
    name: 'Wasatch County',
    cities: 'Heber City, Midway, Daniel, Charleston, Wallsburg',
    population: '35,000+',
    zips: '84032',
    blurb: "Wasatch County's valley setting creates cold air pooling in winter and hot summers — a combination that demands reliable year-round HVAC performance.",
  },
};

export async function generateStaticParams() {
  return Object.keys(countyData).map((slug) => ({ slug }));
}

export default async function CountyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const county = countyData[slug];

  if (!county) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">County not found</h1>
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
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/#counties" className="hover:underline">Service Areas</Link> / {county.name}
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-4">
          HVAC Service in<br /><span className="text-[#e85d26]">{county.name}</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-6">{county.blurb}</p>
        <div className="flex flex-wrap gap-6 text-sm text-white/40">
          <span>Pop: {county.population}</span>
          <span>ZIP codes: {county.zips}</span>
        </div>
      </section>

      {/* Cities served */}
      <section className="max-w-6xl mx-auto px-6 py-8 border-t border-white/10">
        <h2 className="text-sm text-white/40 uppercase tracking-wider mb-3">Cities We Serve in {county.name}</h2>
        <div className="flex flex-wrap gap-2">
          {county.cities.split(', ').map((city) => (
            <span key={city} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/60">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">HVAC Services in {county.name}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'AC Repair & Replacement', desc: `Fast AC repair across ${county.name} — same day service available for emergencies.` },
            { title: 'Furnace Repair & Installation', desc: `Keep your ${county.name} home warm all winter. We service all major brands.` },
            { title: 'Heat Pump Service', desc: `Heat pump installation and repair for ${county.name} homeowners looking for efficiency.` },
            { title: 'HVAC Maintenance', desc: `Regular tune-ups extend system life and cut energy bills throughout ${county.name}.` },
            { title: 'Duct Cleaning', desc: `Improve air quality in your ${county.name} home with professional duct cleaning.` },
            { title: 'Energy Audits', desc: `Find out where your ${county.name} home is losing energy and money.` },
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
          <h2 className="text-3xl font-black mb-3">Get a Free Quote in {county.name}</h2>
          <p className="text-white/50">A local contractor will contact you within 30 minutes.</p>
        </div>
        <QuoteForm />
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · {county.name}, Utah</p>
      </footer>
    </main>
  );
}