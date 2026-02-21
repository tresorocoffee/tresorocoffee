import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-brand-cream/60 border-b border-brand-sand/20">
      <Link href="/" className="text-2xl font-serif font-bold text-brand-ink">
        Tresoro Coffee
      </Link>
      
      <div className="hidden md:flex gap-8 text-[10px] font-bold text-brand-ink/80 uppercase tracking-widest">
        <Link href="/heritage" className="hover:text-brand-leaf transition-colors">
          Our Heritage
        </Link>
        <Link href="/shop" className="hover:text-brand-leaf transition-colors">
          Our Blends
        </Link>
        <Link href="/contact" className="hover:text-brand-leaf transition-colors">
          Contact Us
        </Link>
      </div>

      {/* CHANGED FROM <button> TO <Link> FOR E-COMMERCE FLOW */}
      <Link 
        href="/shop" 
        className="bg-brand-ink text-brand-cream px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-forest hover:scale-105 transition-all shadow-md active:scale-95"
      >
        Shop Now
      </Link>
    </nav>
  );
}