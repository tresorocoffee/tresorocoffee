'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function HeritagePage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-brand-leaf font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Unearthing</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ink mb-8">A Century of Pure <br/>Chikkamagaluru Soul</h1>
            <p className="text-xl italic text-brand-ink/60">"It's not just Coffee. It's Tresoro."</p>
          </motion.header>

          <section className="prose prose-lg prose-serif text-brand-ink/80 leading-relaxed space-y-8">
            <h2 className="text-3xl font-serif text-brand-ink">The Silent Estates of the Western Ghats</h2>
            <p>
              Deep within the mist-shrouded peaks of the Western Ghats lies Chikkamagaluru, a region where the air is thick with the scent of jasmine blooms and damp earth. For over 100 years, these high-altitude estates have been the silent guardians of India's finest 100% Pure Coffee. But for too long, the true treasure of this land remained hidden, blended away and diluted by industrial giants.
            </p>

            <div className="bg-brand-mocha/10 p-10 rounded-[2.5rem] border border-brand-mocha/20 my-12">
              <h3 className="text-2xl font-serif text-brand-mocha mb-4">The Origin of the Chicory Lie</h3>
              <p className="text-sm md:text-base">
                The history of Indian coffee is marred by a wartime compromise. During the global shortages of the 1940s, chicory—a root filler—was introduced to "stretch" coffee supplies. What began as a necessity became a corporate habit. Today, most commercial brands still use up to 49% chicory to cut costs, effectively masking the bold, chocolatey profile of real Chikkamagaluru beans. Tresoro was born to end this lie.
              </p>
            </div>

            <h2 className="text-3xl font-serif text-brand-ink">Restoring the 0% Standard</h2>
            <p>
              At Tresoro, we believe that honesty is the only ingredient that matters. We source only Master-Blended, high-altitude 100% Pure Coffee that thrives at elevations where others struggle. Our beans are slow-ripened, hand-picked, and Vienna-roasted to pull out the deep, syrupy notes that define Chikmagalur's heritage.
            </p>
            <p>
              By maintaining a strict 0% chicory standard, we aren't just selling coffee; we are restoring a century-old legacy. We are giving the youth of India their first taste of what coffee was always meant to be: unadulterated, unapologetic, and pure.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}