'use client';
import { motion } from 'framer-motion';

const BrewingSteps = [
  { 
    step: "01", 
    title: "The Heat", 
    desc: "Use pure water heated to exactly 92°C. Too hot burns the treasure; too cool hides the soul.", 
    icon: "🌡️" 
  },
  { 
    step: "02", 
    title: "The Ratio", 
    desc: "Aim for a 1:15 coffee-to-water ratio to preserve that signature syrupy Vienna texture.", 
    icon: "⚖️" 
  },
  { 
    step: "03", 
    title: "The Bloom", 
    desc: "Pour a little water and wait 30 seconds. Watch the coffee bloom as it releases the Chikkamagaluru aroma.", 
    icon: "✨" 
  }
];

export default function BrewingGuide() {
  return (
    <section className="py-24 bg-brand-mocha text-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-sand font-bold tracking-[0.3em] uppercase text-xs">The Ritual</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">Mastering the Vienna Roast</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BrewingSteps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-brand-ink/20 border border-brand-sand/10 hover:border-brand-sand/30 transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <span className="text-brand-sand/40 font-serif text-5xl absolute top-6 right-8">
                {item.step}
              </span>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-brand-sand/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}