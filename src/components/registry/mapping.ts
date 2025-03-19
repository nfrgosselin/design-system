import { ComponentRegistry } from './registry.types';

/**
 * Component Registry - maps component names to their implementation paths
 * This central registry allows for:
 * 1. Easy discovery of available components
 * 2. Automatic switching between shadcn and extended versions
 * 3. Documentation linking
 * 4. Categorization of components
 */
export const componentRegistry: ComponentRegistry = {
  // Layout components
  accordian: {
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    category: 'display',
    shadcnPath: './shadcn/accordion',
    docUrl: 'https://ui.shadcn.com/docs/components/accordion',
  },

  alert: {
    name: 'Alert',
    description: 'Displays a callout for user attention.',
    category: 'feedback',
    shadcnPath: './shadcn/alert',
    docUrl: 'https://ui.shadcn.com/docs/components/alert',
  },

  button: {
    name: 'Button',
    description:
      'Triggers an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
    category: 'form',
    shadcnPath: './shadcn/button',
    extendedPath: './extended/button',
    docUrl: 'https://ui.shadcn.com/docs/components/button',
  },

  card: {
    name: 'Card',
    description: 'Containers for displaying content and actions about a single subject.',
    category: 'display',
    shadcnPath: './shadcn/card',
    docUrl: 'https://ui.shadcn.com/docs/components/card',
  },

  dialog: {
    name: 'Dialog',
    description: 'A window overlaid on either the primary window or another dialog window.',
    category: 'overlay',
    shadcnPath: './shadcn/dialog',
    docUrl: 'https://ui.shadcn.com/docs/components/dialog',
  },

  input: {
    name: 'Input',
    description: 'Displays a form input field.',
    category: 'form',
    shadcnPath: './shadcn/input',
    docUrl: 'https://ui.shadcn.com/docs/components/input',
  },

  label: {
    name: 'Label',
    description: 'Renders an accessible label associated with controls.',
    category: 'form',
    shadcnPath: './shadcn/label',
    docUrl: 'https://ui.shadcn.com/docs/components/label',
  },

  select: {
    name: 'Select',
    description: 'Displays a list of options for the user to pick from—triggered by a button.',
    category: 'form',
    shadcnPath: './shadcn/select',
    docUrl: 'https://ui.shadcn.com/docs/components/select',
  },

  table: {
    name: 'Table',
    description: 'A responsive table component with styling.',
    category: 'data',
    shadcnPath: './shadcn/table',
    docUrl: 'https://ui.shadcn.com/docs/components/table',
  },

  toast: {
    name: 'Toast',
    description: 'A succinct message that is displayed temporarily.',
    category: 'feedback',
    shadcnPath: './shadcn/toast',
    docUrl: 'https://ui.shadcn.com/docs/components/toast',
  },

  link: {
    name: 'Link',
    description:
      'A component for navigation between pages or to external resources, with support for various visual styles and states.',
    category: 'navigation',
    shadcnPath: './shadcn/link',
    extendedPath: './extended/link',
  },

  hover: {
    name: 'Hover',
    description: 'For sighted users to preview content available behind a click.',
    category: 'display',
    shadcnPath: './shadcn/hover-card',
    docUrl: 'https://ui.shadcn.com/docs/components/hover-card',
  },
} as const;
