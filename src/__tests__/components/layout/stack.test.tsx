import { render, screen } from '@testing-library/react';
import { Stack } from '../../../components/layout/stack';
import {
  describeUnlessSkipped,
  testUnlessSkipped,
} from '../../../__tests__/helpers/skipTests.helper';

describeUnlessSkipped('Stack v2', () => {
  testUnlessSkipped('renders with default props', () => {
    render(
      <Stack data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex', 'flex-col');
  });

  testUnlessSkipped('applies spacing tokens correctly', () => {
    render(
      <Stack space="element" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('gap-element');
  });

  testUnlessSkipped('handles responsive breakpoints', () => {
    render(
      <Stack direction="row" breakAt="md" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex-row', 'md:flex-col');
  });

  testUnlessSkipped('applies alignment and justification', () => {
    render(
      <Stack align="center" justify="between" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('items-center', 'justify-between');
  });

  testUnlessSkipped('applies max width tokens', () => {
    render(
      <Stack maxWidth="content" data-testid="stack">
        <div>Item 1</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('max-w-[var(--container-content)]');
  });
});
