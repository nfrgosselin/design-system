import {
  // Components
  Button,
  Link,
  Icon,
  buttonVariants,
  TopNavContent,
  WorkTopNavContent,

  // Registry utilities
  componentRegistry,
  resolveComponent,

  // Types
  ComponentMetadata,
  ComponentRegistry,

  // Utils
  cn,

  // Version
  VERSION,
  __sideEffects,
} from '../index';

describe('Design System Exports', () => {
  test('components are exported', () => {
    expect(Button).toBeDefined();
    expect(Link).toBeDefined();
    expect(Icon).toBeDefined();
    expect(buttonVariants).toBeDefined();
    expect(TopNavContent).toBeDefined();
    expect(WorkTopNavContent).toBeDefined();
  });

  test('registry utilities are exported', () => {
    expect(componentRegistry).toBeDefined();
    expect(resolveComponent).toBeDefined();
  });

  test('utility functions are exported', () => {
    expect(cn).toBeDefined();
  });

  test('version information is exported', () => {
    expect(VERSION).toBe('0.1.0');
    expect(__sideEffects).toBe(false);
  });

  test('type exports compile correctly', () => {
    // Type tests - these just need to compile
    const metadata: ComponentMetadata = {
      name: 'test',
      description: 'test component',
      category: 'layout',
      path: '../test',
    };

    const registry: ComponentRegistry = {
      test: metadata,
    };

    expect(metadata).toBeDefined();
    expect(registry).toBeDefined();
  });

  test('layout components are properly exported', () => {
    // Test the new generic layout component
    expect(TopNavContent).toBeDefined();
    expect(TopNavContent.displayName).toBe('TopNavContent');

    // Test that WorkTopNavContent is still available
    expect(WorkTopNavContent).toBeDefined();
    expect(WorkTopNavContent.displayName).toBe('WorkTopNavContent');
  });
});
