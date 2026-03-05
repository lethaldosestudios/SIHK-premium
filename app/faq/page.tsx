import { Navbar } from '@/components/Navbar';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-amber/30 selection:text-charcoal pt-24">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}
