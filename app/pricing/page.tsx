import { Navbar } from '@/components/Navbar';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-amber/30 selection:text-charcoal pt-24">
      <Navbar />
      <Pricing />
      <Footer />
    </main>
  );
}
