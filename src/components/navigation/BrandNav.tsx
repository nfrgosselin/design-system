import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { NavItem, NavItemProps } from './NavItem';

/**
 * A navigation component that combines a brand name with optional navigation items.
 * Typically used in headers and navigation bars to represent the brand/company.
 */
export interface BrandNavProps {
  /**
   * The brand name text to display
   * This is typically the company or product name
   */
  brandName: string;

  /**
   * Optional navigation items to display alongside the brand name
   * Each item can have standard NavItem props plus a label
   */
  navItems?: Array<
    {
      label: string;
      href: string;
      isActive?: boolean;
    } & Partial<NavItemProps>
  >;

  /**
   * Controls the vertical spacing between brand name and nav items
   * @default 'space-y-2'
   */
  stackSpacing?: 'space-y-1' | 'space-y-2' | 'space-y-3' | 'space-y-4';
}

/**
 * BrandNav component that displays a brand name with optional navigation items.
 * The component is designed to be used in headers and navigation bars, providing
 * consistent brand representation with flexible navigation options.
 */
export function BrandNav({ brandName, navItems = [], stackSpacing = 'space-y-2' }: BrandNavProps) {
  return (
    <nav className={cn('flex flex-col', stackSpacing)}>
      {/* Brand Name */}
      <span className="text-base font-semibold leading-none tracking-widest">{brandName}</span>

      {/* Navigation Items */}
      {navItems.length > 0 && (
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Fragment key={`nav-${index}`}>
              <NavItem className="px-0 py-0" size="sm" weight="medium" {...item}>
                {item.label}
              </NavItem>
              {index < navItems.length - 1 && <span className="mx-2 text-stone-500">|</span>}
            </Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}

BrandNav.displayName = 'BrandNav';
