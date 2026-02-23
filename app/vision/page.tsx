'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

            <div className="bg-brand-forest text-brand-cream p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden">
                <span className="absolute top-4 right-8 text-9xl opacity-10 font-serif">“</span>
                <p className="text-2xl md:text-3xl font-serif relative z-10 leading-snug">
                  The 'Chicory Lie' wasn't just a cost-cutting measure; it was a cultural erasure. We realized a whole generation had forgotten the taste of honesty.
                </p>
            </div>

            <p>
              Tresoro is our effort to restore that heritage—unadulterated and unapologetic. We are building this for the youth who care about where their food comes from, who value transparency over flashy marketing, and who deserve to taste the 'King of Robusta' in its purest form.
            </p>

            {/* FOUNDERS' SIGNATURE SECTION */}
            <div className="mt-20 pt-10 flex flex-col items-center border-t border-brand-sand/20">
              <p className="text-brand-ink/50 text-sm italic mb-4">With honesty and conviction,</p>
              <h4 className="text-4xl md:text-5xl font-serif text-brand-ink tracking-tighter italic">The Founders of Tresoro</h4>
              <div className="w-16 h-px bg-brand-leaf mt-6" />
            </div>

            {/* Join the Movement Section */}
            <div className="pt-16 flex flex-col items-center">
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