import { ReactNode } from 'react';
import { BrandNav, BrandNavProps } from './BrandNav';
import { cn } from '../../lib/utils';

export interface TopNavProps {
  brand: BrandNavProps;
  content?: ReactNode;
  className?: string;
}

export function TopNav({ brand, content, className = '' }: TopNavProps) {
  return (
    <nav className={cn('w-full h-[80px] bg-white py-5 px-6', className)}>
      <div className="h-full flex items-baseline justify-between md:grid md:grid-cols-4 md:gap-x-6 md:items-end">
        {/* Brand Nav - removed mobile margin */}
        <div className="md:col-span-1">
          <BrandNav {...brand} />
        </div>

        {/* Content Area - simplified wrapper, removed mobile margin */}
        {content && <div className="md:col-span-3">{content}</div>}
      </div>
    </nav>
  );
}
