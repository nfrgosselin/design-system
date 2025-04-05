import { render, screen } from '@testing-library/react';
import { Stack, StackProps } from '../../../components/layout/core/stack';

describe('Stack', () => {
  describe('Basic Rendering', () => {
    test('renders with default props', () => {
      render(
        <Stack data-testid="stack">
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass('flex', 'flex-col', 'items-stretch', 'justify-start', 'gap-4');
    });

    test('renders as inline-flex when inline prop is true', () => {
      render(
        <Stack inline data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass('inline-flex');
    });

    test('renders with custom className while preserving defaults', () => {
      render(
        <Stack className="custom-class" data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass('flex', 'flex-col', 'custom-class');
    });
  });

  describe('Variants', () => {
    test('renders ui variant with gap spacing', () => {
      render(
        <Stack variant="ui" space="content" data-testid="stack">
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass('gap-8');
    });

    test('renders article variant without gap spacing', () => {
      render(
        <Stack variant="article" space="content" data-testid="stack">
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).not.toHaveClass('gap-8');
    });
  });

  describe('Direction and Responsive Behavior', () => {
    test.each<[StackProps['direction'], string]>([
      ['row', 'flex-row'],
      ['column', 'flex-col'],
      ['row-reverse', 'flex-row-reverse'],
      ['column-reverse', 'flex-col-reverse'],
    ])('applies correct direction class for %s', (direction, expectedClass) => {
      render(
        <Stack direction={direction} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });

    test.each<[StackProps['breakAt'], string]>([
      ['sm', 'sm:flex-col'],
      ['md', 'md:flex-col'],
      ['lg', 'lg:flex-col'],
      ['xl', 'xl:flex-col'],
    ])('applies responsive breakpoint %s for row direction', (breakAt, expectedClass) => {
      render(
        <Stack direction="row" breakAt={breakAt} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });

    test('does not apply responsive class when breakAt is none', () => {
      render(
        <Stack direction="row" breakAt="none" data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).not.toHaveClass('sm:flex-col', 'md:flex-col', 'lg:flex-col', 'xl:flex-col');
    });
  });

  describe('Alignment and Justification', () => {
    test.each<[StackProps['align'], string]>([
      ['start', 'items-start'],
      ['end', 'items-end'],
      ['center', 'items-center'],
      ['baseline', 'items-baseline'],
      ['stretch', 'items-stretch'],
    ])('applies correct alignment class for %s', (align, expectedClass) => {
      render(
        <Stack align={align} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });

    test.each<[StackProps['justify'], string]>([
      ['start', 'justify-start'],
      ['end', 'justify-end'],
      ['center', 'justify-center'],
      ['between', 'justify-between'],
      ['around', 'justify-around'],
      ['evenly', 'justify-evenly'],
    ])('applies correct justification class for %s', (justify, expectedClass) => {
      render(
        <Stack justify={justify} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });
  });

  describe('Spacing', () => {
    test.each<[StackProps['space'], string]>([
      ['compact', 'gap-2'],
      ['element', 'gap-4'],
      ['relaxed', 'gap-6'],
      ['content', 'gap-8'],
      ['section', 'gap-16'],
      ['layout', 'gap-24'],
    ])('applies correct gap class for %s spacing', (space, expectedClass) => {
      render(
        <Stack space={space} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });
  });

  describe('Max Width', () => {
    test.each<[StackProps['maxWidth'], string]>([
      ['metric', 'max-w-metric'],
      ['card', 'max-w-card'],
      ['modal', 'max-w-modal'],
      ['form', 'max-w-form'],
      ['content', 'max-w-content'],
      ['max', 'max-w-max'],
    ])('applies correct max width class for %s', (maxWidth, expectedClass) => {
      render(
        <Stack maxWidth={maxWidth} data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveClass(expectedClass);
    });

    test('does not apply max width class when maxWidth is none', () => {
      render(
        <Stack maxWidth="none" data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      const maxWidthClasses = [
        'max-w-metric',
        'max-w-card',
        'max-w-modal',
        'max-w-form',
        'max-w-content',
        'max-w-max',
      ];
      maxWidthClasses.forEach(className => {
        expect(stack).not.toHaveClass(className);
      });
    });
  });

  describe('Custom Element Rendering', () => {
    test('renders as a custom element when as prop is provided', () => {
      render(
        <Stack as="section" data-testid="stack">
          <div>Item 1</div>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack.tagName.toLowerCase()).toBe('section');
    });
  });
});
