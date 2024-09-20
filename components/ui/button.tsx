// components/ui/button.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export function buttonVariants({ variant, size }: { variant?: 'ghost'; size?: 'icon' }) {
  return cn(
    'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    variant === 'ghost' ? 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700' : '',
    size === 'icon' ? 'p-2' : ''
  );
}

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn('rounded-md text-sm font-medium', className)} {...props}>
      {children}
    </button>
  );
}
