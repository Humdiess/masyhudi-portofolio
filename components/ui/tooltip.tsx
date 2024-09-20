// components/ui/tooltip.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {children}
    </div>
  );
}


export function TooltipProvider({ children }: { children: React.ReactNode }) {
return <>{children}</>;
}

interface TooltipTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
  }
  
export function TooltipTrigger({ children, asChild }: TooltipTriggerProps) {
  if (asChild) {
    return <>{children}</>;
  }
  
  // Otherwise, return the default TooltipTrigger component structure.
  return <div className="tooltip-trigger">{children}</div>;
}

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
      <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-700 shadow-lg rounded-md">
        {children}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-700"></div>
    </div>
  );
}
