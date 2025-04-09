import { Fragment, useState } from 'react';
import { NavItem } from './NavItem';
import { cn } from '../../lib/utils';

export interface WorkControlsProps {
  /**
   * The title text to display at the top
   */
  title: string;

  /**
   * Navigation items to display
   */
  navItems: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;

  /**
   * Whether to use the collapsed variant that only shows active item
   */
  collapsed?: boolean;

  /**
   * Optional className to override styles
   */
  className?: string;
}

export function WorkControls({ title, navItems, collapsed = false, className }: WorkControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const activeItem = navItems.find(item => item.isActive) || navItems[0];

  const handleClick = () => {
    if (collapsed) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <nav
      className={cn('flex flex-col space-y-1 w-full', collapsed && 'cursor-pointer', className)}
      onClick={collapsed ? handleClick : undefined}
    >
      {/* Title */}
      <span
        className={cn(
          'text-sm font-sans leading-none tracking-wide uppercase',
          isExpanded ? 'text-stone-900' : 'text-stone-500'
        )}
      >
        {title}
      </span>

      {/* Navigation Items */}
      <div className="flex items-center">
        {collapsed && !isExpanded ? (
          // Show only active item when collapsed
          <NavItem
            className="px-0 py-0"
            size="sm"
            weight="medium"
            href={activeItem.href}
            isActive={true}
          >
            {activeItem.label}
          </NavItem>
        ) : (
          // Show all items when expanded or not collapsed
          <>
            {navItems.map((item, index) => (
              <Fragment key={`nav-${index}`}>
                <NavItem
                  className="px-0 py-0"
                  size="sm"
                  weight="medium"
                  href={item.href}
                  isActive={item.isActive}
                  onClick={e => {
                    if (collapsed) {
                      e.preventDefault();
                      setIsExpanded(false);
                    }
                  }}
                >
                  {item.label}
                </NavItem>
                {index < navItems.length - 1 && <span className="mx-2 text-stone-500">|</span>}
              </Fragment>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}
