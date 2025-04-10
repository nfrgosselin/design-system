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

  // Typography components
  ArticleTitle: {
    name: 'ArticleTitle',
    description: 'Renders an article title with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  ArticleSubtitle: {
    name: 'ArticleSubtitle',
    description: 'Renders an article subtitle with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  ArticleHeader: {
    name: 'ArticleHeader',
    description: 'Renders article section headers (h2, h3) with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  ArticleText: {
    name: 'ArticleText',
    description: 'Renders article paragraph text with variants for lead and standard text',
    category: 'typography',
    path: '../typography/article',
  },

  UIHeader: {
    name: 'UIHeader',
    description: 'Renders UI headers with different size and style variants',
    category: 'typography',
    path: '../typography/ui',
  },

  UILabel: {
    name: 'UILabel',
    description: 'Renders form and UI labels with consistent styling',
    category: 'typography',
    path: '../typography/ui',
  },

  UICaption: {
    name: 'UICaption',
    description: 'Renders smaller caption text for UI elements',
    category: 'typography',
    path: '../typography/ui',
  },

  InlineEmphasis: {
    name: 'InlineEmphasis',
    description: 'Renders emphasized inline text with appropriate styling',
    category: 'typography',
    path: '../typography/inline',
  },

  InlineStrong: {
    name: 'InlineStrong',
    description: 'Renders strong (bold) inline text with appropriate styling',
    category: 'typography',
    path: '../typography/inline',
  },

  InlineCode: {
    name: 'InlineCode',
    description: 'Renders inline code snippets with monospace font and background',
    category: 'typography',
    path: '../typography/inline',
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
    path: '../utils/namedIcons',
  },

  Image: {
    name: 'Image',
    description:
      'A flexible image component with configurable aspect ratio, fit, borders, and loading states',
    category: 'utils',
    path: '../utils/image',
  },

  // UI components
  Pill: {
    name: 'Pill',
    description:
      'A flexible pill component for displaying tags, labels, and status indicators with color variants',
    category: 'ui',
    path: '../ui/Pill',
  },

  WorkItem: {
    name: 'WorkItem',
    description:
      'A component for displaying project/work items with multiple layout variants and color options',
    category: 'ui',
    path: '../ui/WorkItem',
  },

  WorkTable: {
    name: 'WorkTable',
    description: 'A table component for displaying, sorting, and filtering work items',
    category: 'ui',
    path: '../ui/WorkTable',
  },
};
