/**
 * Available variants for the top navigation bar
 */
export type TopNavVariant = 'work' | 'about' | 'blog';

/**
 * Base props interface for all top navigation content components
 */
export interface TopNavContentProps {
  /**
   * Optional className to apply to the content container
   */
  className?: string;
}

/**
 * Props for the work-specific top navigation content
 */
export interface WorkTopNavContentProps extends TopNavContentProps {
  /**
   * Configuration for sort controls
   */
  sortControls: {
    /** Title for the sort controls section */
    title: string;
    /** Navigation items for sorting options */
    navItems: Array<{
      /** Display label for the sort option */
      label: string;
      /** URL for the sort option */
      href: string;
      /** Whether this sort option is currently active */
      isActive?: boolean;
    }>;
  };

  /**
   * Configuration for filter controls
   */
  filterControls: {
    /** Title for the filter controls section */
    title: string;
    /** Navigation items for filtering options */
    navItems: Array<{
      /** Display label for the filter option */
      label: string;
      /** URL for the filter option */
      href: string;
      /** Whether this filter option is currently active */
      isActive?: boolean;
    }>;
  };
}

/**
 * Props for the about page top navigation content
 * Extends base TopNavContentProps with about-specific properties
 */
export interface AboutTopNavContentProps extends TopNavContentProps {
  // Add about-specific props here as needed
}

/**
 * Props for the blog page top navigation content
 * Extends base TopNavContentProps with blog-specific properties
 */
export interface BlogTopNavContentProps extends TopNavContentProps {
  // Add blog-specific props here as needed
}
