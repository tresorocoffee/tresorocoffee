'use client'; 
import { motion } from 'framer-motion';
import PurityBadge from '../ui/PurityBadge';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Tresoro Signature Blend", //
      weight: "250g",
      price: "₹499",
      description: "100% Pure coffee from the heart of Balehonnur. Zero fillers, zero chicory.", //
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Balehonnur Estate Dark", //
      weight: "250g",
      price: "₹549",
      description: "A bold, unadulterated Robusta that honors the Chikmagalur heritage.", //
      tag: "Limited"
    }
  ];

  return (
    <section id="shop" className="py-24 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-serif text-brand-ink">Our Collection</h2>
          <p className="text-brand-leaf font-medium mt-2 italic">
            "It's not just Coffee. It's Tresoro." — The treasure of Chikmagalur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-brand-sand/30 rounded-3xl p-8 border border-brand-sand/50 transition-all hover:shadow-2xl hover:bg-brand-sand/40"
            >
              {/* The Purity Badge: Positioned absolutely for high visibility */}
              <PurityBadge className="absolute top-4 right-4" />

              <div className="aspect-square bg-brand-sand/50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300 }}
                   className="text-brand-mocha font-serif italic text-lg opacity-50"
                >
                  {product.weight} Pouch Image
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <span className="bg-brand-forest text-brand-cream text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <h3 className="text-2xl font-serif text-brand-ink pt-2">{product.name}</h3>
                <p className="text-brand-ink/60 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-brand-sand/50 mt-4">
                  <span className="text-xl font-bold text-brand-mocha">{product.price}</span>
                  <button className="bg-brand-ink text-brand-cream px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-forest transition-colors shadow-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}