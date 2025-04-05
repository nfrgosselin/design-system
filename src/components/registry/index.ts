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
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  type LinkProps,
} from '../navigation/link';
import { Icon, type IconProps, type IconSize } from '../utils/icon';
import { NamedIcon, Icons, type IconName, type NamedIconProps } from '../utils/namedIcon';
// Layout components
import {
  Container,
  Stack,
  Grid,
  type ContainerProps,
  type StackProps,
  type GridProps,
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
  // Navigation components
  Link,
  InlineLink,
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
  Stack,
  Grid,
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
  type IconSize,
  type IconName,
  type NamedIconProps,
  type ContainerProps,
  type StackProps,
  type GridProps,
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
