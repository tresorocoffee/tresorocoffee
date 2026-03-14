'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; //

export default function Contact() {
  const router = useRouter(); // Initialize the navigation engine

  // This function handles the "Send Inquiry" button click
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // This stops the page from refreshing
    
    // This moves the user to your success page
    router.push('/contact/success'); 
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-serif text-brand-ink mb-4 text-brand-ink">Let's Talk Coffee.</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              Whether you're looking to stock Tresoro Coffee in your cafe or just want to 
              chat about our Chikkamagaluru heritage, we're here.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-brand-leaf text-xs font-bold uppercase tracking-widest">Inquiries</span>
              <span className="text-xl font-serif text-brand-ink">hello@tresorocoffee.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-leaf text-xs font-bold uppercase tracking-widest">Origin</span>
              <span className="text-xl font-serif text-brand-ink">Chikkamagaluru, Chikmagalur</span>
            </div>
          </div>
          
          <div className="p-8 bg-brand-mocha rounded-3xl text-brand-cream">
            <h4 className="font-serif text-xl mb-2 italic text-brand-sand">"It's not just Coffee. It's Tresoro."</h4>
            <p className="text-sm opacity-80">Experience the treasure of the hills in every partnership.</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} // Triggers our navigation logic
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-sand/20 p-10 rounded-[2rem] border border-brand-sand/50 space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-ink uppercase tracking-wider">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-brand-cream border border-brand-sand p-4 rounded-xl focus:outline-none focus:border-brand-leaf transition-colors" 
                placeholder="Your name" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-ink uppercase tracking-wider">Inquiry Type</label>
              <select className="w-full bg-brand-cream border border-brand-sand p-4 rounded-xl focus:outline-none focus:border-brand-leaf transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Bulk / Wholesale (Cafes)</option>
                <option>Press & Media</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-ink uppercase tracking-wider">Message</label>
              <textarea 
                required
                rows={4} 
                className="w-full bg-brand-cream border border-brand-sand p-4 rounded-xl focus:outline-none focus:border-brand-leaf transition-colors" 
                placeholder="How can we help?"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-forest text-brand-cream py-5 rounded-xl font-bold hover:bg-brand-emerald transition-all shadow-lg hover:shadow-brand-forest/20"
          >
            Send Inquiry
          </button>
        </motion.form>

      </div>
    </section>
  );
}