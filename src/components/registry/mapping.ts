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
  button: {
    name: 'Button',
    description: 'Interactive button component with multiple variants, icons, and loading states',
    category: 'forms',
    path: '../forms/button',
  },

  input: {
    name: 'Input',
    description:
      'Form input component with support for various types (text, password, search), sizes, and states',
    category: 'forms',
    path: '../forms/Input',
  },

  newsletterSignup: {
    name: 'NewsletterSignup',
    description: 'Newsletter signup form with multiple layout variants and built-in state handling',
    category: 'forms',
    path: '../forms/NewsletterSignup',
  },

  // Layout components
  container: {
    name: 'Container',
    description: 'A centered container with responsive width constraints',
    category: 'layout',
    path: '../layout/core/container',
  },

  stack: {
    name: 'Stack',
    description: 'A flexible stack layout component for vertical and horizontal arrangements',
    category: 'layout',
    path: '../layout/core/stack',
  },

  grid: {
    name: 'Grid',
    description: 'A responsive grid layout system with multiple column configurations',
    category: 'layout',
    path: '../layout/core/grid',
  },

  topNavSideBarLayout: {
    name: 'TopNavSideBarLayout',
    description:
      'A page layout with sticky top navigation and responsive sidebar that collapses on mobile',
    category: 'layout',
    path: '../layout/pages/TopNavSideBarLayout',
  },

  // Navigation components
  link: {
    name: 'Link',
    description: 'A component for navigation between pages or to external resources',
    category: 'navigation',
    path: '../navigation/link',
  },

  navItem: {
    name: 'NavItem',
    description: 'A flexible navigation item component with icon support and text styling',
    category: 'navigation',
    path: '../navigation/NavItem',
  },

  brandNav: {
    name: 'BrandNav',
    description: 'A brand navigation component that combines brand name with optional nav items',
    category: 'navigation',
    path: '../navigation/BrandNav',
  },

  topNav: {
    name: 'TopNav',
    description:
      'A top navigation bar component that combines brand navigation with custom content',
    category: 'navigation',
    path: '../navigation/TopNav',
  },

  sidebar: {
    name: 'Sidebar',
    description: 'A sticky sidebar component with support for main content and footer areas',
    category: 'navigation',
    path: '../navigation/Sidebar',
  },

  workControls: {
    name: 'WorkControls',
    description: 'A specialized navigation component for work-related controls and actions',
    category: 'navigation',
    path: '../navigation/WorkControls',
  },

  workTopNavContent: {
    name: 'WorkTopNavContent',
    description: 'Content component for the top navigation bar in work-related pages',
    category: 'navigation',
    path: '../navigation/content/WorkTopNavContent',
  },

  // Typography components
  articleTitle: {
    name: 'ArticleTitle',
    description: 'Renders an article title with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  articleSubtitle: {
    name: 'ArticleSubtitle',
    description: 'Renders an article subtitle with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  articleHeader: {
    name: 'ArticleHeader',
    description: 'Renders article section headers (h2, h3) with appropriate styling',
    category: 'typography',
    path: '../typography/article',
  },

  articleText: {
    name: 'ArticleText',
    description: 'Renders article paragraph text with variants for lead and standard text',
    category: 'typography',
    path: '../typography/article',
  },

  uiHeader: {
    name: 'UIHeader',
    description: 'Renders UI headers with different size and style variants',
    category: 'typography',
    path: '../typography/ui',
  },

  uiLabel: {
    name: 'UILabel',
    description: 'Renders form and UI labels with consistent styling',
    category: 'typography',
    path: '../typography/ui',
  },

  uiCaption: {
    name: 'UICaption',
    description: 'Renders smaller caption text for UI elements',
    category: 'typography',
    path: '../typography/ui',
  },

  inlineEmphasis: {
    name: 'InlineEmphasis',
    description: 'Renders emphasized inline text with appropriate styling',
    category: 'typography',
    path: '../typography/inline',
  },

  inlineStrong: {
    name: 'InlineStrong',
    description: 'Renders strong (bold) inline text with appropriate styling',
    category: 'typography',
    path: '../typography/inline',
  },

  inlineCode: {
    name: 'InlineCode',
    description: 'Renders inline code snippets with monospace font and background',
    category: 'typography',
    path: '../typography/inline',
  },

  // Utility components
  icon: {
    name: 'Icon',
    description: 'Renders Lucide icons with consistent sizing and colors',
    category: 'utils',
    path: '../utils/icon',
  },

  namedIcon: {
    name: 'NamedIcon',
    description: 'Renders a predefined icon from a collection of commonly used icons',
    category: 'utils',
    path: '../utils/namedIcons',
  },

  image: {
    name: 'Image',
    description:
      'A flexible image component with configurable aspect ratio, fit, borders, and loading states',
    category: 'utils',
    path: '../utils/image',
  },

  // UI components
  pill: {
    name: 'Pill',
    description:
      'A flexible pill component for displaying tags, labels, and status indicators with color variants',
    category: 'ui',
    path: '../ui/Pill',
  },

  workItem: {
    name: 'WorkItem',
    description:
      'A component for displaying project/work items with multiple layout variants and color options',
    category: 'ui',
    path: '../ui/WorkItem',
  },

  workTable: {
    name: 'WorkTable',
    description: 'A table component for displaying, sorting, and filtering work items',
    category: 'ui',
    path: '../ui/WorkTable',
  },
};
