import Navbar from '@/components/layout/Navbar';
import StoryGrid from '@/components/sections/StoryGrid';
import OriginTransition from '@/components/sections/OriginTransition';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream">
        {/* Refined Hero: Mission-First Entry */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          
          {/* Moving the location here creates a premium 'intro' tag */}
          <span className="text-brand-leaf font-bold tracking-[.4em] uppercase text-[10px] mb-8">
            Sourced from Chikkamagaluru
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-ink leading-[1.1] tracking-tight max-w-5xl">
            It's not just Coffee. <br /> It's Tresoro.
          </h1>

          <div className="mt-16">
            <Link 
              href="/shop" 
              className="bg-brand-forest text-brand-cream px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-lg"
            >
              Enter the Treasure
            </Link>
          </div>
        </section>

        {/* The Heritage Story (Chicory Lie) */}
        <StoryGrid />
        
        {/* Visual Proof (Seed to Cup realistic images) */}
        <OriginTransition />

        {/* High-Impact CTA leading to the new Shop Page */}
        <section className="py-32 bg-brand-cream text-center px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ink mb-8">
            Ready for real coffee?
          </h2>
          <p className="text-brand-ink/60 max-w-lg mx-auto mb-12 leading-relaxed">
            No wartime fillers. No cost-cutting substitutes. Just 100% high-altitude 
            Chikkamagaluru 100% Pure Coffee, exactly how it was meant to be.
          </p>
          <Link 
            href="/shop" 
            className="text-brand-ink font-bold border-b-2 border-brand-forest pb-2 hover:text-brand-leaf transition-colors"
          >
            Explore our 250g Blends →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}