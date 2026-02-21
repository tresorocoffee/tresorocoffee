'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import KineticHeading from '../ui/KineticHeading';

export default function HeroProduct() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-brand-cream overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-xs">Vienna Roasted</span>
          <div className="mt-6 mb-8">
            <KineticHeading text="The Dark Treasure." />
          </div>
          <p className="text-xl text-brand-ink/70 leading-relaxed">
            "It's not just Coffee. It's Tresoro." Pure Balehonnur beans, zero chicory.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-mocha/20 blur-[80px] rounded-full" />
          <motion.div 
            style={{ y, rotate }}
            animate={{ y: [0, -15, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-64 h-96 bg-brand-mocha rounded-3xl shadow-2xl flex items-center justify-center p-8 border-t border-white/10"
          >
            <div className="text-center">
              <p className="text-brand-cream font-serif text-3xl">Tresoro</p>
              <p className="text-brand-sand/60 text-[10px] uppercase mt-2">100% Pure</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}