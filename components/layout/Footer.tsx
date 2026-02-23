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
            A movement to restore the unadulterated heritage of Indian coffee.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-12">
          {/* Section 1: The Narrative (Founder & Legend Focus) */}
          <div className="space-y-6">
            <h4 className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold">The Narrative</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest">
              <li>
                {/* This link leads to the Baba Budan / Chikmagalur Story */}
                <Link href="/heritage/chikmagalur" className="hover:text-brand-sand transition-colors">
                  The Seven Seeds
                </Link>
              </li>
              <li>
                {/* This link will focus on the Founders' Idea/Thought */}
                <Link href="/vision" className="hover:text-brand-sand transition-colors">
                  The Founders' Why
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Community */}
          <div className="space-y-6">
            <h4 className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold">Community</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest">
              <li>
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
                <Link href="/contact" className="hover:text-brand-sand transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="text-[9px] uppercase tracking-[0.3em] opacity-40">
          © 2026 Tresoro Coffee. Born from an idea in Chikmagalur.
        </div>
      </div>
    </footer>
  );
}