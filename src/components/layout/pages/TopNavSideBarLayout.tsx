import { ReactNode } from 'react';

/**
 * A page layout component that provides a sticky top navigation bar and a responsive sidebar.
 * The sidebar is hidden on mobile devices and visible on medium screens and up.
 */
export interface TopNavSideBarLayoutProps {
  /**
   * Content to render in the top navigation bar
   * This will be rendered in a sticky container at the top of the page
   */
  topNavContent: ReactNode;

  /**
   * Content to render in the sidebar
   * Hidden on mobile, visible on md screens and up
   * Takes up 1/4 of the grid on desktop
   */
  sidebarContent: ReactNode;

  /**
   * Main content of the page
   * Takes up full width on mobile and 3/4 of the grid on desktop
   */
  children: ReactNode;
}

/**
 * A layout component that implements a common page structure with a sticky top navigation
 * and a responsive sidebar that collapses on mobile devices.
 */
export function TopNavSideBarLayout({
  topNavContent,
  sidebarContent,
  children,
}: TopNavSideBarLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopNav container - sticky */}
      <div className="sticky top-0 z-50 bg-white">{topNavContent}</div>

      {/* Main content area */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 px-6">
        {/* Sidebar - hidden on mobile, visible on md screens and up */}
        <div className="hidden md:block md:col-span-1">{sidebarContent}</div>

        {/* Main content - full width on mobile, 3 columns on larger screens */}
        <main className="col-span-1 md:col-span-3 min-w-0">{children}</main>
      </div>
    </div>
  );
}

TopNavSideBarLayout.displayName = 'TopNavSideBarLayout';
