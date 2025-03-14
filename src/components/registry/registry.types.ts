/**
 * Types for the component registry system
 */

// Interface for component mapping
export interface ComponentMapping {
  // Name is the key used to reference the component
  name: string;
  // Description of the component's purpose
  description: string;
  // Component category for organization
  category:
    | 'layout'
    | 'form'
    | 'display'
    | 'navigation'
    | 'data'
    | 'feedback'
    | 'typography'
    | 'overlay';
  // Path to the original shadcn component
  shadcnPath: string;
  // Path to the extended version if it exists
  extendedPath?: string;
  // Documentation URL for the component
  docUrl?: string;
}

// Registry type - maps component names to their ComponentMapping
export type ComponentRegistry = {
  [key: string]: ComponentMapping;
};
