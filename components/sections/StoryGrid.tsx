'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function StoryGrid() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check window size to disable parallax on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yFast = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Only apply parallax if NOT on mobile to prevent collisions
  const yFastValue = isMobile ? 0 : yFast;
  const ySlowValue = isMobile ? 0 : ySlow;

  return (
    <section ref={containerRef} className="py-24 bg-brand-cream px-6 overflow-hidden">
      {/* 1. Changed gap-8 to gap-12 on mobile for better separation
          2. Changed auto-rows-[300px] to md:auto-rows-[300px] so mobile height is flexible
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 md:auto-rows-[300px]">
        
        {/* Card 1: The Chikkamagaluru Legacy */}
        <motion.div 
          style={{ y: yFastValue }}
          whileHover={{ scale: 1.01, translateY: -5 }}
          className="order-1 md:col-span-8 md:row-span-1 bg-brand-sand/30 rounded-[2.5rem] p-10 flex flex-col justify-start border border-brand-sand/50 shadow-sm transition-shadow hover:shadow-xl overflow-hidden"
        >
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-xs mb-4">
            The Chikkamagaluru Legacy
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-ink leading-tight max-w-2xl">
            Where the Western Ghats <br /> breathes life into every bean.
          </h2>
          <p className="mt-4 text-brand-ink/70 max-w-xl text-sm md:text-base leading-relaxed">
            Chikkamagaluru isn't just a location; it's the home of India's finest high-altitude 100% Pure Coffee. 
            We source only Master-Blended beans from these mist-covered estates for 100% coffee purity.
          </p>
        </motion.div>

        {/* Card 2: The Chicory Truth Card */}
        <motion.div 
          style={{ y: ySlowValue }}
          whileHover={{ scale: 1.02 }}
          className="order-2 md:col-span-4 md:row-span-2 bg-brand-mocha rounded-[2.5rem] p-10 flex flex-col justify-between text-brand-cream shadow-lg min-h-[400px] md:min-h-0"
        >
          <div>
            <span className="text-brand-sand font-bold tracking-widest uppercase text-[10px]">The Unfiltered History</span>
            <h3 className="text-3xl font-serif mt-6 mb-6 leading-tight">The Chicory Lie.</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-8">
              Wartime fillers became corporate habits. We are here to bring back the true experience.
            </p>
            
            <Link 
              href="/heritage" 
              className="inline-flex items-center gap-2 text-brand-sand font-bold text-xs uppercase tracking-widest hover:text-brand-cream transition-colors group"
            >
              Read the full story 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="text-5xl opacity-20 font-serif self-end italic select-none">0%</div>
        </motion.div>

        {/* Card 3: Honesty in a Cup */}
        <motion.div 
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="order-3 md:col-span-4 md:row-span-1 bg-brand-forest rounded-[2.5rem] p-10 flex flex-col justify-center text-brand-cream text-center shadow-md min-h-[300px] md:min-h-0"
        >
          <h3 className="text-2xl font-serif mb-4">Honesty in a Cup.</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Indians have forgotten what real coffee tastes like. Tresoro is our effort 
            to restore that heritage—unadulterated and unapologetic.
          </p>
        </motion.div>

        {/* Card 4: King of 100% Pure Coffee */}
        <motion.div 
          style={{ y: yFastValue }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="order-4 md:col-span-4 md:row-span-1 bg-brand-sand/10 rounded-[2.5rem] p-10 flex flex-col justify-center border border-brand-sand/30 shadow-sm min-h-[300px] md:min-h-0"
        >
          <span className="text-brand-leaf font-bold tracking-widest uppercase text-[10px] mb-2">
            Heritage Grade
          </span>
          <h3 className="text-2xl font-serif text-brand-ink mb-4">The King of 100% Pure Coffee.</h3>
          <p className="text-sm text-brand-ink/60 leading-relaxed">
            Chikkamagaluru is world-renowned for its bold, chocolatey 100% Pure Coffee profile. 
            We celebrate its strength without hiding it behind additives.
          </p>
        </motion.div>

      </div>
    </section>
  );
}