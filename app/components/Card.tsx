import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'benefit' | 'service';
  className?: string;
}

export function Card({ children, variant = 'benefit', className = '' }: CardProps) {
  const baseStyles = 'rounded-lg p-6';

  const variantStyles = {
    benefit: 'border border-zinc-200 bg-zinc-50',
    service: 'border border-zinc-200 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
