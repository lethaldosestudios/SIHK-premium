'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from './Button';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, delay: 0.2 }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2000&auto=format&fit=crop")' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepsage via-deepsage/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start justify-end h-full">
        <div className="max-w-3xl space-y-6">
          <h1 className="flex flex-col gap-2">
            <span className="hero-item font-sans font-bold text-cream text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase">
              Every litter raised with
            </span>
            <span className="hero-item font-serif italic text-amber text-6xl md:text-8xl lg:text-9xl leading-[0.85] -ml-1">
              intention.
            </span>
          </h1>
          
          <p className="hero-item font-sans text-cream/90 text-lg md:text-xl max-w-xl leading-relaxed">
            AKC-registered Labradors raised in Palmyra, Indiana since 1996. Built for families. Built for the field.
          </p>
          
          <div className="hero-item pt-4">
            <Button href="/waitlist" variant="primary" size="lg">
              Join the Puppy Waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full bg-cream border-t border-sage/20 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {[
            { value: '30+', label: 'Years Breeding' },
            { value: 'AKC', label: 'Registered' },
            { value: 'OFA', label: 'Health Certified' },
            { value: '100+', label: 'Families Placed' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono font-bold text-amber text-2xl md:text-3xl">{stat.value}</span>
              <span className="font-mono text-xs md:text-sm text-charcoal/60 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
