import { AboutTopNavContentProps } from '../types';
import { ThreeColumnGrid } from '../../layout/core/grid';

export function AboutTopNavContent({ className }: AboutTopNavContentProps) {
  return (
    <ThreeColumnGrid gap="element" className={className}>
      <div className="flex items-end h-full w-full">
        {/* About-specific second column content */}
      </div>
      <div className="flex items-end h-full w-full">
        {/* About-specific third column content */}
      </div>
      <div className="flex items-end h-full w-full">
        {/* About-specific fourth column content */}
      </div>
    </ThreeColumnGrid>
  );
}
