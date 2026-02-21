import Navbar from '@/components/layout/Navbar';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-[10px] mb-4 block">
            Pure Balehonnur Robusta
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-ink">
            The Collection
          </h1>
          <p className="text-brand-ink/60 mt-6 max-w-lg leading-relaxed">
            Every pouch contains 100% pure coffee sourced from the mist-covered estates of Chikmagalur. 
            Zero fillers, zero chicory—just the honest treasure of the land.
          </p>
        </div>
        
        <ProductShowcase />
        
        <section className="py-24 mt-20 bg-brand-sand/10 px-6 rounded-[3rem] mx-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif text-brand-ink mb-6">Wholesale & Cafes</h3>
            <p className="text-brand-ink/60 mb-10 max-w-md mx-auto">
              Want to serve the unadulterated taste of Chikmagalur in your establishment?
            </p>
            <Link 
              href="/contact" 
              className="bg-brand-ink text-brand-cream px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-forest transition-colors shadow-lg inline-block"
            >
              Bulk Inquiry
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}