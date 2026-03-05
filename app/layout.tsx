import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Southern Indiana Holiday Kennels',
  description: 'AKC-registered Labrador Retriever breeding operation raising family and field dogs in Southern Indiana since 1996.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans bg-[#F5F0E8] text-[#2A2A2A] antialiased selection:bg-[#C9892A]/30 selection:text-[#2A2A2A] overflow-x-hidden" suppressHydrationWarning>
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        {children}
      </body>
    </html>
  );
}
