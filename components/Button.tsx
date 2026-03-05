import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden font-sans font-bold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] active:scale-[0.98] rounded-full group";
    
    const variants = {
      primary: "bg-amber text-cream",
      secondary: "bg-sage text-cream",
      outline: "border-2 border-amber text-amber hover:bg-amber hover:text-cream",
      ghost: "text-charcoal hover:text-amber",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const innerContent = (
      <>
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <span className="absolute inset-0 z-0 bg-white/20 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full" />
        )}
        {variant === 'secondary' && (
          <span className="absolute inset-0 z-0 bg-black/10 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 rounded-full" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {innerContent}
      </button>
    );
  }
);
Button.displayName = 'Button';
