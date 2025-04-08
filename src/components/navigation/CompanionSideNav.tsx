import { ReactNode } from 'react';

interface CompanionSideNavProps {
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

export function CompanionSideNav({ children, footer, className = '' }: CompanionSideNavProps) {
  return (
    <nav
      className={`sticky top-[80px] w-[25vw] min-w-[256px] h-[calc(100vh-80px)] bg-white z-40 overscroll-none ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Main Content Area */}
        <div className="flex-1 px-6 py-8">{children}</div>

        {/* Footer Area */}
        {footer && <div className="mt-auto bg-white px-6 py-4">{footer}</div>}
      </div>
    </nav>
  );
}
