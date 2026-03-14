'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function ChikmagalurStory() {
  return (
    <>
      <Navbar />
      
      {/* Main content uses brand-ink (#2E3A24)
          The bg-grain provides the tactile, paper-like texture
      */}
      <main className="bg-brand-ink bg-grain text-brand-cream pt-32 pb-20 px-6 min-h-screen">
        <article className="max-w-4xl mx-auto">
          <motion.header 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <span className="text-brand-sand font-bold tracking-[0.4em] uppercase text-xs mb-4 block">1670 AD</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-sand mb-8">The Seven Seeds <br/>of Rebellion</h1>
          </motion.header>

          <section className="space-y-12 text-lg leading-relaxed opacity-90 font-light">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-brand-sand">
              The story of Tresoro Coffee begins not in a roasting facility, but in the forbidden ports of Mocha, Yemen. In the 17th century, the coffee trade was a strictly guarded monopoly. No fertile seeds were allowed to leave the Arab world. That was until a Sufi saint named Baba Budan decided that such a treasure belonged to the world.
            </p>

            <h2 className="text-3xl font-serif text-brand-sand border-b border-brand-sand/20 pb-4">The Smuggled Treasure</h2>
            <p>
              Legend tells us that Baba Budan, while on a pilgrimage to Mecca, discovered the invigorating dark brew. Risking everything, he hid seven fertile coffee seeds within the folds of his beard and crossed the treacherous seas back to the shores of India. Those seven seeds weren't just plants; they were the seeds of a revolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
              <div className="border-l-2 border-brand-leaf pl-6 italic text-brand-sand/70">
                "Every Tresoro bean can trace its lineage back to the Chandragiri Hills, where those first seven seeds were planted."
              </div>
              <p className="text-sm opacity-70">
                The hills of Chikmagalur provided the perfect sanctuary. The iron-rich soil, the heavy monsoon rains, and the canopy of the Western Ghats allowed the coffee to evolve into a unique variety found nowhere else on earth.
              </p>
            </div>

            <h2 className="text-3xl font-serif text-brand-sand border-b border-brand-sand/20 pb-4">Chikkamagaluru: The Crown Jewel</h2>
            <p>
              Within the vast Chikmagalur region, Chikkamagaluru emerged as the 'Grand Cru' of 100% Pure Coffee. At Tresoro, we honor Baba Budan’s rebellion by keeping the coffee exactly as he found it: pure. While the world moved toward additives and shortcuts, we remained in the hills, guarding the original treasure of the Western Ghats.
            </p>
          </section>
        </article>
      </main>

      {/* UPDATED: Using variant="ink" so the footer matches the page background
          This ensures the #2E3A24 color remains consistent to the bottom of the page
      */}
      <Footer variant="ink" />
    </>
  );
}