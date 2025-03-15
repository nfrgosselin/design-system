import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button, type ButtonProps } from '../button';
import { Mail } from 'lucide-react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('renders with different variants', () => {
      const variants: NonNullable<ButtonProps['variant']>[] = [
        'primary-reverse',
        'primary-inverse',
        'primary-accent',
        'primary-accent-reverse',
        'accent',
        'outline-accent',
        'outline-subtle',
        'ghost',
      ];

      variants.forEach(variant => {
        const { rerender } = render(<Button variant={variant}>Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        rerender(<></>);
      });
    });

    it('renders in different sizes', () => {
      const sizes: NonNullable<ButtonProps['size']>[] = ['sm', 'md', 'lg'];

      sizes.forEach(size => {
        const { rerender } = render(<Button size={size}>Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        rerender(<></>);
      });
    });

    it('renders with an icon', () => {
      render(<Button icon={Mail}>Email</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as icon-only button', () => {
      render(<Button icon={Mail} isIconOnly />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).not.toHaveTextContent(/\w+/);
    });

    it('renders in loading state', () => {
      render(<Button isLoading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-not-allowed');
    });

    it('renders as full width', () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole('button')).toHaveClass('w-full');
    });
  });

  // Interaction Tests
  describe('Interactions', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} isLoading>
          Click me
        </Button>
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Keyboard Access</Button>);

      const button = screen.getByRole('button');
      await user.tab();
      expect(document.activeElement).toBe(button);

      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });

    it('has proper disabled state attributes', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:pointer-events-none');
    });
  });

  // Design Token Integration Tests
  describe('Design Token Integration', () => {
    it('applies proper focus styles', () => {
      render(<Button>Focus Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2');
    });

    it('applies proper hover styles', () => {
      render(<Button variant="primary-reverse">Hover Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('hover:bg-white', 'hover:text-black');
    });
  });
});
