import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { BrandNav, BrandNavProps } from './BrandNav';

/**
 * Props for the TopNav component
 */
export interface TopNavProps {
  /**
   * Brand navigation configuration
   * Controls the brand name and optional navigation items in the left section
   */
  brand: BrandNavProps;

  /**
   * Optional content to render in the right section of the navigation
   * Typically contains additional navigation items, search, or user controls
   */
  content?: ReactNode;

  /**
   * Optional className to apply to the root nav element
   * Useful for customizing the navigation's appearance or layout
   */
  className?: string;
}

/**
 * Top navigation bar component that combines brand navigation with custom content.
 * Provides a responsive layout that adapts to different screen sizes, with the brand
 * section on the left and optional content on the right.
 */
export function TopNav({ brand, content, className = '' }: TopNavProps) {
  return (
    <nav className={cn('w-full h-[80px] bg-white py-5 px-6', className)}>
      <div className="h-full flex items-baseline justify-between md:grid md:grid-cols-4 md:gap-x-6 md:items-end">
        {/* Brand Nav - takes up 1 column on desktop */}
        <div className="md:col-span-1">
          <BrandNav {...brand} />
        </div>

        {/* Content Area - takes up 3 columns on desktop */}
        {content && <div className="md:col-span-3">{content}</div>}
      </div>
    </nav>
  );
}

TopNav.displayName = 'TopNav';
