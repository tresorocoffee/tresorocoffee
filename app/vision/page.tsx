'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link'; // ADDED THIS IMPORT TO FIX THE ERROR

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <span className="text-brand-leaf font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Founder's Manifesto</span>
            <h1 className="text-5xl md:text-8xl font-serif text-brand-ink leading-[1.1] mb-10">
              The Idea that <br/>Refused to Fade.
            </h1>
            <div className="w-20 h-px bg-brand-sand mx-auto mb-10" />
            <p className="text-xl md:text-2xl italic text-brand-ink/60 max-w-2xl mx-auto leading-relaxed">
              "We didn't start Tresoro to build a coffee company. We started it to reclaim a stolen heritage."
            </p>
          </motion.header>

          {/* Long-form SEO Content */}
          <section className="prose prose-lg prose-serif text-brand-ink/80 leading-relaxed space-y-12">
            
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ink">The Kitchen Table Realization</h2>
            <p>
              Every great idea begins with a moment of friction. For us, that moment happened over a simple cup of morning coffee. Like most Indians, we grew up believing that the thick, bitter, and slightly woody taste in our cups was the "authentic" flavor of our land.
            </p>
            <p>
              The turning point came when we tasted a pure, unadulterated Robusta straight from a small estate in Balehonnur. The difference wasn't just noticeable—it was jarring. That was the moment of "The Why." Why was the world-class coffee being grown in our backyard not the coffee being served in our homes?
            </p>

            {/* Blockquote for visual break */}
            <div className="bg-brand-forest text-brand-cream p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden">
                <span className="absolute top-4 right-8 text-9xl opacity-10 font-serif">“</span>
                <p className="text-2xl md:text-3xl font-serif relative z-10 leading-snug">
                  The 'Chicory Lie' wasn't just a cost-cutting measure; it was a cultural erasure. We realized a whole generation had forgotten the taste of honesty.
                </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-brand-ink">Unmasking the Chicory Lie</h2>
            <p>
              As we dug deeper, we discovered the history of the "Chicory Lie." Born out of wartime necessity in the 1940s to stretch meager coffee supplies, chicory was never meant to be a permanent guest in the Indian cup. 
            </p>
            <p>
              Our idea was simple: **0% Compromise.** We decided to build a brand that treated coffee as a treasure—Tresoro. This meant going straight to the source—the mist-covered estates of Chikmagalur.
            </p>

            {/* Join the Movement Section */}
            <div className="pt-16 border-t border-brand-sand/30 flex flex-col items-center">
              <h3 className="text-2xl font-serif mb-8 text-brand-ink">Join the Movement</h3>
              <Link 
                href="/shop" 
                className="bg-brand-forest text-brand-cream px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-ink transition-all shadow-xl active:scale-95 inline-block"
              >
                Explore the Blends
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}