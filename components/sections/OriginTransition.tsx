'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  { id: 1, label: "The Bloom", desc: "Balehonnur jasmine-like flowers.", img: "🌸" },
  { id: 2, label: "The Harvest", desc: "Selected A-Grade cherries.", img: "🍒" },
  { id: 3, label: "The Treasure", desc: "100% Pure Roasted Bean.", img: "🫘" }
];

export default function OriginTransition() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={containerRef} className="h-[300vh] bg-brand-ink text-brand-cream overflow-clip">
      <div className="sticky top-0 h-screen flex items-center">
        <motion.div style={{ x }} className="flex gap-[20vw] px-[10vw]">
          {stages.map((stage) => (
            <div key={stage.id} className="w-[80vw] md:w-[60vw] flex flex-col items-center text-center shrink-0">
              <span className="text-9xl mb-12 drop-shadow-[0_0_30px_rgba(209,198,180,0.3)]">{stage.img}</span>
              <h3 className="text-4xl md:text-6xl font-serif text-brand-sand mb-4">{stage.label}</h3>
              <p className="max-w-md opacity-70 text-lg italic leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}