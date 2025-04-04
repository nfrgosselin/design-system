import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from '../../../components/layout/core/grid';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe.skip('Grid Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Grid>Grid Content</Grid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass(
        'grid',
        'w-full',
        'grid-cols-1',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'gap-4'
      );
    });

    it('renders with specified number of columns', () => {
      const { rerender } = render(<Grid cols={2}>Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-1', 'md:grid-cols-2');

      rerender(<Grid cols={3}>Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-1', 'md:grid-cols-3');

      rerender(<Grid cols={4}>Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-1', 'md:grid-cols-4');
    });

    it('renders with different gap sizes', () => {
      const { rerender } = render(<Grid gap="element">Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('gap-4');

      rerender(<Grid gap="relaxed">Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('gap-6');

      rerender(<Grid gap="compact">Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('gap-2');
    });

    it('handles different collapse breakpoints', () => {
      const { rerender } = render(
        <Grid cols={2} collapseBelow="sm">
          Grid Content
        </Grid>
      );
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-1', 'sm:grid-cols-2');

      rerender(
        <Grid cols={2} collapseBelow="lg">
          Grid Content
        </Grid>
      );
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-1', 'lg:grid-cols-2');

      rerender(
        <Grid cols={2} collapseBelow="none">
          Grid Content
        </Grid>
      );
      expect(screen.getByText('Grid Content')).toHaveClass('grid-cols-2');
    });

    it('accepts and applies custom className', () => {
      render(<Grid className="custom-class">Grid Content</Grid>);
      expect(screen.getByText('Grid Content')).toHaveClass('custom-class');
    });
  });

  describe('Polymorphic Behavior', () => {
    it('renders as a div by default', () => {
      render(<Grid>Grid Content</Grid>);
      expect(screen.getByText('Grid Content').tagName).toBe('DIV');
    });

    it('renders as a custom element when specified', () => {
      render(<Grid as="section">Grid Content</Grid>);
      expect(screen.getByText('Grid Content').tagName).toBe('SECTION');
    });
  });

  describe('Grid Items', () => {
    it('renders multiple grid items', () => {
      render(
        <Grid>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Grid>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('preserves role attributes', () => {
      render(<Grid role="grid">Grid Content</Grid>);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });
});
