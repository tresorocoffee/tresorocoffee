import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-forest text-brand-cream py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif mb-6 tracking-tight">Tresoro Coffee</h2>
          <p className="text-brand-sand/60 max-w-sm italic text-base leading-relaxed">
            "It's not just Coffee. It's Tresoro."
          </p>
          <p className="text-brand-sand/40 text-xs mt-6 leading-relaxed max-w-xs">
            Restoring the heritage of unadulterated coffee from the heart of Balehonnur, Chikmagalur.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-12">
          {/* Discover Section */}
          <div className="space-y-6">
            <h4 className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold">Discover</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest">
              <li>
                <Link href="/heritage" className="hover:text-brand-sand transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-brand-sand transition-colors">Balehonnur Origin</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-sand transition-colors">The Collection</Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold">Connect</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest">
              <li>
                {/* UPDATED INSTAGRAM LINK */}
                <a 
                  href="https://www.instagram.com/tresorocoffee/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-sand transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-sand transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-sand transition-colors font-bold text-brand-sand">Shop Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="text-[9px] uppercase tracking-[0.3em] opacity-40">
          © 2026 Tresoro Coffee. Sourced with pride from Chikmagalur.
        </div>
      </div>
    </footer>
  );
}