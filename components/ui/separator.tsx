import * as React from 'react';
import { cn } from '@/lib/utils';

export function Separator({ orientation = 'horizontal', className }: { orientation?: 'horizontal' | 'vertical'; className?: string }) {
  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-600',
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
        className
      )}
    />
  );
}