'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HeritagePage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-brand-leaf font-bold tracking-[0.3em] uppercase text-xs">The Unfiltered Truth</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ink mt-6">Reclaiming the <br /> Pure Experience.</h1>
          </motion.div>

          {/* Balehonnur Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-sand/20 p-10 rounded-[3rem] border border-brand-sand/40">
              <h2 className="text-3xl font-serif text-brand-ink mb-6">The Heart of Balehonnur</h2>
              <p className="text-brand-ink/70 leading-relaxed">
                Balehonnur is the birthplace of India's finest high-altitude Robusta. 
                The unique climate of the Western Ghats creates a bean that is naturally bold 
                and chocolatey—a treasure that should never be hidden behind additives.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-brand-mocha italic">"It's not just Coffee. It's Tresoro."</h3>
              <p className="text-sm text-brand-ink/60">
                We source only the highest quality beans to ensure that the heritage of 
                Chikmagalur is respected in every cup.
              </p>
            </div>
          </section>

          {/* The Timeline of the "Lie" */}
          <div className="bg-brand-mocha p-12 rounded-[3rem] text-brand-cream">
            <h2 className="text-4xl font-serif mb-12 text-center">The Century of Substitutes</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-brand-sand font-serif text-3xl">01</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Wartime Necessity</h4>
                  <p className="opacity-80 text-sm">During wartime shortages, chicory was introduced as a filler to make coffee last. It was never meant to be permanent.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-brand-sand font-serif text-3xl">02</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Cost-Cutting Habit</h4>
                  <p className="opacity-80 text-sm">Big companies turned a temporary fix into a permanent standard to reduce costs, leading generations to forget the taste of pure coffee.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-brand-sand font-serif text-3xl">03</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Tresoro Standard</h4>
                  <p className="opacity-80 text-sm">We are here to restore the true experience. 100% Pure Balehonnur coffee. 0% Chicory. Pure honesty.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}