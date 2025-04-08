import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItem as NavItemComponent } from './NavItem';
import type { NavItemProps } from './NavItem';

export interface NavItem {
  href: string;
  label: string;
  icon?: NavItemProps['icon'];
}

export interface NavBrand {
  /**
   * Logo/brand image source
   */
  logo: React.ReactNode;

  /**
   * Brand name to display next to logo
   */
  name?: string;
}

export interface NavProps {
  /**
   * Navigation variant (top or side)
   * @default 'top'
   */
  variant?: 'top' | 'side';

  /**
   * Navigation items to display
   */
  items: NavItem[];

  /**
   * Brand/logo section
   */
  brand?: NavBrand;

  /**
   * Right-side action items (for top nav)
   */
  actions?: React.ReactNode;

  /**
   * Size of the side navigation
   * @default 'default'
   */
  size?: 'slim' | 'compact' | 'default' | 'wide';

  /**
   * Spacing between navigation items
   * @default 'default'
   */
  spacing?: 'compact' | 'default' | 'relaxed';

  /**
   * Additional class names
   */
  className?: string;
}

export function Nav({
  variant = 'top',
  items,
  brand,
  actions,
  size = 'default',
  spacing = 'default',
  className,
}: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const styles = {
    wrapper: cn('w-full', variant === 'side' && 'flex flex-col lg:flex-row'),
    header: cn(
      'sticky top-0 z-50 w-full border-b border-stone-200 bg-white',
      variant === 'side' && 'lg:hidden' // Hide header in desktop side nav
    ),
    headerContent: cn('flex h-16 items-center px-4', variant === 'top' && 'container'),
    mobileToggle: cn(
      'inline-flex items-center justify-center rounded-md p-2',
      'text-stone-500 hover:bg-stone-100 hover:text-stone-600',
      'md:hidden' // Hide on desktop
    ),
    nav: {
      top: cn(
        'hidden md:flex md:items-center md:gap-6', // Desktop top nav
        isMobileMenuOpen && 'block md:flex' // Show on mobile when open
      ),
      side: cn(
        'hidden lg:flex lg:flex-col', // Desktop side nav
        'lg:bg-stone-100',
        // Side nav width variants
        size === 'slim' && 'lg:w-48',
        size === 'compact' && 'lg:w-56',
        size === 'default' && 'lg:w-64',
        size === 'wide' && 'lg:w-72',
        // Content spacing variants
        spacing === 'compact' && 'lg:p-3 lg:space-y-1',
        spacing === 'default' && 'lg:p-4 lg:space-y-2',
        spacing === 'relaxed' && 'lg:p-6 lg:space-y-3'
      ),
    },
    mobileMenu: cn(
      'border-b border-stone-200 bg-white md:hidden',
      isMobileMenuOpen ? 'block' : 'hidden'
    ),
    mobileContent: 'container space-y-1 p-4',
    actionItems: 'flex items-center gap-4',
    brand: cn(
      spacing === 'compact' && 'mb-6',
      spacing === 'default' && 'mb-8',
      spacing === 'relaxed' && 'mb-10'
    ),
  };

  // Render navigation items
  const renderItems = (items: NavItem[], isMobile?: boolean) => {
    return items.map(item => (
      <NavItemComponent
        key={item.href}
        href={item.href}
        icon={item.icon}
        variant={variant}
        size={isMobile ? 'base' : 'sm'}
      >
        {item.label}
      </NavItemComponent>
    ));
  };

  // Top Navigation Layout
  if (variant === 'top') {
    return (
      <header className={cn(styles.header, className)}>
        <div className={styles.headerContent}>
          {/* Brand */}
          {brand && (
            <div className="flex-shrink-0">
              {brand.logo}
              {brand.name && <span className="ml-2 font-medium text-stone-900">{brand.name}</span>}
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className={cn('ml-6 flex-1', styles.nav.top)}>{renderItems(items)}</nav>

          {/* Right-side items */}
          <div className={styles.actionItems}>
            {actions}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileToggle}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <div className={styles.mobileContent}>{renderItems(items, true)}</div>
        </div>
      </header>
    );
  }

  // Side Navigation Layout
  return (
    <div className={cn(styles.wrapper, className)}>
      {/* Mobile Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {brand?.logo}
          <div className="ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileToggle}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <div className={styles.mobileContent}>{renderItems(items, true)}</div>
        </div>
      </header>

      {/* Desktop Side Navigation */}
      <nav className={styles.nav.side}>
        <div className="sticky top-0 flex h-screen flex-col p-4">
          {/* Brand */}
          {brand && (
            <div className={styles.brand}>
              {brand.logo}
              {brand.name && <div className="mt-2 font-medium text-stone-900">{brand.name}</div>}
            </div>
          )}

          {/* Navigation Items Container */}
          <div className="flex-1 flex flex-col items-center">
            <div className="space-y-1">{renderItems(items)}</div>
          </div>

          {/* Action Items */}
          {actions && <div className="mt-auto pt-6">{actions}</div>}
        </div>
      </nav>
    </div>
  );
}
