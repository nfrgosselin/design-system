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
  InlineEmphasis,
  InlineStrong,
  InlineCode,
  UIHeader,
  UILabel,
  UICaption,
  type ArticleTextProps,
  type ArticleHeaderProps,
  type ArticleTitleProps,
  type ArticleSubtitleProps,
  type InlineCodeProps,
  type InlineEmphasisProps,
  type InlineStrongProps,
  type UIHeaderProps,
  type UILabelProps,
  type UICaptionProps,
} from '../typography';

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
  InlineEmphasis,
  InlineStrong,
  InlineCode,
  UIHeader,
  UILabel,
  UICaption,
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
  type ArticleTextProps,
  type ArticleHeaderProps,
  type ArticleTitleProps,
  type ArticleSubtitleProps,
  type InlineCodeProps,
  type InlineEmphasisProps,
  type InlineStrongProps,
  type UIHeaderProps,
  type UILabelProps,
  type UICaptionProps,
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
