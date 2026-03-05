import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-deepsage text-cream rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 lg:px-24 mt-32 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif italic text-4xl md:text-5xl text-cream leading-tight">
            Southern Indiana Holiday Kennels
          </h2>
          <p className="font-sans text-cream/80 text-lg">
            Family-raised Labs since 1996.
          </p>
          <p className="font-mono text-sm text-cream/60 mt-4">
            Est. 1996 · Palmyra, Indiana
          </p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4 md:pl-12">
          <h3 className="font-sans font-bold text-lg text-amber mb-2">Navigation</h3>
          <Link href="/" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">Home</Link>
          <Link href="/#philosophy" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">Our Dogs</Link>
          <Link href="/puppies" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">Puppies</Link>
          <Link href="/waitlist" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">Waitlist</Link>
          <Link href="/faq" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">FAQ</Link>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-bold text-lg text-amber mb-2">Contact</h3>
          <a href="tel:8124067626" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">
            (812) 406-7626
          </a>
          <a href="mailto:ramona@sihk.com" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">
            ramona@sihk.com
          </a>
          <a href="#" className="font-sans text-cream/80 hover:text-amber transition-colors hover:-translate-y-[1px] inline-block w-fit">
            Facebook
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">Terms</Link>
        </div>
        
        <div className="flex items-center gap-3 bg-cream/5 px-4 py-2 rounded-full border border-cream/10">
          <span className="text-amber">🐾</span>
          <span className="font-mono text-xs text-cream/80 tracking-wide uppercase">
            AKC Breeder in Good Standing
          </span>
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
        </div>

        <div className="font-mono text-xs text-cream/40">
          {`// Est. 1996 · Palmyra, IN 47164`}
        </div>
      </div>
    </footer>
  );
}
