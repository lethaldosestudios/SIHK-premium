import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Philosophy } from '@/components/Philosophy';
import { Protocol } from '@/components/Protocol';
import { PuppyListings } from '@/components/PuppyListings';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-amber/30 selection:text-charcoal">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <PuppyListings />
      <Testimonials />
      <Pricing />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
