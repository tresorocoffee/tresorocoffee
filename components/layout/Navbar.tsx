import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-brand-cream/60 border-b border-brand-sand/20">
      <Link href="/" className="text-2xl font-serif font-bold text-brand-ink">
        Tresoro Coffee
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-brand-ink/80 uppercase tracking-widest">
       <Link href="/heritage" className="text-sm font-medium hover:text-brand-leaf transition-colors">
    Our Heritage
  </Link>
  <Link href="#shop" className="text-sm font-medium hover:text-brand-leaf transition-colors">
    Our Blends
  </Link>
  <Link href="/contact" className="text-sm font-medium hover:text-brand-leaf transition-colors">
    Contact Us
    </Link>

      </div>
      <button className="bg-brand-ink text-brand-cream px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-forest transition-colors">
        Shop Now
      </button>
    </nav>
  );
}