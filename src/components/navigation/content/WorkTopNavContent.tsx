import { WorkControls } from '../WorkControls';
import { cn } from '../../../lib/utils';
import { ThreeColumnGrid } from '../../layout/core/grid';

export interface WorkTopNavContentProps {
  sortControls: {
    title: string;
    navItems: { label: string; href: string; isActive?: boolean }[];
    onChange?: (label: string) => void;
  };
  filterControls: {
    title: string;
    navItems: { label: string; href: string; isActive?: boolean }[];
    onChange?: (label: string) => void;
  };
  className?: string;
}

export function WorkTopNavContent({
  sortControls,
  filterControls,
  className,
}: WorkTopNavContentProps) {
  return (
    <>
      {/* Mobile Layout - Use items-baseline */}
      <div className="flex items-baseline space-x-6 md:hidden">
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

      {/* Desktop Layout */}
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
        <div className="flex items-end h-full w-full">{/* Reserved for future content */}</div>
      </ThreeColumnGrid>
    </>
  );
}
