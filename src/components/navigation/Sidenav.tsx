import { ReactNode } from 'react';
import { NavItem, NavItemProps } from './NavItem';
import { BrandNav, BrandNavProps } from './BrandNav';

type NavItemType = {
  label: string;
  href: string;
  isActive?: boolean;
} & Partial<NavItemProps>;

interface BaseSidenavProps {
  /**
   * Optional className to apply to the sidenav container
   */
  className?: string;

  /**
   * Main content to display in the content area
   */
  children?: ReactNode;

  /**
   * Footer content to display in the footer area
   */
  footer?: ReactNode;

  /**
   * Legacy footer navigation items
   * @deprecated Use footer prop instead for more flexibility
   */
  footerItems?: Array<
    {
      label: string;
      secondaryLabel?: string;
      href: string;
      isActive?: boolean;
      icon?: NavItemProps['icon'];
    } & Partial<NavItemProps>
  >;
}

interface StreamlinedVariantProps extends BaseSidenavProps {
  variant: 'streamlined';
  brand: BrandNavProps;
}

interface ExpandedVariantProps extends BaseSidenavProps {
  variant: 'expanded';
  /**
   * Brand configuration for expanded variant
   */
  brand: {
    /**
     * The brand logo component or element
     */
    logo: ReactNode;
    /**
     * The brand name text
     */
    brandName: string;
    /**
     * Navigation items to display in the stack
     */
    navItems: Array<NavItemType>;
  };
}

export type SidenavProps = StreamlinedVariantProps | ExpandedVariantProps;

/**
 * Renders the streamlined variant of the Sidenav
 */
function StreamlinedLayout({ brand, children, footer, footerItems = [] }: StreamlinedVariantProps) {
  return (
    <>
      {/* Brand Header */}
      <div className="px-6 py-6">
        <BrandNav {...brand} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">{children}</div>

      {/* Footer Area */}
      {(footer || footerItems.length > 0) && (
        <div className="sticky bottom-0 bg-white px-6 py-4">
          {footer ||
            // Legacy footer items rendering
            footerItems.map((item, index) => (
              <NavItem
                key={`footer-${index}`}
                className="flex w-full items-center justify-between py-2"
                size="sm"
                weight="light"
                {...item}
              >
                <span>{item.label}</span>
                {item.secondaryLabel && (
                  <span className="text-stone-400">{item.secondaryLabel}</span>
                )}
              </NavItem>
            ))}
        </div>
      )}
    </>
  );
}

/**
 * Renders the expanded variant of the Sidenav
 */
function ExpandedLayout({ brand, children, footer, footerItems = [] }: ExpandedVariantProps) {
  return (
    <>
      {/* Brand Header - Horizontal Lockup */}
      <div className="flex items-center gap-4 px-6 py-6">
        <div className="w-10 h-10">
          {typeof brand.logo === 'string' ? (
            <img
              src={brand.logo}
              alt={`${brand.brandName} logo`}
              className="h-full w-full object-contain"
            />
          ) : (
            brand.logo
          )}
        </div>
        <span className="text-lg font-semibold tracking-wide">{brand.brandName}</span>
      </div>

      {/* Navigation Stack + Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Navigation Stack */}
        <div className="px-6 py-8 space-y-2">
          {brand.navItems.map((item, index) => (
            <NavItem
              key={`nav-${index}`}
              className="block w-full"
              size="base"
              weight="medium"
              {...item}
            >
              {item.label}
            </NavItem>
          ))}
        </div>

        {/* Main Content */}
        <div className="px-6 pb-8">{children}</div>
      </div>

      {/* Footer Area */}
      {(footer || footerItems.length > 0) && (
        <div className="sticky bottom-0 bg-white px-6 py-4">
          {footer ||
            // Legacy footer items rendering
            footerItems.map((item, index) => (
              <NavItem
                key={`footer-${index}`}
                className="flex w-full items-center justify-between py-2"
                size="sm"
                weight="light"
                {...item}
              >
                <span>{item.label}</span>
                {item.secondaryLabel && (
                  <span className="text-stone-400">{item.secondaryLabel}</span>
                )}
              </NavItem>
            ))}
        </div>
      )}
    </>
  );
}

/**
 * Sidenav component for vertical navigation.
 * Features a brand header, flexible main content area, and footer area.
 * Supports multiple layout variants.
 */
export function Sidenav(props: SidenavProps) {
  return (
    <nav className="flex h-screen w-[25vw] min-w-[256px] flex-col bg-white">
      {props.variant === 'streamlined' ? (
        <StreamlinedLayout {...props} />
      ) : (
        <ExpandedLayout {...props} />
      )}
    </nav>
  );
}
