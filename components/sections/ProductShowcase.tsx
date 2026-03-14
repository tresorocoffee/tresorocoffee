'use client'; 
import { useState } from 'react';
import { motion } from 'framer-motion';
import PurityBadge from '../ui/PurityBadge';
import { tresoroCollection } from '@/data/products';

export default function ProductShowcase() {
  // Set the default variant to the first one (250g)
  const [selectedVariant, setSelectedVariant] = useState(tresoroCollection.variants[0]);

  return (
    <section id="shop" className="py-24 bg-brand-cream px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-sand/30 rounded-[3rem] p-8 md:p-12 border border-brand-sand/50 flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Product Visual */}
          <div className="w-full md:w-1/2 aspect-square bg-brand-sand/50 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <PurityBadge className="absolute top-6 right-6" />
            <span className="text-brand-mocha font-serif italic opacity-40">
              {selectedVariant.weight} Pouch Image
            </span>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <span className="bg-brand-forest text-brand-cream text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                {selectedVariant.weight === "250g" ? "Founder's Reserve" : "Premium Blend"}
              </span>
              <h2 className="text-4xl font-serif text-brand-ink mt-4">{tresoroCollection.name}</h2>
              <p className="text-brand-ink/60 text-sm leading-relaxed mt-4">
                {tresoroCollection.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf">Select Quantity</label>
              <select 
                className="w-full bg-white border border-brand-sand p-4 rounded-xl text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-forest"
                onChange={(e) => setSelectedVariant(tresoroCollection.variants[parseInt(e.target.value)])}
              >
                {tresoroCollection.variants.map((v, i) => (
                  <option key={v.weight} value={i}>{v.weight}</option>
                ))}
              </select>
            </div>

            {/* Price and Action */}
            <div className="flex justify-between items-center pt-6 border-t border-brand-sand/50">
              <div className="flex flex-col">
                {selectedVariant.discountPrice ? (
                  <>
                    <span className="text-xs line-through text-brand-ink/30">₹{selectedVariant.price}</span>
                    <span className="text-3xl font-bold text-brand-mocha">₹{selectedVariant.discountPrice}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-brand-mocha">₹{selectedVariant.price}</span>
                )}
              </div>
              
              {/* Dynamic Button Logic */}
              {selectedVariant.weight === "250g" ? (
                <button className="bg-brand-forest text-brand-cream px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-ink transition-all shadow-lg">
                  Order Now
                </button>
              ) : (
                <button className="bg-brand-ink/20 text-brand-ink/40 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest cursor-not-allowed transition-all">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}