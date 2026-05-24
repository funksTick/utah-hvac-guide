
import Link from 'next/link';

const posts = [
  {
    slug: 'ac-replacement-cost-utah',
    title: 'How Much Does AC Replacement Cost in Utah? (2026 Guide)',
    excerpt: 'Central AC replacement in Utah typically runs $4,000–$12,000 depending on unit size, efficiency rating, and labor. Here\'s what Northern Utah homeowners actually pay.',
    date: 'May 2026',
    readTime: '5 min',
    category: 'Cost Guides',
  },
  {
    slug: 'furnace-repair-vs-replace',
    title: 'Furnace Repair vs. Replace: What Utah Homeowners Need to Know',
    excerpt: 'If your furnace is over 15 years old and repairs cost more than 50% of replacement, it\'s time to replace. Here\'s how to make the right call.',
    date: 'May 2026',
    readTime: '6 min',
    category: 'Guides',
  },
  {
    slug: 'best-hvac-systems-utah-climate',
    title: 'Best HVAC Systems for Utah\'s Climate',
    excerpt: 'Utah\'s extreme temperature swings — from 100°F summers to single-digit winters — demand specific HVAC specs. Here\'s what actually works.',
    date: 'April 2026',
    readTime: '7 min',
    category: 'Buying Guides',
  },
  {
    slug: 'energy-audit-utah',
    title: 'Why Every Northern Utah Homeowner Should Get an Energy Audit',
    excerpt: 'A home energy audit costs $200–$400 and typically identifies $500–$1,500 in annual savings. Here\'s what to expect.',
    date: 'April 2026',
    readTime: '4 min',
    category: 'Energy Savings',
  },
  {
    slug: 'hvac-maintenance-checklist',
    title: 'HVAC Maintenance Checklist for Utah Homeowners',
    excerpt: 'Change filters every 90 days, schedule professional tune-ups twice a year, and know the warning signs before they become emergencies.',
    date: 'March 2026',
    readTime: '5 min',
    category: 'Maintenance',
  },
  {
    slug: 'ogden-hvac-companies',
    title: 'How to Choose an HVAC Company in Ogden, Utah',
    excerpt: 'What to look for when hiring an HVAC contractor in Ogden — licensing, insurance, reviews, and red flags to avoid.',
    date: 'March 2026',
    readTime: '5 min',
    category: 'Local Guides',
  },
];

const categories = ['All', 'Cost Guides', 'Guides', 'Buying Guides', 'Energy Savings', 'Maintenance', 'Local Guides'];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </Link>
        <Link href="/#quote" className="bg-[#e85d26] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d04e1a] transition-colors">
          Get a Quote
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-4xl font-black mb-3">HVAC Resources</h1>
        <p className="text-white/50 text-lg">Guides, cost breakdowns, and tips for Northern Utah homeowners.</p>
      </section>

      {/* Category pills */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default ${
              cat === 'All' ? 'bg-[#e85d26] text-white' : 'bg-white/5 border border-white/10 text-white/50 hover:text-white transition-colors'
            }`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e85d26]/30 hover:bg-[#e85d26]/5 transition-all flex flex-col"
            >
              <div className="text-xs text-[#e85d26] font-medium mb-3">{post.category}</div>
              <h2 className="font-bold text-base leading-snug mb-3 group-hover:text-[#e85d26] transition-colors flex-1">
                {post.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-white/30">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/30 text-sm max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} Utah HVAC Guide · Northern Utah's HVAC Resource</p>
      </footer>
    </main>
  );
}