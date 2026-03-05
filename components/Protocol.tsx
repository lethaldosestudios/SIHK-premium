'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Protocol() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[];

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
        animation: gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
        }),
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full bg-cream">
      <Card1 />
      <Card2 />
      <Card3 />
    </section>
  );
}

function Card1() {
  return (
    <div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-cream border-b border-tan/20 px-6 md:px-12 lg:px-24 z-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <span className="font-mono text-amber text-xl font-bold">01</span>
          <h2 className="font-serif italic text-5xl md:text-7xl text-charcoal leading-tight">Apply & Get Matched</h2>
          <p className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
            Fill out our screening form. We match you with the right litter based on your household, lifestyle, and color preference.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center relative h-64 md:h-96">
          <svg className="w-full h-full max-w-sm animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#7A9E7E" strokeWidth="2" strokeDasharray="4 8" />
            <circle cx="100" cy="100" r="60" stroke="#7A9E7E" strokeWidth="1" opacity="0.5" />
            <path d="M100 130C116.569 130 130 116.569 130 100C130 83.4315 116.569 70 100 70C83.4315 70 70 83.4315 70 100C70 116.569 83.4315 130 100 130Z" fill="#7A9E7E" opacity="0.2" />
            <circle cx="70" cy="60" r="15" fill="#7A9E7E" opacity="0.8" />
            <circle cx="100" cy="45" r="18" fill="#7A9E7E" opacity="0.8" />
            <circle cx="130" cy="60" r="15" fill="#7A9E7E" opacity="0.8" />
            <circle cx="145" cy="90" r="12" fill="#7A9E7E" opacity="0.8" />
            <circle cx="55" cy="90" r="12" fill="#7A9E7E" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  const laserRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(laserRef.current, {
      y: 250,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-cream border-b border-tan/20 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <span className="font-mono text-amber text-xl font-bold">02</span>
          <h2 className="font-serif italic text-5xl md:text-7xl text-charcoal leading-tight">Reserve Your Spot</h2>
          <p className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
            A $300 deposit holds your place. We&apos;ll notify you when the litter is confirmed and update you weekly on progress.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center relative h-64 md:h-96 w-full max-w-sm mx-auto">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-full h-full rounded-full bg-tan/20" />
            ))}
          </div>
          <div ref={laserRef} className="absolute top-4 left-0 right-0 h-1 bg-amber shadow-[0_0_15px_rgba(201,137,42,0.8)] z-10" />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    
    gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
    
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
    });
  }, []);

  return (
    <div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-cream px-6 md:px-12 lg:px-24 z-30">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <span className="font-mono text-amber text-xl font-bold">03</span>
          <h2 className="font-serif italic text-5xl md:text-7xl text-charcoal leading-tight">Take Your Dog Home</h2>
          <p className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed">
            Puppies go home at 8 weeks with AKC papers, vet health check, first vaccines, and a puppy starter pack.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center relative h-64 md:h-96 w-full">
          <svg className="w-full h-32" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={pathRef}
              d="M0 50H100L120 20L150 80L180 10L210 90L240 40L260 60L280 50H400"
              stroke="#C9892A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
