import { Navbar } from '@/components/Navbar';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-deepsage selection:bg-amber/30 selection:text-charcoal pt-24">
      <Navbar />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
