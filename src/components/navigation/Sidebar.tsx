import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  /**
   * Main content to display in the content area
   */
  children?: ReactNode;

  /**
   * Footer content to display at the bottom
   */
  footer?: ReactNode;

  /**
   * Optional className to apply to the sidenav container
   */
  className?: string;
}

export function Sidebar({ children, footer, className = '' }: SidebarProps) {
  return (
    <nav
      className={cn(
        'sticky top-[80px] h-[calc(100vh-80px)] bg-white z-40 overscroll-none',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Main Content Area */}
        <div className="flex-1">{children}</div>

        {/* Footer Area */}
        {footer && <div className="mt-auto bg-white">{footer}</div>}
      </div>
    </nav>
  );
}
