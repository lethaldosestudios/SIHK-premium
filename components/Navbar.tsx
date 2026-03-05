'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Our Dogs', href: '/#philosophy' },
    { name: 'Puppies', href: '/puppies' },
    { name: 'Waitlist', href: '/waitlist' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-500">
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-6 py-4 rounded-full transition-all duration-500",
          isScrolled
            ? "bg-cream/70 backdrop-blur-xl border border-sage/30 shadow-sm"
            : "bg-transparent border border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className={cn(
            "font-serif italic text-xl font-bold transition-colors duration-300",
            isScrolled ? "text-deepsage" : "text-cream"
          )}>
            SIHK
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-sans text-sm font-medium transition-all duration-300 hover:-translate-y-[1px]",
                isScrolled ? "text-charcoal hover:text-amber" : "text-cream/90 hover:text-white",
                pathname === link.href && (isScrolled ? "text-amber" : "text-white font-bold")
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/waitlist" variant="primary" size="sm">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-charcoal" : "text-cream")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-charcoal" : "text-cream")} />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[88px] p-6 bg-cream border-b border-sage/20 shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
        )}
      >
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-lg font-medium text-charcoal hover:text-amber transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button href="/waitlist" variant="primary" className="w-full mt-4">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
