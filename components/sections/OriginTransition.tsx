'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  { 
    id: 1, 
    label: "The Bloom", 
    desc: "Chikkamagaluru jasmine-like flowers. The start of our treasure.", 
    src: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=800" 
  },
  { 
    id: 2, 
    label: "The Harvest", 
    desc: "Selected Master-Blended cherries from Chikmagalur estates.", 
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800" 
  },
  { 
    id: 3, 
    label: "The Treasure", 
    desc: "100% Pure roasted beans. Zero fillers, zero chicory.", 
    src: "https://images.unsplash.com/photo-1559056199-d4303d37c093?auto=format&fit=crop&w=800" 
  }
];

export default function OriginTransition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress for the connecting stem
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Moves the content horizontally: [0.1, 0.9] removes the empty space at start/end
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-200%"]);

  return (
    /* ADDED bg-grain HERE to apply the noise texture to the brand-ink background */
    <section ref={containerRef} className="relative h-[300vh] bg-brand-ink bg-grain overflow-visible">
      {/* THE CONNECTING STEM (Life Line) */}
      <div className="sticky top-1/2 w-full h-[2px] bg-brand-sand/10 z-0">
        <motion.div 
          style={{ scaleX, originX: 0 }}
          className="h-full bg-brand-sand shadow-[0_0_15px_rgba(209,198,180,0.5)] w-full"
        />
        {/* Decorative "Buds" on the stem */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-sand shadow-lg" />
        <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-sand shadow-lg" />
        <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-sand shadow-lg" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden flex items-center z-10">
        <motion.div style={{ x }} className="flex w-[300vw]">
          {stages.map((stage) => (
            <div key={stage.id} className="w-screen flex flex-col items-center justify-center px-10">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="relative w-64 h-64 md:w-[350px] md:h-[350px] mb-8 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 z-20 bg-brand-ink"
              >
                <img src={stage.src} alt={stage.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 to-transparent" />
              </motion.div>

              <div className="max-w-xl text-center bg-brand-ink/40 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-brand-sand font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block opacity-70">
                  Stage 0{stage.id}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif text-brand-sand mb-4">{stage.label}</h3>
                <p className="text-brand-sand/60 text-sm md:text-lg italic font-light px-4">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}