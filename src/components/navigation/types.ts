export type TopNavVariant = 'work' | 'about' | 'blog';

export interface TopNavContentProps {
  className?: string;
}

export interface WorkTopNavContentProps {
  className?: string;
  sortControls: {
    title: string;
    navItems: Array<{
      label: string;
      href: string;
      isActive?: boolean;
    }>;
  };
  filterControls: {
    title: string;
    navItems: Array<{
      label: string;
      href: string;
      isActive?: boolean;
    }>;
  };
}

export interface AboutTopNavContentProps extends TopNavContentProps {
  // Add about-specific props here
}

export interface BlogTopNavContentProps extends TopNavContentProps {
  // Add blog-specific props here
}
