'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Features() {
  return (
    <section className="bg-cream py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <HealthCertShuffler />
        <BloodlineTypewriter />
        <PickupScheduler />
      </div>
    </section>
  );
}

function HealthCertShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'OFA Hip: Excellent', color: 'bg-sage text-cream' },
    { id: 2, label: 'PRA: Clear', color: 'bg-amber text-cream' },
    { id: 3, label: 'Elbow: Normal', color: 'bg-deepsage text-cream' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        if (last) newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cream border border-tan/30 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex-1 relative h-48 mb-8 flex items-center justify-center perspective-1000">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute w-48 h-24 rounded-2xl flex items-center justify-center font-mono text-sm font-bold shadow-lg transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color}`}
            style={{
              transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
              zIndex: 3 - index,
              opacity: 1 - index * 0.2,
            }}
          >
            {card.label}
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Health-First Breeding</h3>
        <p className="font-sans text-charcoal/70">Every sire and dam cleared before pairing.</p>
      </div>
    </div>
  );
}

function BloodlineTypewriter() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const messages = [
      '> OFA Hip Certification: EXCELLENT',
      '> PRA Gene Test: CLEAR',
      '> Elbow Dysplasia Screen: NORMAL',
      '> Pedigree Depth: 4 generations verified',
    ];
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayedText.length < messages[currentMsgIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(messages[currentMsgIndex].slice(0, displayedText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 20);
      } else {
        timeout = setTimeout(() => {
          setCurrentMsgIndex((prev) => (prev + 1) % messages.length);
          setIsTyping(true);
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentMsgIndex]);

  return (
    <div className="bg-cream border border-tan/30 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex-1 bg-deepsage rounded-2xl p-6 mb-8 relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          <span className="font-mono text-xs text-sage uppercase tracking-wider">Live Feed</span>
        </div>
        <div className="font-mono text-sm text-cream/90 h-20 flex items-end">
          <span>{displayedText}<span className="text-amber animate-pulse">_</span></span>
        </div>
      </div>
      <div>
        <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Verified Genetics</h3>
        <p className="font-sans text-charcoal/70">Full health panel run on every breeding pair.</p>
      </div>
    </div>
  );
}

function PickupScheduler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<SVGSVGElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cursorRef.current || !gridRef.current) return;

    const cells = gridRef.current.querySelectorAll('.grid-cell');
    const targetCell = cells[14]; // Week 3, Day 1
    const btn = containerRef.current?.querySelector('.reserve-btn');
    if (!btn) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Initial state
    tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0, scale: 1 })
      .set(targetCell, { backgroundColor: 'transparent', color: '#B89B72' })
      .set(btn, { scale: 1, backgroundColor: 'transparent' });

    // Enter cursor
    tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
      // Move to cell
      .to(cursorRef.current, {
        x: 120,
        y: 80,
        duration: 1,
        ease: 'power2.inOut',
      })
      // Click cell
      .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
      .to(targetCell, { backgroundColor: '#C9892A', color: '#F5F0E8', duration: 0.1 }, '<')
      .to(cursorRef.current, { scale: 1, duration: 0.1 })
      // Move to button
      .to(cursorRef.current, {
        x: 180,
        y: 160,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.5,
      })
      // Click button
      .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
      .to(btn, { scale: 0.95, backgroundColor: '#7A9E7E', color: '#F5F0E8', duration: 0.1 }, '<')
      .to(cursorRef.current, { scale: 1, duration: 0.1 })
      .to(btn, { scale: 1, duration: 0.1 })
      // Exit cursor
      .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-cream border border-tan/30 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden">
      <div className="flex-1 mb-8 relative">
        <div ref={gridRef} className="grid grid-cols-7 gap-1 bg-white/50 p-4 rounded-2xl border border-tan/20">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className="text-center font-mono text-xs text-charcoal/40 mb-2">{d}</div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="grid-cell aspect-square rounded-md flex items-center justify-center font-mono text-xs text-tan transition-colors"
            >
              {i + 1}
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-end">
          <div className="reserve-btn px-4 py-2 border border-sage rounded-full font-sans text-xs font-bold text-sage transition-colors">
            Reserve Spot
          </div>
        </div>

        <svg
          ref={cursorRef}
          className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 3.21V20.8C5.5 21.45 6.27 21.79 6.75 21.36L11.44 17.12C11.69 16.89 12.02 16.77 12.36 16.77H18.5C19.18 16.77 19.54 15.96 19.08 15.46L6.78 2.37C6.35 1.91 5.5 2.21 5.5 2.85V3.21Z"
            fill="#2A2A2A"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Waitlist Made Simple</h3>
        <p className="font-sans text-charcoal/70">Know your pickup window before the litter arrives.</p>
      </div>
    </div>
  );
}
