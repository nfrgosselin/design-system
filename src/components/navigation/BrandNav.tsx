import { Fragment } from 'react';
import { NavItem, NavItemProps } from './NavItem';

export interface BrandNavProps {
  /**
   * The brand name text
   */
  brandName: string;

  /**
   * Optional navigation items to display
   */
  navItems?: Array<
    {
      label: string;
      href: string;
      isActive?: boolean;
    } & Partial<NavItemProps>
  >;

  /**
   * Space between brand name and nav items
   * @default 'space-y-2'
   */
  stackSpacing?: 'space-y-1' | 'space-y-2' | 'space-y-3' | 'space-y-4';
}

export function BrandNav({ brandName, navItems = [], stackSpacing = 'space-y-2' }: BrandNavProps) {
  return (
    <nav className={`flex flex-col ${stackSpacing}`}>
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
