import { render, screen } from '@testing-library/react';
import { Stack } from '../../../components/layout/core/stack';

describe.skip('Stack v2', () => {
  test.skip('renders with default props', () => {
    render(
      <Stack data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex', 'flex-col');
  });

  test.skip('applies spacing tokens correctly', () => {
    render(
      <Stack space="element" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('gap-element');
  });

  test.skip('handles responsive breakpoints', () => {
    render(
      <Stack direction="row" breakAt="md" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex-row', 'md:flex-col');
  });

  test.skip('applies alignment and justification', () => {
    render(
      <Stack align="center" justify="between" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('items-center', 'justify-between');
  });

  test.skip('applies max width tokens', () => {
    render(
      <Stack maxWidth="content" data-testid="stack">
        <div>Item 1</div>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('max-w-[var(--container-content)]');
  });
});
