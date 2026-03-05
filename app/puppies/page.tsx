import { Navbar } from '@/components/Navbar';
import { PuppyListings } from '@/components/PuppyListings';
import { Footer } from '@/components/Footer';

export default function PuppiesPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-amber/30 selection:text-charcoal pt-24">
      <Navbar />
      <PuppyListings />
      <Footer />
    </main>
  );
}
