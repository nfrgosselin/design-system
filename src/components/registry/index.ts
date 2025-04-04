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
import {
  Link,
  InlineLink,
  NavLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  type LinkProps,
} from '../navigation/link';
import { Icon, type IconProps, type IconColor, type IconSize } from '../utils/icon';
import { NamedIcon, Icons, type IconName, type NamedIconProps } from '../utils/namedIcon';
// Layout components
import {
  Container,
  Content,
  Grid,
  Section,
  type ContainerProps,
  type ContentProps,
  type GridProps,
  type SectionProps,
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
// Data display components
import {
  ArticleCard,
  ProjectCard,
  FeatureCard,
  articleCardVariants,
  projectCardVariants,
  featureCardVariants,
  type ArticleCardProps,
  type ProjectCardProps,
  type FeatureCardProps,
} from '../data-display/card';
import { BlogPostPreview, type BlogPostPreviewProps } from '../data-display/blog-post-preview';
import { BlogPostList, type BlogPostListProps } from '../data-display/blog-post-list';
import { LoadMorePosts, type LoadMorePostsProps } from '../data-display/load-more-posts';

// Export components directly
export {
  Button,
  buttonVariants,
  // Navigation components
  Link,
  InlineLink,
  NavLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  // Utility components
  Icon,
  NamedIcon,
  Icons,
  // Layout components
  Container,
  Content,
  Grid,
  Section,
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
  type LinkProps,
  type IconProps,
  type IconColor,
  type IconSize,
  type IconName,
  type NamedIconProps,
  type ContainerProps,
  type ContentProps,
  type GridProps,
  type SectionProps,
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
  // Data display components
  ArticleCard,
  ProjectCard,
  FeatureCard,
  BlogPostPreview,
  BlogPostList,
  LoadMorePosts,
  articleCardVariants,
  projectCardVariants,
  featureCardVariants,
  // Data display component types
  type ArticleCardProps,
  type ProjectCardProps,
  type FeatureCardProps,
  type BlogPostPreviewProps,
  type BlogPostListProps,
  type LoadMorePostsProps,
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
