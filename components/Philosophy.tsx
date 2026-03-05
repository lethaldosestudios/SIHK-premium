'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = container.current?.querySelectorAll('.reveal-word');
    if (!words) return;

    gsap.fromTo(
      words,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="philosophy" className="relative w-full py-48 overflow-hidden bg-deepsage">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-24 text-center flex flex-col items-center justify-center">
        <p className="font-sans text-cream/70 text-lg md:text-xl tracking-wide uppercase mb-8">
          <span className="reveal-word inline-block mr-2">Most</span>
          <span className="reveal-word inline-block mr-2">breeders</span>
          <span className="reveal-word inline-block mr-2">focus</span>
          <span className="reveal-word inline-block mr-2">on:</span>
          <span className="reveal-word inline-block mr-2">volume</span>
          <span className="reveal-word inline-block mr-2">and</span>
          <span className="reveal-word inline-block">availability.</span>
        </p>
        
        <h2 className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span className="reveal-word inline-block font-sans font-bold text-cream text-4xl md:text-6xl lg:text-7xl tracking-tight">We</span>
            <span className="reveal-word inline-block font-sans font-bold text-cream text-4xl md:text-6xl lg:text-7xl tracking-tight">focus</span>
            <span className="reveal-word inline-block font-sans font-bold text-cream text-4xl md:text-6xl lg:text-7xl tracking-tight">on:</span>
          </div>
          <span className="reveal-word inline-block font-serif italic text-amber text-7xl md:text-9xl lg:text-[12rem] leading-[0.8] mt-4">
            temperament.
          </span>
        </h2>
      </div>
    </section>
  );
}
