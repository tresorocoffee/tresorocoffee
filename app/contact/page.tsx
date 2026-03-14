'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Brand Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-brand-leaf font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              Direct from Chikmagalur
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ink mb-8 leading-tight">
              Let's talk <br/> Pure Coffee.
            </h1>
            <p className="text-brand-ink/60 text-lg mb-12 max-w-md leading-relaxed">
              Whether you're looking to stock Tresoro in your cafe or just want to chat about our Chikkamagaluru heritage, we're here.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf mb-2">Inquiries</h4>
                <p className="text-xl font-serif text-brand-ink">hello@tresorocoffee.com</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf mb-2">Origin</h4>
                <p className="text-xl font-serif text-brand-ink">Chikkamagaluru, Chikmagalur</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High-End Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-sand/10 p-8 md:p-12 rounded-[3rem] border border-brand-sand/30 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">Full Name</label>
                  <input type="text" className="bg-transparent border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-leaf transition-colors" placeholder="Aadi Sharma" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">Inquiry Type</label>
                  <select className="bg-transparent border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-leaf transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Bulk / Wholesale (Cafes)</option>
                    <option>Press & Media</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">Email Address</label>
                <input type="email" className="bg-transparent border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-leaf transition-colors" placeholder="hello@tresoro.com" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">Your Message</label>
                <textarea rows={4} className="bg-transparent border-b border-brand-ink/20 py-3 focus:outline-none focus:border-brand-leaf transition-colors resize-none" placeholder="Tell us about your coffee ritual..." />
              </div>

              <button className="w-full bg-brand-forest text-brand-cream py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-ink transition-all shadow-lg active:scale-95">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}