import Link from 'next/link';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className: extraClassName = '',
}: CTAButtonProps) {
  const className = `cta-button cta-${variant} cta-${size} ${extraClassName}`.trim();

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
