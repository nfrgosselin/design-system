// Export component registry types
export * from './registry.types';

// Export component mapping
export { componentRegistry } from './mapping';

// Export component resolver
export {
  resolveComponent,
  getComponentMetadata,
  getComponentsByCategory,
  getComponentCategories,
} from './component-resolver';

// Direct component exports
import { Button, buttonVariants, type ButtonProps } from '../forms/button';
import { Input, type InputProps } from '../forms/Input';
import { NewsletterSignup, type NewsletterSignupProps } from '../forms/NewsletterSignup';
import {
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  type LinkProps,
} from '../navigation/link';
import {
  NavItem,
  BrandNav,
  TopNav,
  Sidebar,
  WorkControls,
  WorkTopNavContent,
  type NavItemProps,
  type BrandNavProps,
  type TopNavProps,
  type SidebarProps,
  type WorkControlsProps,
  type WorkTopNavContentProps,
} from '../navigation';
import { Icon, type IconProps, type IconSize } from '../utils/icon';
import { NamedIcon, Icons, type IconName, type NamedIconProps } from '../utils/namedIcon';
import { Image, type ImageProps } from '../utils/image';
import {
  WorkItem,
  Pill,
  WorkTable,
  type WorkItemProps,
  type PillProps,
  type WorkTableProps,
  type WorkTableItem,
  type SortField,
  type SortDirection,
} from '../ui';
// Layout components
import {
  Container,
  Stack,
  Grid,
  TopNavSideBarLayout,
  type ContainerProps,
  type StackProps,
  type GridProps,
  type TopNavSideBarLayoutProps,
} from '../layout';
// Typography components
import {
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  ArticleList,
  ArticleListItem,
  ArticleQuote,
  Code,
  ColoredText,
  Emphasis,
  Strong,
  FootnoteText,
  FootnoteItem,
  UIHeader,
  UIDescription,
  Caption,
  MetaText,
  NavText,
  UIText,
  type ArticleTitleProps,
  type ArticleSubtitleProps,
  type ArticleHeaderProps,
  type ArticleTextProps,
  type ArticleListProps,
  type ArticleListItemProps,
  type ArticleQuoteProps,
  type CodeProps,
  type ColoredTextProps,
  type EmphasisProps,
  type StrongProps,
  type FootnoteTextProps,
  type FootnoteItemProps,
  type UIHeaderProps,
  type UIDescriptionProps,
  type CaptionProps,
  type MetaTextProps,
  type NavTextProps,
  type UITextProps,
} from '../typography';

// Export components directly
export {
  Button,
  buttonVariants,
  Input,
  NewsletterSignup,
  // Navigation components
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  NavItem,
  BrandNav,
  TopNav,
  Sidebar,
  WorkControls,
  WorkTopNavContent,
  // UI components
  WorkItem,
  Pill,
  WorkTable,
  // Utility components
  Icon,
  NamedIcon,
  Icons,
  Image,
  // Layout components
  Container,
  Stack,
  Grid,
  TopNavSideBarLayout,
  // Typography components
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  ArticleList,
  ArticleListItem,
  ArticleQuote,
  Code,
  ColoredText,
  Emphasis,
  Strong,
  FootnoteText,
  FootnoteItem,
  UIHeader,
  UIDescription,
  Caption,
  MetaText,
  NavText,
  UIText,
  // Types
  type ButtonProps,
  type InputProps,
  type NewsletterSignupProps,
  type LinkProps,
  type NavItemProps,
  type BrandNavProps,
  type TopNavProps,
  type SidebarProps,
  type WorkControlsProps,
  type WorkTopNavContentProps,
  type IconProps,
  type IconSize,
  type IconName,
  type NamedIconProps,
  type ImageProps,
  type ContainerProps,
  type StackProps,
  type GridProps,
  type TopNavSideBarLayoutProps,
  // Typography Types
  type ArticleTitleProps,
  type ArticleSubtitleProps,
  type ArticleHeaderProps,
  type ArticleTextProps,
  type ArticleListProps,
  type ArticleListItemProps,
  type ArticleQuoteProps,
  type CodeProps,
  type ColoredTextProps,
  type EmphasisProps,
  type StrongProps,
  type FootnoteTextProps,
  type FootnoteItemProps,
  type UIHeaderProps,
  type UIDescriptionProps,
  type CaptionProps,
  type MetaTextProps,
  type NavTextProps,
  type UITextProps,
  // UI Types
  type WorkItemProps,
  type PillProps,
  type WorkTableProps,
  type WorkTableItem,
  type SortField,
  type SortDirection,
};

/**
 * Component registry usage:
 *
 * 1. Import from registry:
 *    import { Button } from '@yourusername/design-system';
 *
 * 2. Accessing registry information:
 *    import { componentRegistry } from '@yourusername/design-system';
 *    const buttonInfo = componentRegistry.button;
 *
 * 3. Using the component resolver:
 *    import { resolveComponent } from '@yourusername/design-system';
 *    const Button = await resolveComponent('button');
 */
