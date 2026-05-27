import PartnerForm from '@/components/PartnerForm';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#e85d26] flex items-center justify-center text-white font-black text-sm">H</div>
          <span className="font-bold text-lg tracking-tight">Utah HVAC Guide</span>
        </Link>
      </nav>
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-20">
        <PartnerForm mode="service" />
      </div>
    </main>
  );
}