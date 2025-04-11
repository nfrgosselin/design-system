import { cn } from '@/lib/utils';
import { ThreeColumnGrid } from './core/grid';

export interface TopNavContentProps {
  /**
   * Content for the left column
   */
  leftContent?: React.ReactNode;

  /**
   * Content for the middle column
   */
  middleContent?: React.ReactNode;

  /**
   * Content for the right column
   */
  rightContent?: React.ReactNode;

  /**
   * Mobile content to show when the view is collapsed
   */
  mobileContent?: React.ReactNode;

  /**
   * Optional className to apply to the container
   */
  className?: string;
}

/**
 * A generic three-column layout component for top navigation content.
 * Provides a responsive layout that collapses to a mobile view on smaller screens.
 */
export function TopNavContent({
  leftContent,
  middleContent,
  rightContent,
  mobileContent,
  className,
}: TopNavContentProps) {
  return (
    <>
      {/* Mobile Layout */}
      {mobileContent && (
        <div data-testid="mobile-container" className="md:hidden">
          {mobileContent}
        </div>
      )}

      {/* Desktop Layout - Three column grid */}
      <ThreeColumnGrid
        gap="element"
        className={cn('hidden md:grid', className)}
        data-testid="desktop-grid"
      >
        <div data-testid="content-column" className="flex items-end h-full w-full">
          {leftContent}
        </div>
        <div data-testid="content-column" className="flex items-end h-full w-full">
          {middleContent}
        </div>
        <div data-testid="content-column" className="flex items-end h-full w-full">
          {rightContent}
        </div>
      </ThreeColumnGrid>
    </>
  );
}

TopNavContent.displayName = 'TopNavContent';
