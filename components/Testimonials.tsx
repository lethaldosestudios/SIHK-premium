'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Scout has been the most incredible addition to our home. Ramona's process was thorough and you could tell she genuinely cared about where every puppy landed.",
    author: "Sarah M.",
    location: "Louisville, KY",
  },
  {
    id: 2,
    quote: "We were looking for a hunting dog with a calm home temperament. SIHK delivered exactly that. Duke Jr. is remarkable in the field and a complete gentleman at home.",
    author: "Travis B.",
    location: "Bloomington, IN",
  },
  {
    id: 3,
    quote: "Went through the waitlist process — totally worth it. We knew the parents, the health certs, even the pickup week before the litter arrived. Zero guessing.",
    author: "Jennifer K.",
    location: "Evansville, IN",
  },
];

export function Testimonials() {
  return (
    <section className="bg-tan/10 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-charcoal mb-16 text-center">
          From Our Families
        </h2>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[85vw] md:min-w-0 snap-center bg-cream rounded-[2rem] p-8 md:p-10 shadow-sm border border-tan/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="font-serif italic text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div>
                <p className="font-sans font-bold text-charcoal">{testimonial.author}</p>
                <p className="font-mono text-xs text-charcoal/60 uppercase tracking-wider mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
