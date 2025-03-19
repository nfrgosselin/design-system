import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NamedIcon, type NamedIconProps } from '../../../components/utils/namedIcon';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('NamedIcon Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<NamedIcon name="user" />);
      const wrapper = screen.getByTestId('named-icon-wrapper');
      expect(wrapper).toBeInTheDocument();
      const svg = wrapper.querySelector('svg');
      expect(svg).toBeInTheDocument();
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
          <NamedIcon name="user" size={size as NonNullable<NamedIconProps['size']>} />
        );
        const svg = screen.getByTestId('named-icon-wrapper').querySelector('svg');
        expect(svg).toHaveClass(...expectedClass.split(' '));
        rerender(<></>);
      });
    });

    it('renders different named icons', () => {
      const { rerender } = render(<NamedIcon name="user" />);
      const wrapper = screen.getByTestId('named-icon-wrapper');
      const svg = wrapper.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('lucide-user');

      rerender(<NamedIcon name="check" />);
      const checkSvg = screen.getByTestId('named-icon-wrapper').querySelector('svg');
      expect(checkSvg).toBeInTheDocument();
      expect(checkSvg).toHaveClass('lucide-check');

      rerender(<NamedIcon name="warning" />);
      const warningSvg = screen.getByTestId('named-icon-wrapper').querySelector('svg');
      expect(warningSvg).toBeInTheDocument();
      expect(warningSvg).toHaveClass('lucide-triangle-alert');
    });

    it('applies custom className', () => {
      const customClass = 'my-custom-class';
      render(<NamedIcon name="user" className={customClass} />);
      const wrapper = screen.getByTestId('named-icon-wrapper');
      expect(wrapper).toHaveClass(customClass);
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<NamedIcon name="user" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('marks icon as aria-hidden', () => {
      render(<NamedIcon name="user" />);
      const svg = screen.getByTestId('named-icon-wrapper').querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('handles custom SVG icons like GitHub', () => {
      render(<NamedIcon name="gitHub" />);
      const wrapper = screen.getByTestId('named-icon-wrapper');
      expect(wrapper).toBeInTheDocument();
      const svg = wrapper.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });
});
