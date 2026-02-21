'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function KineticHeading({ text }: { text: string }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures logic only runs on the client
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined, // Safe hydration check
    offset: ["start end", "end start"]
  });

  const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.h2
      ref={ref}
      style={{ skewX, opacity }}
      className="text-5xl md:text-8xl font-serif text-brand-ink leading-tight"
    >
      {text}
    </motion.h2>
  );
}