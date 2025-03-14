import { ComponentType } from 'react';
import { componentRegistry } from './mapping';

type RegistryComponent = {
  name: string;
  description?: string;
  category?: string;
  shadcnPath: string;
  extendedPath?: string;
  docUrl?: string;
};

type Registry = Record<string, RegistryComponent>;

/**
 * Resolves a component from the registry, preferring extended versions over base versions
 * @param name The name of the component to resolve
 * @returns The resolved component, preferring extended versions
 */
export async function resolveComponent(name: keyof Registry): Promise<ComponentType> {
  const componentInfo = componentRegistry[name];

  if (!componentInfo) {
    throw new Error(`Component "${name}" not found in registry`);
  }

  // Try to load the extended component first
  if (componentInfo.extendedPath) {
    try {
      const extendedModule = await import(componentInfo.extendedPath);
      if (extendedModule && extendedModule.default) {
        return extendedModule.default;
      }
    } catch (e) {
      console.warn(`Failed to load extended component: ${name}`);
    }
  }

  // Fall back to shadcn component
  try {
    const shadcnModule = await import(componentInfo.shadcnPath);
    if (shadcnModule && shadcnModule.default) {
      return shadcnModule.default;
    }
  } catch (e) {
    throw new Error(`Failed to load component: ${name}`);
  }

  throw new Error(`Component "${name}" not found`);
}

/**
 * Gets component metadata from the registry
 * @param name The name of the component to get metadata for
 * @returns The component's metadata
 */
export function getComponentMetadata(name: keyof Registry): RegistryComponent {
  const componentInfo = componentRegistry[name];

  if (!componentInfo) {
    throw new Error(`Component "${name}" not found in registry`);
  }

  return {
    name: componentInfo.name,
    description: componentInfo.description || '',
    category: componentInfo.category || 'ui',
    shadcnPath: componentInfo.shadcnPath,
    extendedPath: componentInfo.extendedPath,
    docUrl: `https://ui.shadcn.com/docs/components/${name}`,
  };
}

/**
 * Example usage:
 *
 * ```tsx
 * import { resolveComponent } from './component-resolver';
 *
 * const Button = resolveComponent('button');
 *
 * <Button>Click me</Button>
 * ```
 */
