'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[90vh] bg-brand-cream flex items-center justify-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-brand-mocha p-8 md:p-12 rounded-[2.5rem] text-brand-cream text-center shadow-2xl mx-auto"
        >
          <span className="text-brand-sand font-bold tracking-[0.2em] uppercase text-[10px]">
            Inquiry Received
          </span>
          <h1 className="text-3xl md:text-4xl font-serif mt-4 mb-4 leading-tight">
            The Treasure is <br /> being Prepared.
          </h1>
          <p className="text-brand-sand/80 mb-8 text-sm md:text-base leading-relaxed">
            Thank you for reaching out to Tresoro Coffee. We’ll get back to you within 24 hours.
          </p>

          {/* Scaled-down Digital Gift Section */}
          <div className="bg-brand-ink/20 border border-brand-sand/10 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-serif text-lg mb-3 text-brand-sand italic">The Vienna Secret</h3>
            <ul className="text-xs space-y-2 opacity-90 list-disc pl-4">
              <li>Use water at exactly 92°C to avoid bitterness.</li>
              <li>Aim for a 1:15 coffee-to-water ratio.</li>
              <li>Pour gently to preserve the syrupy texture.</li>
            </ul>
          </div>

          <Link href="/" className="inline-block bg-brand-sand text-brand-ink px-8 py-3 rounded-full font-bold hover:bg-brand-cream transition-all text-sm">
            Back to the Hills
          </Link>
        </motion.div>
      </main>
    </>
  );
}