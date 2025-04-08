import { render, screen } from '@testing-library/react';
import { Divider, DividerProps } from '../../../../components/layout/core/divider';

describe('Divider', () => {
  describe('variants', () => {
    it('renders heavy variant by default', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass('border-stone-900');
    });

    it.each([
      ['heavy', 'border-stone-900'],
      ['medium', 'border-stone-600'],
      ['light', 'border-stone-300'],
      ['subtle', 'border-stone-200'],
      ['faint', 'border-stone-100'],
    ])('applies correct classes for %s variant', (variant, expectedClass) => {
      render(<Divider variant={variant as DividerProps['variant']} />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass(expectedClass);
    });
  });

  describe('orientation', () => {
    it('renders horizontal orientation by default', () => {
      render(<Divider />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass('w-full border-t');
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('renders vertical orientation', () => {
      render(<Divider orientation="vertical" />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass('h-full border-l');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('spacing', () => {
    describe('horizontal spacing', () => {
      it.each([
        ['compact', 'my-2'],
        ['element', 'my-4'],
        ['relaxed', 'my-6'],
        ['content', 'my-8'],
      ])('applies correct margin for %s spacing', (spacing, expectedClass) => {
        render(<Divider spacing={spacing as DividerProps['spacing']} />);
        const divider = screen.getByRole('separator');
        expect(divider).toHaveClass(expectedClass);
      });

      it('uses element spacing by default', () => {
        render(<Divider />);
        const divider = screen.getByRole('separator');
        expect(divider).toHaveClass('my-4');
      });
    });

    describe('vertical spacing', () => {
      it.each([
        ['compact', 'mx-2'],
        ['element', 'mx-4'],
        ['relaxed', 'mx-6'],
        ['content', 'mx-8'],
      ])('applies correct margin for %s spacing', (spacing, expectedClass) => {
        render(<Divider orientation="vertical" spacing={spacing as DividerProps['spacing']} />);
        const divider = screen.getByRole('separator');
        expect(divider).toHaveClass(expectedClass);
      });
    });
  });

  describe('accessibility', () => {
    it('renders as separator by default', () => {
      render(<Divider />);
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('renders as decorative when specified', () => {
      render(<Divider decorative />);
      const divider = screen.getByRole('none');
      expect(divider).toBeInTheDocument();
    });

    it('maintains aria-orientation with decorative role', () => {
      render(<Divider decorative orientation="vertical" />);
      const divider = screen.getByRole('none');
      expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('className prop', () => {
    it('allows custom classes to be added', () => {
      render(<Divider className="custom-class" />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass('custom-class');
    });

    it('preserves default classes when custom classes are added', () => {
      render(<Divider className="custom-class" />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveClass('border-0');
      expect(divider).toHaveClass('w-full');
      expect(divider).toHaveClass('border-t');
      expect(divider).toHaveClass('border-stone-900');
      expect(divider).toHaveClass('my-4');
      expect(divider).toHaveClass('custom-class');
    });
  });

  describe('HTML attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(<Divider data-testid="my-divider" id="custom-id" />);
      const divider = screen.getByRole('separator');
      expect(divider).toHaveAttribute('data-testid', 'my-divider');
      expect(divider).toHaveAttribute('id', 'custom-id');
    });
  });
});
