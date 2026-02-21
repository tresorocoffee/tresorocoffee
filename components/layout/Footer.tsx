export default function Footer() {
  return (
    <footer className="bg-brand-forest text-brand-cream py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-serif mb-4">Tresoro Coffee</h2>
          <p className="text-brand-sand/60 max-w-sm italic text-sm">
            "It's not just Coffee. It's Tresoro."
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-brand-sand uppercase tracking-widest text-[10px] font-bold">Discover</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-brand-sand cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-brand-sand cursor-pointer transition-colors">Balehonnur Origin</li>
              <li className="hover:text-brand-sand cursor-pointer transition-colors">The Roast Process</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-sand uppercase tracking-widest text-[10px] font-bold">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-brand-sand cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-brand-sand cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-brand-cream/10 text-[9px] uppercase tracking-[0.2em] opacity-50">
        © 2026 Tresoro Coffee. Sourced with pride from Chikmagalur.
      </div>
    </footer>
  );
}