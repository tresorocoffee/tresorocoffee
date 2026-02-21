import Navbar from '@/components/layout/Navbar';
import StoryGrid from '@/components/sections/StoryGrid';
import HeroProduct from '@/components/sections/HeroProduct';
import BrewingGuide from '@/components/sections/BrewingGuide';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* The Story Section */}
        <StoryGrid />
        
        {/* The Floating Product (Fixed version) */}
        <HeroProduct />
        
        {/* The Ritual (Brewing Guide) */}
        <BrewingGuide />
        
        {/* The Collection */}
        <ProductShowcase />
        
        {/* Contact & Footer */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}