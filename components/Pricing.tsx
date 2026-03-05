'use client';

import React from 'react';
import { Button } from './Button';

export function Pricing() {
  return (
    <section className="bg-cream py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-5xl md:text-6xl text-charcoal mb-16 text-center">
          Investment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          {/* Yellow Lab */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-tan/20 flex flex-col items-center text-center">
            <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Yellow Lab</h3>
            <p className="font-mono text-4xl font-bold text-amber mb-6">$1,200</p>
            <ul className="font-sans text-charcoal/70 space-y-3 mb-8 text-sm">
              <li>Full AKC registration</li>
              <li>Health certificate</li>
              <li>First shots & deworming</li>
            </ul>
            <Button variant="outline" size="sm" href="/waitlist" className="w-full">
              Select Yellow
            </Button>
          </div>

          {/* Black Lab (Middle Pop) */}
          <div className="bg-sage rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-sage/50 flex flex-col items-center text-center transform md:-translate-y-4 relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-cream px-4 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-widest shadow-md">
              Most Requested
            </div>
            <h3 className="font-sans font-bold text-3xl text-cream mb-2">Black Lab</h3>
            <p className="font-mono text-5xl font-bold text-cream mb-6">$1,400</p>
            <ul className="font-sans text-cream/90 space-y-3 mb-8 text-base">
              <li>Full AKC registration</li>
              <li>Health certificate</li>
              <li>First shots & deworming</li>
            </ul>
            <Button variant="primary" size="md" href="/waitlist" className="w-full">
              Select Black
            </Button>
          </div>

          {/* Chocolate Lab */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-tan/20 flex flex-col items-center text-center">
            <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">Chocolate Lab</h3>
            <p className="font-mono text-4xl font-bold text-amber mb-6">$1,800</p>
            <ul className="font-sans text-charcoal/70 space-y-3 mb-8 text-sm">
              <li>Full AKC registration</li>
              <li>Health certificate</li>
              <li>First shots & deworming</li>
            </ul>
            <Button variant="outline" size="sm" href="/waitlist" className="w-full">
              Select Chocolate
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="bg-cream border-2 border-amber rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="font-sans text-charcoal text-lg leading-relaxed">
              A <strong className="font-bold text-amber">Waitlist Deposit of $300</strong> holds your spot on the waitlist. 
              Deposit is applied to your puppy&apos;s total price. Remaining balance due at pickup.
            </p>
          </div>
          <p className="font-mono text-sm text-charcoal/50">
            {`// 2-year genetic health guarantee on all puppies`}
          </p>
        </div>
      </div>
    </section>
  );
}
