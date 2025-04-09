import { ReactNode } from 'react';
import { BrandNav, BrandNavProps } from './BrandNav';

interface TopNavProps {
  brand: BrandNavProps;
  secondContent?: ReactNode;
  thirdContent?: ReactNode;
  fourthContent?: ReactNode;
  className?: string;
}

export function TopNav({
  brand,
  secondContent,
  thirdContent,
  fourthContent,
  className = '',
}: TopNavProps) {
  return (
    <nav
      className={`sticky top-0 grid grid-cols-4 w-full h-[80px] bg-white z-50 overscroll-none pb-4 ${className}`}
    >
      <div className="flex items-end h-full px-6">
        <BrandNav {...brand} />
      </div>
      <div className="flex items-end h-full px-6">{secondContent}</div>
      <div className="flex items-end h-full px-6">{thirdContent}</div>
      <div className="flex items-end h-full px-6">{fourthContent}</div>
    </nav>
  );
}
