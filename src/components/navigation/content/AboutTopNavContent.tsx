import { AboutTopNavContentProps } from '../types';
import { ThreeColumnGrid } from '../../layout/core/grid';
import { cn } from '@/lib/utils';

/**
 * Content component for the about-specific top navigation bar.
 * Provides a three-column layout for about page navigation content.
 */
export function AboutTopNavContent({ className }: AboutTopNavContentProps) {
  return (
    <ThreeColumnGrid gap="element" className={cn(className)}>
      <div className="flex items-end h-full w-full">
        {/* About-specific first column content */}
      </div>
      <div className="flex items-end h-full w-full">
        {/* About-specific second column content */}
      </div>
      <div className="flex items-end h-full w-full">
        {/* About-specific third column content */}
      </div>
    </ThreeColumnGrid>
  );
}

AboutTopNavContent.displayName = 'AboutTopNavContent';
