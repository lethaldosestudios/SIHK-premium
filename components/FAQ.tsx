'use client';

import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const faqs = [
  {
    q: "How long is the waitlist?",
    a: "Typically 3–6 months depending on color preference and litter availability."
  },
  {
    q: "What does AKC registration include?",
    a: "Full AKC papers, certified pedigree, and enrollment in AKC's Reunite microchip program."
  },
  {
    q: "What health tests do you run on breeding dogs?",
    a: "OFA hip and elbow evaluations, PRA genetic panel, annual eye exams on all breeding pairs."
  },
  {
    q: "What is included when I pick up my puppy?",
    a: "AKC papers, vet health certificate, first set of vaccines, deworming, and a puppy starter pack."
  },
  {
    q: "Do you ship puppies?",
    a: "No. All puppies are picked up in person at our Palmyra, Indiana kennel."
  },
  {
    q: "What is your health guarantee?",
    a: "2-year genetic health guarantee against hereditary conditions covered by the OFA panel."
  },
  {
    q: "Can I visit before committing?",
    a: "Yes. We welcome visits by appointment for waitlisted families once a litter is confirmed."
  },
  {
    q: "What's the difference between your Lab lines?",
    a: "Our dogs come from field and bench champion lines — well-suited for hunting work, therapy, and active family life."
  },
  {
    q: "Can I request a specific puppy from a litter?",
    a: "We do our best to match based on temperament assessment at week 6–7."
  },
  {
    q: "How do I pay the deposit?",
    a: "Deposits are accepted via Venmo, Zelle, or check. Full balance is due at pickup."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream py-32 px-6 md:px-12 lg:px-24 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif italic text-5xl md:text-7xl text-charcoal mb-16 text-center">
          Common Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className="border border-tan/30 rounded-2xl bg-white overflow-hidden transition-colors hover:border-amber/50">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <span className="font-sans font-bold text-lg text-charcoal group-hover:text-amber transition-colors pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-amber transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="p-6 pt-0 font-sans text-charcoal/80 leading-relaxed border-t border-tan/10 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
}
