'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsSubmitted(true);
  };

  return (
    <section className="bg-deepsage py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif italic text-5xl md:text-6xl text-cream mb-16 text-center">
          Apply for a Puppy
        </h2>

        {isSubmitted ? (
          <div className="bg-cream/10 border border-sage/50 rounded-[2rem] p-12 text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="w-16 h-16 text-sage" />
            <h3 className="font-sans font-bold text-3xl text-cream">Application Received</h3>
            <p className="font-sans text-cream/80 text-lg max-w-md">
              Thank you for applying. Ramona will review your application and follow up within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-cream rounded-[2rem] p-8 md:p-12 shadow-xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="font-sans text-sm font-bold text-charcoal">Full Name</label>
                <input required type="text" id="fullName" className="w-full bg-transparent border-b-2 border-tan/30 focus:border-amber outline-none py-2 font-sans text-charcoal transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-sans text-sm font-bold text-charcoal">Email Address</label>
                <input required type="email" id="email" className="w-full bg-transparent border-b-2 border-tan/30 focus:border-amber outline-none py-2 font-sans text-charcoal transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-sans text-sm font-bold text-charcoal">Phone Number</label>
                <input required type="tel" id="phone" className="w-full bg-transparent border-b-2 border-tan/30 focus:border-amber outline-none py-2 font-sans text-charcoal transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="cityState" className="font-sans text-sm font-bold text-charcoal">City & State</label>
                <input required type="text" id="cityState" className="w-full bg-transparent border-b-2 border-tan/30 focus:border-amber outline-none py-2 font-sans text-charcoal transition-colors" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="font-sans text-sm font-bold text-charcoal block">Household Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Single', 'Family', 'Active Outdoor', 'Working/Field'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="household" value={type} className="accent-amber w-4 h-4" required />
                      <span className="font-sans text-sm text-charcoal/80 group-hover:text-amber transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-sans text-sm font-bold text-charcoal block">Dog Experience Level</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['First-time owner', 'Experienced', 'Breeder'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="experience" value={level} className="accent-amber w-4 h-4" required />
                      <span className="font-sans text-sm text-charcoal/80 group-hover:text-amber transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-sans text-sm font-bold text-charcoal block">Preferred Color</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Yellow', 'Black', 'Chocolate', 'No Preference'].map((color) => (
                    <label key={color} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="color" value={color} className="accent-amber w-4 h-4" required />
                      <span className="font-sans text-sm text-charcoal/80 group-hover:text-amber transition-colors">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-sans text-sm font-bold text-charcoal block">Preferred Timeline</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['ASAP', '3–6 months', '6–12 months'].map((time) => (
                    <label key={time} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="timeline" value={time} className="accent-amber w-4 h-4" required />
                      <span className="font-sans text-sm text-charcoal/80 group-hover:text-amber transition-colors">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-sm font-bold text-charcoal">Message / Additional Notes</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b-2 border-tan/30 focus:border-amber outline-none py-2 font-sans text-charcoal transition-colors resize-none" placeholder="Tell us a bit about your lifestyle and what you're looking for in a dog..." />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
