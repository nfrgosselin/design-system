import { cn } from '@/lib/utils';
import { WorkControls } from '../WorkControls';
import { ThreeColumnGrid } from '../../layout/core/grid';
import { NewsletterSignup } from '../../forms/NewsletterSignup';

/**
 * Props for the WorkTopNavContent component
 */
export interface WorkTopNavContentProps {
  /**
   * Configuration for the sort controls section
   */
  sortControls: {
    /** Title for the sort controls */
    title: string;
    /** Navigation items for sorting options */
    navItems: { label: string; href: string; isActive?: boolean }[];
    /** Optional callback when a sort option is selected */
    onChange?: (label: string) => void;
  };

  /**
   * Configuration for the filter controls section
   */
  filterControls: {
    /** Title for the filter controls */
    title: string;
    /** Navigation items for filtering options */
    navItems: { label: string; href: string; isActive?: boolean }[];
    /** Optional callback when a filter option is selected */
    onChange?: (label: string) => void;
  };

  /**
   * Optional className to apply to the desktop grid container
   */
  className?: string;
}

/**
 * Content component for the work-related top navigation bar.
 * Provides a responsive layout with sort controls, filter controls, and a newsletter signup.
 * Adapts between mobile (collapsed controls) and desktop (expanded grid) layouts.
 */
export function WorkTopNavContent({
  sortControls,
  filterControls,
  className,
}: WorkTopNavContentProps) {
  const handleNewsletterSubmit = async (email: string) => {
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <>
      {/* Mobile Layout - Collapsed controls */}
      <div className="flex items-baseline justify-between md:hidden">
        <div className="flex items-baseline space-x-6">
          <div className="flex items-baseline space-x-6">
            <WorkControls
              title={sortControls.title}
              navItems={sortControls.navItems}
              collapsed={true}
              onClick={item => sortControls.onChange?.(item.label)}
            />
            <WorkControls
              title={filterControls.title}
              navItems={filterControls.navItems}
              collapsed={true}
              onClick={item => filterControls.onChange?.(item.label)}
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Three column grid */}
      <ThreeColumnGrid gap="element" className={cn('hidden md:grid', className)}>
        <div className="flex items-end h-full w-full">
          <WorkControls
            title={sortControls.title}
            navItems={sortControls.navItems}
            onClick={item => sortControls.onChange?.(item.label)}
          />
        </div>
        <div className="flex items-end h-full w-full">
          <WorkControls
            title={filterControls.title}
            navItems={filterControls.navItems}
            onClick={item => filterControls.onChange?.(item.label)}
          />
        </div>
        <div className="flex items-end justify-end pr-1">
          <NewsletterSignup
            variant="topnav"
            onSubmit={handleNewsletterSubmit}
            placeholder="Enter your email"
          />
        </div>
      </ThreeColumnGrid>
    </>
  );
}

WorkTopNavContent.displayName = 'WorkTopNavContent';
