import { ReactNode } from 'react';

interface TopNavSideBarLayoutProps {
  topNavContent: ReactNode;
  sidebarContent: ReactNode;
  children: ReactNode;
}

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
