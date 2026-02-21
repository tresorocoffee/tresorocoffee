'use client';
import { motion } from 'framer-motion';

export default function PurityBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
      viewport={{ once: true }}
      className={`flex items-center gap-1.5 bg-brand-forest text-brand-cream px-3 py-1.5 rounded-full shadow-md z-10 pointer-events-none ${className}`}
    >
      {/* A simple checkmark icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
      <span className="text-[10px] font-bold uppercase tracking-widest leading-none pt-px">
        0% Chicory. 100% Pure.
      </span>
    </motion.div>
  );
}