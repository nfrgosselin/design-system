import { WorkTopNavContentProps } from '../types';
import { ThreeColumnGrid } from '../../layout/core/grid';
import { WorkControls } from '../WorkControls';
import { cn } from '../../../lib/utils';

export function WorkTopNavContent({
  className,
  sortControls,
  filterControls,
}: WorkTopNavContentProps) {
  return (
    <>
      {/* Mobile Layout - Use items-baseline */}
      <div className="flex items-baseline space-x-6 md:hidden">
        <WorkControls
          title={sortControls.title}
          navItems={sortControls.navItems}
          collapsed={true}
        />
        <WorkControls
          title={filterControls.title}
          navItems={filterControls.navItems}
          collapsed={true}
        />
      </div>

      {/* Desktop Layout */}
      <ThreeColumnGrid gap="element" className={cn('hidden md:grid', className)}>
        <div className="flex items-end h-full w-full">
          <WorkControls title={sortControls.title} navItems={sortControls.navItems} />
        </div>
        <div className="flex items-end h-full w-full">
          <WorkControls title={filterControls.title} navItems={filterControls.navItems} />
        </div>
        <div className="flex items-end h-full w-full">{/* Reserved for future content */}</div>
      </ThreeColumnGrid>
    </>
  );
}
