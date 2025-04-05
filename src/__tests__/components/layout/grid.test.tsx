import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Grid,
  GridProps,
  TwoColumnGrid,
  ThreeColumnGrid,
  FourColumnGrid,
  ResponsiveGrid,
} from '../../../components/layout/core/grid';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Grid', () => {
  describe('Basic Rendering', () => {
    test('renders with default props', () => {
      render(<Grid>Grid Content</Grid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass(
        'grid',
        'w-full',
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'gap-4'
      );
    });

    test('renders with custom className while preserving defaults', () => {
      render(<Grid className="custom-class">Grid Content</Grid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass('grid', 'w-full', 'custom-class');
    });
  });

  describe('Column Configuration', () => {
    test.each<[GridProps['cols'], string[]]>([
      [1, ['grid-cols-1']],
      [2, ['grid-cols-1', 'sm:grid-cols-2']],
      [3, ['grid-cols-1', 'sm:grid-cols-3']],
      [4, ['grid-cols-1', 'sm:grid-cols-4']],
      ['auto', ['grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3']],
    ])('applies correct column classes for %s columns', (cols, expectedClasses) => {
      render(<Grid cols={cols}>Grid Content</Grid>);
      const grid = screen.getByText('Grid Content');
      expectedClasses.forEach(className => {
        expect(grid).toHaveClass(className);
      });
    });
  });

  describe('Gap Sizes', () => {
    test.each<[GridProps['gap'], string]>([
      ['compact', 'gap-2'],
      ['element', 'gap-4'],
      ['relaxed', 'gap-6'],
      ['content', 'gap-8'],
    ])('applies correct gap class for %s spacing', (gap, expectedClass) => {
      render(<Grid gap={gap}>Grid Content</Grid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass(expectedClass);
    });
  });

  describe('Collapse Behavior', () => {
    test.each<[GridProps['collapseBelow'], string]>([
      ['sm', 'sm:grid-cols-2'],
      ['md', 'md:grid-cols-2'],
      ['lg', 'lg:grid-cols-2'],
      ['xl', 'xl:grid-cols-2'],
      ['none', 'grid-cols-2'],
    ])(
      'applies correct collapse classes at %s breakpoint for 2 columns',
      (breakpoint, expectedClass) => {
        render(
          <Grid cols={2} collapseBelow={breakpoint}>
            Grid Content
          </Grid>
        );
        const grid = screen.getByText('Grid Content');
        if (breakpoint !== 'none') {
          expect(grid).toHaveClass('grid-cols-1');
        }
        expect(grid).toHaveClass(expectedClass);
      }
    );

    test.each<[GridProps['collapseBelow'], string]>([
      ['sm', 'sm:grid-cols-3'],
      ['md', 'md:grid-cols-3'],
      ['lg', 'lg:grid-cols-3'],
      ['xl', 'xl:grid-cols-3'],
      ['none', 'grid-cols-3'],
    ])(
      'applies correct collapse classes at %s breakpoint for 3 columns',
      (breakpoint, expectedClass) => {
        render(
          <Grid cols={3} collapseBelow={breakpoint}>
            Grid Content
          </Grid>
        );
        const grid = screen.getByText('Grid Content');
        if (breakpoint !== 'none') {
          expect(grid).toHaveClass('grid-cols-1');
        }
        expect(grid).toHaveClass(expectedClass);
      }
    );

    test.each<[GridProps['collapseBelow'], string]>([
      ['sm', 'sm:grid-cols-4'],
      ['md', 'md:grid-cols-4'],
      ['lg', 'lg:grid-cols-4'],
      ['xl', 'xl:grid-cols-4'],
      ['none', 'grid-cols-4'],
    ])(
      'applies correct collapse classes at %s breakpoint for 4 columns',
      (breakpoint, expectedClass) => {
        render(
          <Grid cols={4} collapseBelow={breakpoint}>
            Grid Content
          </Grid>
        );
        const grid = screen.getByText('Grid Content');
        if (breakpoint !== 'none') {
          expect(grid).toHaveClass('grid-cols-1');
        }
        expect(grid).toHaveClass(expectedClass);
      }
    );
  });

  describe('Custom Element Rendering', () => {
    test('renders as div by default', () => {
      render(<Grid>Grid Content</Grid>);
      expect(screen.getByText('Grid Content').tagName.toLowerCase()).toBe('div');
    });

    test('renders as custom element when specified', () => {
      render(<Grid as="section">Grid Content</Grid>);
      expect(screen.getByText('Grid Content').tagName.toLowerCase()).toBe('section');
    });
  });

  describe('Grid Items', () => {
    test('renders multiple grid items', () => {
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

  describe('Semantic Wrapper Components', () => {
    test('TwoColumnGrid renders with correct props', () => {
      render(<TwoColumnGrid>Grid Content</TwoColumnGrid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-2');
    });

    test('ThreeColumnGrid renders with correct props', () => {
      render(<ThreeColumnGrid>Grid Content</ThreeColumnGrid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-3');
    });

    test('FourColumnGrid renders with correct props', () => {
      render(<FourColumnGrid>Grid Content</FourColumnGrid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass('grid-cols-1', 'sm:grid-cols-4');
    });

    test('ResponsiveGrid renders with correct props', () => {
      render(<ResponsiveGrid>Grid Content</ResponsiveGrid>);
      const grid = screen.getByText('Grid Content');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });

    test('semantic wrappers accept and forward additional props', () => {
      render(
        <TwoColumnGrid className="custom-class" data-testid="grid">
          Grid Content
        </TwoColumnGrid>
      );
      const grid = screen.getByTestId('grid');
      expect(grid).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    test('has no accessibility violations', async () => {
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

    test('preserves role attributes', () => {
      render(<Grid role="grid">Grid Content</Grid>);
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    test('semantic wrappers maintain accessibility attributes', async () => {
      const { container } = render(
        <TwoColumnGrid role="region" aria-label="Test Grid">
          <div>Item 1</div>
          <div>Item 2</div>
        </TwoColumnGrid>
      );
      expect(screen.getByRole('region')).toBeInTheDocument();
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Test Grid');
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
