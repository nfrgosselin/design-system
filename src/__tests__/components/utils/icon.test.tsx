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
      expect(icon).toBeInTheDocument();
      expect(icon.parentElement).toHaveClass('text-stone-900'); // default color
    });

    it('renders with different sizes', () => {
      const sizes = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
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
      const colors = {
        default: 'text-stone-900',
        muted: 'text-stone-500',
        primary: 'text-primary',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
        info: 'text-info',
      } as const;

      Object.entries(colors).forEach(([color, expectedClass]) => {
        const { rerender } = render(
          <Icon icon={Mail} color={color as NonNullable<IconProps['color']>} />
        );
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
      // lg size should use spacing-8 (32px)
      expect(icon).toHaveClass('w-8', 'h-8');
    });

    it('applies color tokens correctly', () => {
      render(<Icon icon={Mail} color="primary" />);
      const wrapper = screen.getByTestId('icon').parentElement;
      // Should use the primary color token
      expect(wrapper).toHaveClass('text-primary');
    });

    it('maintains consistent spacing in flex container', () => {
      render(<Icon icon={Mail} />);
      const wrapper = screen.getByTestId('icon').parentElement;
      expect(wrapper).toHaveClass('inline-flex', 'items-center', 'justify-center');
    });
  });
});
