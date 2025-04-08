import { Fragment, ReactNode, useRef, useLayoutEffect } from 'react';
import { NavItem, NavItemProps } from './NavItem';

export interface BrandNavProps {
  /**
   * The brand logo component or element
   * Can be an SVG, img, or any React component
   */
  logo: ReactNode;

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

  /**
   * Fine-tune the logo's vertical position
   * Negative values move up, positive values move down
   * @default undefined
   */
  logoOffset?: '-mt-2' | '-mt-1' | '-mt-0.5' | 'mt-0.5' | 'mt-1' | 'mt-2';

  /**
   * Callback fired when the nav items' bottom position changes
   * Returns the distance in pixels from the top of the page
   */
  onNavBottomChange?: (bottomPosition: number) => void;
}

export function BrandNav({
  logo,
  brandName,
  navItems = [],
  stackSpacing = 'space-y-2',
  logoOffset,
  onNavBottomChange,
}: BrandNavProps) {
  const navStackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (navStackRef.current && onNavBottomChange) {
      const updatePosition = () => {
        const rect = navStackRef.current?.getBoundingClientRect();
        if (rect) {
          // Add window.scrollY to get the absolute position from top of the page
          const bottomPosition = rect.bottom + window.scrollY;
          onNavBottomChange(bottomPosition);
        }
      };

      updatePosition();

      // Update position on resize and scroll
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);

      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [onNavBottomChange]);

  return (
    <nav className="flex items-start gap-3">
      {/* Logo Container - Height matches content */}
      <div className={`relative w-14 shrink-0 ${logoOffset || ''}`}>
        {/* Logo Wrapper - Ensures consistent sizing regardless of logo type */}
        <div className="relative h-full w-full">
          {typeof logo === 'string' ? (
            <img src={logo} alt={`${brandName} logo`} className="h-full w-full object-contain" />
          ) : (
            <div className="h-full w-full">{logo}</div>
          )}
        </div>
      </div>

      {/* Brand Name and Navigation Stack */}
      <div ref={navStackRef} className={`flex flex-col ${stackSpacing}`}>
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
      </div>
    </nav>
  );
}
