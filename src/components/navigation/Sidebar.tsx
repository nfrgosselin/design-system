import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface SidebarProps {
  /**
   * Main content to display in the content area
   */
  children?: ReactNode;

  /**
   * Footer content to display at the bottom
   */
  footer?: ReactNode;

  /**
   * Optional className to apply to the sidebar container
   */
  className?: string;
}

export function Sidebar({ children, footer, className = '' }: SidebarProps) {
  return (
    <aside
      className={cn(
        'sticky top-[80px] h-[calc(100vh-80px)] bg-white z-40 overscroll-none',
        'py-6 pr-8',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Main Content Area */}
        <div className="flex-1">{children}</div>

        {/* Footer Area */}
        {footer && <div className="mt-auto pt-6 bg-white">{footer}</div>}
      </div>
    </aside>
  );
}
