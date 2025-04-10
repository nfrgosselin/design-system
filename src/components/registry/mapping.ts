import { ComponentRegistry } from './registry.types';

/**
 * Component Registry - maps component names to their implementation paths
 * This central registry allows for:
 * 1. Easy discovery of available components
 * 2. Documentation linking
 * 3. Categorization of components
 */
export const componentRegistry: ComponentRegistry = {
  // Form components
  Button: {
    name: 'Button',
    description: 'Interactive button component with multiple variants, icons, and loading states',
    category: 'forms',
    path: '../forms/button',
  },

  Input: {
    name: 'Input',
    description:
      'Form input component with support for various types (text, password, search), sizes, and states',
    category: 'forms',
    path: '../forms/Input',
  },

  NewsletterSignup: {
    name: 'NewsletterSignup',
    description: 'Newsletter signup form with multiple layout variants and built-in state handling',
    category: 'forms',
    path: '../forms/NewsletterSignup',
  },

  // Layout components
  Container: {
    name: 'Container',
    description: 'A centered container with responsive width constraints',
    category: 'layout',
    path: '../layout/core/container',
  },

  Stack: {
    name: 'Stack',
    description: 'A flexible stack layout component for vertical and horizontal arrangements',
    category: 'layout',
    path: '../layout/core/stack',
  },

  Grid: {
    name: 'Grid',
    description: 'A responsive grid layout system with multiple column configurations',
    category: 'layout',
    path: '../layout/core/grid',
  },

  TopNavSideBarLayout: {
    name: 'TopNavSideBarLayout',
    description:
      'A page layout with sticky top navigation and responsive sidebar that collapses on mobile',
    category: 'layout',
    path: '../layout/pages/TopNavSideBarLayout',
  },

  // Navigation components
  Link: {
    name: 'Link',
    description: 'A component for navigation between pages or to external resources',
    category: 'navigation',
    path: '../navigation/link',
  },

  InlineLink: {
    name: 'InlineLink',
    description: 'A link variant for inline text links with appropriate styling',
    category: 'navigation',
    path: '../navigation/link',
  },

  UtilityLink: {
    name: 'UtilityLink',
    description: 'A link variant for utility navigation with muted styling',
    category: 'navigation',
    path: '../navigation/link',
  },

  ButtonLink: {
    name: 'ButtonLink',
    description: 'A link variant that appears as a button with appropriate styling',
    category: 'navigation',
    path: '../navigation/link',
  },

  MetadataLink: {
    name: 'MetadataLink',
    description: 'A link variant for metadata and small text with appropriate styling',
    category: 'navigation',
    path: '../navigation/link',
  },

  BreadcrumbLink: {
    name: 'BreadcrumbLink',
    description: 'A link variant specifically styled for breadcrumb navigation',
    category: 'navigation',
    path: '../navigation/link',
  },

  NavItem: {
    name: 'NavItem',
    description: 'A flexible navigation item component with icon support and text styling',
    category: 'navigation',
    path: '../navigation/NavItem',
  },

  BrandNav: {
    name: 'BrandNav',
    description: 'A brand navigation component that combines brand name with optional nav items',
    category: 'navigation',
    path: '../navigation/BrandNav',
  },

  TopNav: {
    name: 'TopNav',
    description:
      'A top navigation bar component that combines brand navigation with custom content',
    category: 'navigation',
    path: '../navigation/TopNav',
  },

  Sidebar: {
    name: 'Sidebar',
    description: 'A sticky sidebar component with support for main content and footer areas',
    category: 'navigation',
    path: '../navigation/Sidebar',
  },

  WorkControls: {
    name: 'WorkControls',
    description: 'A specialized navigation component for work-related controls and actions',
    category: 'navigation',
    path: '../navigation/WorkControls',
  },

  WorkTopNavContent: {
    name: 'WorkTopNavContent',
    description: 'Content component for the top navigation bar in work-related pages',
    category: 'navigation',
    path: '../navigation/content/WorkTopNavContent',
  },

  BlogTopNavContent: {
    name: 'BlogTopNavContent',
    description: 'Content component for the blog-specific top navigation bar',
    category: 'navigation',
    path: '../navigation/content/BlogTopNavContent',
  },

  AboutTopNavContent: {
    name: 'AboutTopNavContent',
    description: 'Content component for the about page top navigation bar',
    category: 'navigation',
    path: '../navigation/content/AboutTopNavContent',
  },

  // Typography components
  ArticleTitle: {
    name: 'ArticleTitle',
    description: 'Renders an article title with appropriate styling',
    category: 'typography',
    path: '../typography/article/ArticleTitle',
  },

  ArticleSubtitle: {
    name: 'ArticleSubtitle',
    description: 'Renders an article subtitle with appropriate styling',
    category: 'typography',
    path: '../typography/article/ArticleSubtitle',
  },

  ArticleHeader: {
    name: 'ArticleHeader',
    description: 'Renders article section headers (h2, h3) with appropriate styling',
    category: 'typography',
    path: '../typography/article/ArticleHeader',
  },

  ArticleText: {
    name: 'ArticleText',
    description: 'Renders article paragraph text with variants for lead and standard text',
    category: 'typography',
    path: '../typography/article/ArticleText',
  },

  ArticleList: {
    name: 'ArticleList',
    description: 'Renders ordered and unordered lists with article styling',
    category: 'typography',
    path: '../typography/article/ArticleList',
  },

  ArticleListItem: {
    name: 'ArticleListItem',
    description: 'Renders individual list items within ArticleList',
    category: 'typography',
    path: '../typography/article/ArticleListItem',
  },

  ArticleQuote: {
    name: 'ArticleQuote',
    description: 'Renders blockquotes with article styling',
    category: 'typography',
    path: '../typography/article/ArticleQuote',
  },

  Code: {
    name: 'Code',
    description: 'Renders inline code snippets',
    category: 'typography',
    path: '../typography/inline/Code',
  },

  ColoredText: {
    name: 'ColoredText',
    description: 'Renders text with semantic colors',
    category: 'typography',
    path: '../typography/inline/ColoredText',
  },

  Emphasis: {
    name: 'Emphasis',
    description: 'Renders emphasized (italic) text',
    category: 'typography',
    path: '../typography/inline/Emphasis',
  },

  Strong: {
    name: 'Strong',
    description: 'Renders strong (bold) text',
    category: 'typography',
    path: '../typography/inline/Strong',
  },

  FootnoteText: {
    name: 'FootnoteText',
    description: 'Renders footnote references in text',
    category: 'typography',
    path: '../typography/inline/FootnoteText',
  },

  FootnoteItem: {
    name: 'FootnoteItem',
    description: 'Renders individual footnote items',
    category: 'typography',
    path: '../typography/inline/FootnoteItem',
  },

  UIHeader: {
    name: 'UIHeader',
    description: 'Renders UI section headers',
    category: 'typography',
    path: '../typography/ui/UIHeader',
  },

  UIDescription: {
    name: 'UIDescription',
    description: 'Renders longer descriptive text in UI contexts',
    category: 'typography',
    path: '../typography/ui/UIDescription',
  },

  Caption: {
    name: 'Caption',
    description: 'Renders small descriptive text',
    category: 'typography',
    path: '../typography/ui/Caption',
  },

  MetaText: {
    name: 'MetaText',
    description: 'Renders metadata and supplementary text',
    category: 'typography',
    path: '../typography/ui/MetaText',
  },

  NavText: {
    name: 'NavText',
    description: 'Renders navigation item text',
    category: 'typography',
    path: '../typography/ui/NavText',
  },

  UIText: {
    name: 'UIText',
    description: 'Renders general interface text',
    category: 'typography',
    path: '../typography/ui/UIText',
  },

  // Utility components
  Icon: {
    name: 'Icon',
    description: 'Renders Lucide icons with consistent sizing and colors',
    category: 'utils',
    path: '../utils/icon',
  },

  NamedIcon: {
    name: 'NamedIcon',
    description: 'Renders a predefined icon from a collection of commonly used icons',
    category: 'utils',
    path: '../utils/namedIcon',
  },

  Image: {
    name: 'Image',
    description:
      'A flexible image component with configurable aspect ratio, fit, borders, and loading states',
    category: 'utils',
    path: '../utils/image',
  },

  // UI components
  WorkItem: {
    name: 'WorkItem',
    description:
      'A component for displaying work items with metadata, actions, and interactive states',
    category: 'ui',
    path: '../ui/WorkItem',
  },

  Pill: {
    name: 'Pill',
    description: 'A compact label component for displaying status, tags, or categories',
    category: 'ui',
    path: '../ui/Pill',
  },

  WorkTable: {
    name: 'WorkTable',
    description:
      'A specialized table component for displaying and managing work items with sorting capabilities',
    category: 'ui',
    path: '../ui/WorkTable',
  },
};
