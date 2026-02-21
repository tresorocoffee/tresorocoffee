'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BrewingGuide from '@/components/sections/BrewingGuide';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-cream pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-brand-leaf font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ink mt-6 mb-8">
              A Legacy in <br /> Every Bean.
            </h1>
            <p className="text-xl text-brand-ink/70 leading-relaxed font-light">
              To the people of Balehonnur and Chikmagalur, coffee isn't a commodity—it's a 
              generational wealth of knowledge, soil, and spirit. We call it <strong>Tresoro</strong> because 
              it is the true treasure of our hills.
            </p>
          </motion.section>

          

          {/* The Origin Story */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-mocha p-12 rounded-3xl text-brand-cream">
               <h2 className="text-3xl font-serif mb-6">Born in Balehonnur</h2>
               <p className="opacity-90 leading-relaxed">
                 Our journey started with a simple observation: the local coffee of our region 
                 was being hidden behind fillers and chicory. We wanted to bring back the 
                 bold, honest profile of the Western Ghats—unfiltered and pure.
               </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-brand-ink">"It's not just Coffee. It's Tresoro."</h3>
              <p className="text-brand-ink/70">
                This tagline is our promise. When you drink Tresoro Coffee, you aren't just 
                consuming a beverage; you are participating in a ritual that has defined 
                South Indian culture for centuries. 
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 border-l-2 border-brand-leaf pl-6 py-2">
                  <span className="text-brand-ink font-bold">100% Pure Origin</span>
                  <span className="text-brand-sand">|</span>
                  <span className="text-brand-ink font-bold">No Chicory</span>
                </div>
              </div>
            </div>
          </section>

          <BrewingGuide />

          {/* The Vienna Roast Technique */}
          <motion.section 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="bg-brand-sand/20 p-12 rounded-[3rem] border border-brand-sand/50"
          >
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-serif text-brand-ink">The Vienna Signature</h2>
              <p className="text-brand-ink/70">
                Most instant coffees look "milky" because the soluble solids are too low. 
                Our treasure is built on a custom <strong>Vienna Roast</strong>—a dark, syrupy 
                profile that ensures your cup stays rich, brown, and nutty, even after 
                adding milk.
              </p>
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}