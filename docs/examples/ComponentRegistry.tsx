/**
 * Component Registry Example
 *
 * This example demonstrates the various ways to use components from the design system,
 * including direct imports, using component metadata, and using the component resolver.
 */

import React from 'react';
import { Button, componentRegistry, resolveComponent } from '../../src';

// Example 1: Direct import of components
export const DirectImportExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Direct Import Example</h2>
      <p>Using components directly imported from the design system:</p>
      <div className="flex gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        {/* Extended variants */}
        <Button variant="brand">Brand</Button>
        <Button variant="success">Success</Button>
      </div>
      <Button isLoading>Loading Button</Button>
    </div>
  );
};

// Example 2: Using component metadata
export const ComponentMetadataExample = () => {
  // Get all form components from the registry
  const formComponents = Object.entries(componentRegistry)
    .filter(([_, info]) => info.category === 'form')
    .map(([key, info]) => ({ key, ...info }));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Component Metadata Example</h2>
      <p>Using component metadata from the registry:</p>
      <div className="space-y-2">
        <h3 className="font-bold">Available Form Components:</h3>
        <ul className="list-disc pl-6">
          {formComponents.map(component => (
            <li key={component.key} className="mb-2">
              <strong>{component.name}</strong>: {component.description}
              {component.extendedPath && <span className="ml-2 text-blue-500">(Extended)</span>}
              {component.docUrl && (
                <a
                  href={component.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Docs
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example 3: Using the component resolver
export const ComponentResolverExample = () => {
  // Resolve Button component (will use extended version)
  const ResolvedButton = resolveComponent('button');

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Component Resolver Example</h2>
      <p>Resolving components dynamically at runtime:</p>
      <div className="flex gap-2">
        <ResolvedButton variant="default">Resolved Button</ResolvedButton>
        <ResolvedButton variant="brand" isLoading>
          Loading
        </ResolvedButton>
      </div>
    </div>
  );
};

// Combined example
export const RegistryExamplePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="pb-6 border-b">
        <h1 className="text-3xl font-bold">Component Registry System</h1>
        <p className="text-gray-600">
          Demonstrating the different ways to use components from the design system.
        </p>
      </header>

      <DirectImportExample />
      <ComponentMetadataExample />
      <ComponentResolverExample />
    </div>
  );
};

export default RegistryExamplePage;
