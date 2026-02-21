'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StoryGrid() {
  return (
    <section className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        
        {/* Card 1: Main Origin Card (Legacy) */}
        <motion.div 
          className="order-1 md:col-span-8 md:row-span-1 bg-brand-sand/30 rounded-[2.5rem] p-12 flex flex-col justify-end border border-brand-sand/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-xs mb-4">
            The Balehonnur Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ink leading-tight max-w-2xl">
            Where the Western Ghats <br /> breathes life into every bean.
          </h2>
          <p className="mt-6 text-brand-ink/70 max-w-xl leading-relaxed">
            Balehonnur isn't just a location; it's the home of India's finest high-altitude Robusta. 
            We source only A-grade beans from these mist-covered estates to ensure your cup is 100% coffee.
          </p>
        </motion.div>

        {/* Card 2: The Chicory Truth Card (Narrative Hook) */}
        <motion.div 
          className="order-2 md:col-span-4 md:row-span-2 bg-brand-mocha rounded-[2.5rem] p-10 flex flex-col justify-between text-brand-cream shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-brand-sand font-bold tracking-widest uppercase text-[10px]">
              The Unfiltered History
            </span>
            <h3 className="text-3xl font-serif mt-6 mb-6">The Chicory Lie.</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-8">
              During wartime, a shortage of coffee led to the use of chicory as a filler. 
              Today, companies still use it to cut costs, masking the real flavor.
            </p>
            
            <Link 
              href="/heritage" 
              className="inline-flex items-center gap-2 text-brand-sand font-bold text-xs uppercase tracking-widest hover:text-brand-cream transition-colors group"
            >
              Read the full story 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="text-5xl opacity-20 font-serif self-end">0%</div>
        </motion.div>

        {/* Card 3: The Tresoro Promise Card (Honesty) */}
        <motion.div 
          className="order-3 md:col-span-4 md:row-span-1 bg-brand-forest rounded-[2.5rem] p-10 flex flex-col justify-center text-brand-cream text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif mb-4">Honesty in a Cup.</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Indians have forgotten what real coffee tastes like. Tresoro is our effort 
            to restore that heritage—unadulterated and unapologetic.
          </p>
        </motion.div>

        {/* Card 4: The Robusta Pride Card (Heritage Grade) */}
        <motion.div 
          className="order-4 md:col-span-4 md:row-span-1 bg-brand-sand/10 rounded-[2.5rem] p-10 flex flex-col justify-center border border-brand-sand/30"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-[10px] mb-2">
            Heritage Grade
          </span>
          <h3 className="text-2xl font-serif text-brand-ink mb-4 text-brand-ink">The King of Robusta.</h3>
          <p className="text-sm text-brand-ink/60 leading-relaxed">
            Balehonnur is world-renowned for its bold, chocolatey Robusta profile. 
            We celebrate its strength without hiding it behind additives.
          </p>
        </motion.div>

      </div>
    </section>
  );
}