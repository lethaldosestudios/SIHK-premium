'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

const puppies = [
  {
    id: 1,
    name: 'Scout',
    color: 'Yellow',
    dob: 'Feb 14, 2026',
    status: 'Available',
    pairing: 'Sire: Duke × Dam: Bella',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Duke Jr.',
    color: 'Black',
    dob: 'Feb 14, 2026',
    status: 'Reserved',
    pairing: 'Sire: Duke × Dam: Bella',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Hazel',
    color: 'Chocolate',
    dob: 'Feb 14, 2026',
    status: 'Available',
    pairing: 'Sire: Duke × Dam: Bella',
    image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Birch',
    color: 'Yellow',
    dob: 'Feb 14, 2026',
    status: 'Placed',
    pairing: 'Sire: Duke × Dam: Bella',
    image: 'https://images.unsplash.com/photo-1605897472359-85e4b94d685d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Remi',
    color: 'Black',
    dob: 'Mar 28, 2026 (est.)',
    status: 'Available',
    pairing: 'Sire: Hunter × Dam: Daisy',
    image: 'https://images.unsplash.com/photo-1537151608804-ea2f14cb3981?q=80&w=800&auto=format&fit=crop',
  },
];

export function PuppyListings() {
  return (
    <section className="bg-cream py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-5xl md:text-6xl text-charcoal mb-16 text-center">
          Current & Upcoming Litters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <div
              key={puppy.id}
              className={`relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-tan/20 transition-transform duration-300 ${
                puppy.status === 'Placed' ? 'pointer-events-none' : 'hover:shadow-md active:scale-[0.98] cursor-pointer'
              }`}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={puppy.image}
                  alt={puppy.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                {puppy.status === 'Placed' && (
                  <div className="absolute inset-0 bg-amber/70 flex items-center justify-center z-10">
                    <span className="font-mono font-bold text-cream text-xl tracking-widest uppercase">
                      Placed ✓
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                    {puppy.color}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider ${
                    puppy.status === 'Available' ? 'bg-sage text-cream' :
                    puppy.status === 'Reserved' ? 'bg-amber text-cream' :
                    'bg-tan text-cream'
                  }`}>
                    {puppy.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-sans font-bold text-2xl text-charcoal mb-1">{puppy.name}</h3>
                <p className="font-mono text-xs text-charcoal/60 mb-4">{puppy.pairing}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-mono text-sm text-charcoal/80">DOB: {puppy.dob}</span>
                  {puppy.status === 'Available' && (
                    <Button variant="primary" size="sm" href="/waitlist">
                      Inquire
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
