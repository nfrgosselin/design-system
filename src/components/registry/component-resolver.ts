import { ComponentType } from 'react';
import { componentRegistry } from './mapping';
import { ComponentMetadata, ComponentRegistry } from './registry.types';

/**
 * Resolves a component from the registry
 * @param name The name of the component to resolve
 * @returns The resolved component
 */
export async function resolveComponent(name: keyof ComponentRegistry): Promise<ComponentType> {
  const componentInfo = componentRegistry[name];

  if (!componentInfo) {
    throw new Error(`Component "${name}" not found in registry`);
  }

  try {
    const module = await import(componentInfo.path);
    if (module && module.default) {
      return module.default;
    }
    throw new Error(`Component "${name}" does not have a default export`);
  } catch (e) {
    throw new Error(`Failed to load component: ${name}`);
  }
}

/**
 * Gets component metadata from the registry
 * @param name The name of the component to get metadata for
 * @returns The component's metadata
 */
export function getComponentMetadata(name: keyof ComponentRegistry): ComponentMetadata {
  const componentInfo = componentRegistry[name];

  if (!componentInfo) {
    throw new Error(`Component "${name}" not found in registry`);
  }

  return componentInfo;
}

/**
 * Gets all components in a specific category
 * @param category The category to filter by
 * @returns Array of component metadata for the specified category
 */
export function getComponentsByCategory(
  category: ComponentMetadata['category']
): ComponentMetadata[] {
  return Object.values(componentRegistry).filter(component => component.category === category);
}

/**
 * Gets all available component categories
 * @returns Array of unique category names used in the registry
 */
export function getComponentCategories(): string[] {
  const categories = new Set<string>();

  Object.values(componentRegistry).forEach(component => {
    categories.add(component.category);
  });

  return Array.from(categories);
}

/**
 * Example usage:
 *
 * ```tsx
 * import { resolveComponent } from './component-resolver';
 *
 * const Button = await resolveComponent('button');
 *
 * <Button>Click me</Button>
 * ```
 */
