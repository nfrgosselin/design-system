import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon, type IconProps } from '../../../components/utils/icon';
import { Mail, AlertCircle } from 'lucide-react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Icon Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Icon icon={Mail} />);
      const icon = screen.getByTestId('icon');
      const wrapper = icon.parentElement;
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass('inline-flex', 'items-center', 'justify-center');
      expect(wrapper).not.toHaveClass('text-foreground');
    });

    it('renders with different sizes', () => {
      const sizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
      } as const;

      Object.entries(sizes).forEach(([size, expectedClass]) => {
        const { rerender } = render(
          <Icon icon={Mail} size={size as NonNullable<IconProps['size']>} />
        );
        const icon = screen.getByTestId('icon');
        expect(icon).toHaveClass(...expectedClass.split(' '));
        rerender(<></>);
      });
    });

    it('renders with different colors', () => {
      const colorClasses = [
        'text-foreground',
        'text-brand',
        'text-success',
        'text-warning',
        'text-error',
      ];

      colorClasses.forEach(expectedClass => {
        const { rerender } = render(<Icon icon={Mail} className={expectedClass} />);
        const wrapper = screen.getByTestId('icon').parentElement;
        expect(wrapper).toHaveClass(expectedClass);
        rerender(<></>);
      });
    });

    it('renders different icons', () => {
      const { rerender } = render(<Icon icon={Mail} />);
      expect(screen.getByTestId('icon')).toHaveClass('lucide-mail');

      rerender(<Icon icon={AlertCircle} />);
      expect(screen.getByTestId('icon')).toHaveClass('lucide-circle-alert');
    });

    it('applies custom className', () => {
      const customClass = 'my-custom-class';
      render(<Icon icon={Mail} className={customClass} />);
      const wrapper = screen.getByTestId('icon').parentElement;
      expect(wrapper).toHaveClass(customClass);
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Icon icon={Mail} aria-label="Email" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('handles aria-label correctly', () => {
      render(<Icon icon={Mail} aria-label="Email icon" />);
      const wrapper = screen.getByRole('img');
      expect(wrapper).toHaveAttribute('aria-label', 'Email icon');
    });

    it('uses correct roles based on aria-label presence', () => {
      const { rerender } = render(<Icon icon={Mail} />);
      // Without aria-label, parent should not have role="img"
      expect(screen.queryByRole('img')).not.toBeInTheDocument();

      // With aria-label, parent should have role="img"
      rerender(<Icon icon={Mail} aria-label="Email" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('marks icon as aria-hidden', () => {
      render(<Icon icon={Mail} />);
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Design Token Integration Tests
  describe('Design Token Integration', () => {
    it('applies size tokens correctly', () => {
      render(<Icon icon={Mail} size="lg" />);
      const icon = screen.getByTestId('icon');
      // lg size should use h-6/w-6
      expect(icon).toHaveClass('w-6', 'h-6');
    });

    it('applies color tokens correctly', () => {
      render(<Icon icon={Mail} className="text-brand" />);
      const wrapper = screen.getByTestId('icon').parentElement;
      expect(wrapper).toHaveClass('text-brand');
    });

    it('maintains consistent spacing in flex container', () => {
      render(<Icon icon={Mail} />);
      const wrapper = screen.getByTestId('icon').parentElement;
      expect(wrapper).toHaveClass('inline-flex', 'items-center', 'justify-center');
    });
  });
});
