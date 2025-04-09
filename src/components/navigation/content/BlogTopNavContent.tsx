import { BlogTopNavContentProps } from '../types';
import { ThreeColumnGrid } from '../../layout/core/grid';

export function BlogTopNavContent({ className }: BlogTopNavContentProps) {
  return (
    <ThreeColumnGrid gap="element" className={className}>
      <div className="flex items-end h-full w-full">
        {/* Blog-specific second column content */}
      </div>
      <div className="flex items-end h-full w-full">{/* Blog-specific third column content */}</div>
      <div className="flex items-end h-full w-full">
        {/* Blog-specific fourth column content */}
      </div>
    </ThreeColumnGrid>
  );
}
