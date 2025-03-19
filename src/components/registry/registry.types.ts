/**
 * Types for the simplified component registry system
 */

// Component categories as defined in the refactoring plan
export type ComponentCategory =
  | 'forms'
  | 'layout'
  | 'navigation'
  | 'feedback'
  | 'data-display'
  | 'utils'
  | 'typography';

// Component metadata without shadcn references
export interface ComponentMetadata {
  name: string;
  description: string;
  category: ComponentCategory;
  docUrl?: string;
  path: string;
}

// Registry type - maps component names to their ComponentMetadata
export type ComponentRegistry = Record<string, ComponentMetadata>;
