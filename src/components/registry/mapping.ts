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

  // Navigation components
  link: {
    name: 'Link',
    description: 'A component for navigation between pages or to external resources',
    category: 'navigation',
    path: '../navigation/link',
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

  // Data display components
  articleCard: {
    name: 'ArticleCard',
    description: 'Card component for displaying article content with various layouts',
    category: 'data-display',
    path: '../data-display/card',
  },

  projectCard: {
    name: 'ProjectCard',
    description:
      'A card component for displaying project information with image, details, and metrics',
    category: 'data-display',
    path: '../data-display/card',
  },

  featureCard: {
    name: 'FeatureCard',
    description: 'An interactive card for displaying features with expandable content and actions',
    category: 'data-display',
    path: '../data-display/card',
  },

  blogPostPreview: {
    name: 'BlogPostPreview',
    description:
      'A compact component for displaying blog post titles with publish dates in a list format',
    category: 'data-display',
    path: '../data-display/blog-post-preview',
  },

  blogPostList: {
    name: 'BlogPostList',
    description: 'A component for displaying a list of blog posts with optional "See all" button',
    category: 'data-display',
    path: '../data-display/blog-post-list',
  },

  loadMorePosts: {
    name: 'LoadMorePosts',
    description: 'Component for loading and displaying blog posts with pagination',
    category: 'data-display',
    path: '../data-display/load-more-posts',
  },
};
