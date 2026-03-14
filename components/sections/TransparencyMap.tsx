'use client';
import { motion } from 'framer-motion';

export default function TransparencyMap() {
  return (
    <section className="py-24 bg-brand-cream px-6 border-t border-brand-sand/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-brand-leaf font-bold tracking-[0.2em] uppercase text-xs">
            Direct from Source
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ink">
            Trace the Treasure.
          </h2>
          <p className="text-brand-ink/70 leading-relaxed">
            Our beans don't pass through multiple warehouses. They travel directly from 
            the high-altitude estates of <strong>Chikkamagaluru</strong> to our roasting 
            unit, preserving the dark chocolate notes of the Western Ghats.
          </p>
          <div className="pt-4">
             <div className="flex items-center gap-3 text-brand-ink font-semibold">
                <div className="w-2 h-2 rounded-full bg-brand-leaf animate-ping" />
                Current Harvest: Chikkamagaluru Estate Master-Blended
             </div>
          </div>
        </motion.div>

        {/* Minimalist Map Graphic */}
        <div className="relative aspect-video bg-brand-sand/20 rounded-[3rem] border border-brand-sand/40 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 grayscale contrast-125 hover:opacity-20 transition-opacity">
             {/* You would eventually put an SVG or an Image of a Chikkamagaluru map here */}
             <div className="w-full h-full bg-[radial-gradient(#4A7C3A_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="relative z-10 bg-brand-ink text-brand-cream p-6 rounded-2xl shadow-2xl text-center"
          >
            <p className="text-xs uppercase tracking-widest font-bold mb-1">Origin Point</p>
            <p className="font-serif text-2xl">Chikkamagaluru</p>
            <p className="text-[10px] opacity-60">13.3323° N, 75.4716° E</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}