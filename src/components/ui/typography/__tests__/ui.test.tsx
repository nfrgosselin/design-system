import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UIHeader, UILabel, UICaption } from '../ui';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('UI Typography Components', () => {
  describe('UIHeader', () => {
    it('renders with primary variant by default', () => {
      render(<UIHeader>Test Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass(
        'font-sans',
        'font-semibold',
        'text-base',
        'leading-5',
        'text-stone-900'
      );
      expect(header).toHaveTextContent('Test Header');
    });

    it('renders with secondary variant', () => {
      render(<UIHeader variant="secondary">Secondary Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass(
        'font-sans',
        'font-medium',
        'text-sm',
        'leading-5',
        'text-stone-900'
      );
    });

    it('renders with supporting variant', () => {
      render(<UIHeader variant="supporting">Supporting Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass('font-sans', 'text-sm', 'leading-5', 'text-stone-600');
    });

    it('accepts and applies custom className', () => {
      render(<UIHeader className="custom-class">Test Header</UIHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass('custom-class');
    });
  });

  describe('UILabel', () => {
    it('renders with uppercase by default', () => {
      render(<UILabel>Test Label</UILabel>);
      const label = screen.getByText('Test Label');
      expect(label).toHaveClass(
        'font-sans',
        'text-xs',
        'font-medium',
        'leading-4',
        'text-stone-700',
        'uppercase',
        'tracking-wide'
      );
    });

    it('renders without uppercase when specified', () => {
      render(<UILabel isUppercase={false}>Test Label</UILabel>);
      const label = screen.getByText('Test Label');
      expect(label).not.toHaveClass('uppercase', 'tracking-wide');
    });

    it('accepts and applies custom className', () => {
      render(<UILabel className="custom-class">Test Label</UILabel>);
      const label = screen.getByText('Test Label');
      expect(label).toHaveClass('custom-class');
    });
  });

  describe('UICaption', () => {
    it('renders with correct default styles', () => {
      render(<UICaption>Test Caption</UICaption>);
      const caption = screen.getByText('Test Caption');
      expect(caption).toHaveClass('font-sans', 'text-xs', 'leading-4', 'text-stone-500');
    });

    it('accepts and applies custom className', () => {
      render(<UICaption className="custom-class">Test Caption</UICaption>);
      const caption = screen.getByText('Test Caption');
      expect(caption).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('UIHeader has no accessibility violations', async () => {
      const { container } = render(<UIHeader>Accessible Header</UIHeader>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('UILabel has no accessibility violations', async () => {
      const { container } = render(<UILabel>Accessible Label</UILabel>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('UILabel maintains proper label semantics', () => {
      render(<UILabel>Test Label</UILabel>);
      expect(screen.getByText('Test Label').tagName).toBe('LABEL');
    });
  });
});
