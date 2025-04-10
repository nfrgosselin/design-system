// Core navigation components
export {
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  linkVariants,
  type LinkProps,
} from './link';

export { NavItem, type NavItemProps } from './NavItem';
export { BrandNav, type BrandNavProps } from './BrandNav';
export { TopNav, type TopNavProps } from './TopNav';
export { Sidebar, type SidebarProps } from './Sidebar';
export { WorkControls, type WorkControlsProps } from './WorkControls';

// Content components
export { WorkTopNavContent } from './content/WorkTopNavContent';
export { BlogTopNavContent } from './content/BlogTopNavContent';
export { AboutTopNavContent } from './content/AboutTopNavContent';

// Types
export type {
  TopNavVariant,
  TopNavContentProps,
  WorkTopNavContentProps,
  BlogTopNavContentProps,
  AboutTopNavContentProps,
} from './types';
