import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input, type InputProps } from '../../../components/forms/Input';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const getInput = () => {
  // Try to find by role first
  const inputs = screen.queryAllByRole('textbox');
  if (inputs.length > 0) return inputs[0];

  // If no textbox role found, try searchbox
  const searchInputs = screen.queryAllByRole('searchbox');
  if (searchInputs.length > 0) return searchInputs[0];

  throw new Error('No input element found');
};

describe('Input Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with different variants', () => {
      const variants: NonNullable<InputProps['variant']>[] = ['default', 'muted'];

      variants.forEach(variant => {
        const { rerender } = render(<Input variant={variant} />);
        const input = getInput();

        if (variant === 'default') {
          expect(input).toHaveClass('border-stone-500');
        } else {
          expect(input).toHaveClass('border-stone-200', 'bg-muted');
        }

        rerender(<></>);
      });
    });

    it('renders in different sizes', () => {
      const sizes: NonNullable<InputProps['size']>[] = ['xs', 'base', 'lg', 'xl'];
      const sizeClasses = {
        xs: ['h-6', 'px-1.5', 'text-xs'],
        base: ['h-8', 'px-2', 'text-sm'],
        lg: ['h-10', 'px-3', 'text-base'],
        xl: ['h-12', 'px-4', 'text-lg'],
      };

      sizes.forEach(size => {
        const { rerender } = render(<Input size={size} />);
        const input = getInput();
        sizeClasses[size].forEach(className => {
          expect(input).toHaveClass(className);
        });
        rerender(<></>);
      });
    });

    it('renders with different font families', () => {
      const fonts: NonNullable<InputProps['font']>[] = ['sans', 'serif'];

      fonts.forEach(font => {
        const { rerender } = render(<Input font={font} />);
        const input = getInput();
        expect(input).toHaveClass(font === 'sans' ? 'font-sans' : 'font-serif');
        rerender(<></>);
      });
    });
  });

  // State Tests
  describe('States', () => {
    it('handles disabled state correctly', () => {
      render(<Input disabled />);
      const input = getInput();
      expect(input).toBeDisabled();
      expect(input).toHaveClass('opacity-50', 'cursor-not-allowed', 'bg-stone-300');
    });

    it('handles loading state correctly', () => {
      render(<Input isLoading />);
      const input = getInput();
      expect(input).toBeDisabled();
      expect(input).toHaveClass('opacity-50', 'cursor-wait');
    });

    it('handles error state correctly', () => {
      render(<Input error />);
      const input = getInput();
      expect(input).toHaveClass('border-destructive');
      expect(input).toHaveClass('placeholder:text-destructive/50');
    });
  });

  // Type-specific Tests
  describe('Input Types', () => {
    it('handles password type visibility toggle', async () => {
      render(<Input type="password" placeholder="Enter password" />);

      const input = screen.getByPlaceholderText('Enter password');
      const toggleButton = screen.getByRole('button');

      expect(input).toHaveAttribute('type', 'password');
      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'text');
      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'password');
    });

    it('handles search type with clear functionality', async () => {
      const handleChange = jest.fn();
      render(<Input type="search" onChange={handleChange} />);

      const input = screen.getByRole('searchbox');
      await userEvent.type(input, 'search text');

      expect(input).toHaveValue('search text');
      expect(handleChange).toHaveBeenCalledTimes(11); // Once for each character

      const clearButton = screen.getByRole('button');
      await userEvent.click(clearButton);
      expect(input).toHaveValue('');
      expect(handleChange).toHaveBeenCalledTimes(12); // One more time for clearing
    });
  });

  // Controlled Component Tests
  describe('Component Control', () => {
    it('works as a controlled component', () => {
      const handleChange = jest.fn();
      const { rerender } = render(<Input value="initial" onChange={handleChange} />);

      const input = getInput();
      expect(input).toHaveValue('initial');

      rerender(<Input value="updated" onChange={handleChange} />);
      expect(input).toHaveValue('updated');
    });

    it('works as an uncontrolled component', async () => {
      render(<Input defaultValue="default" />);

      const input = getInput();
      expect(input).toHaveValue('default');

      await userEvent.clear(input);
      await userEvent.type(input, 'new value');
      expect(input).toHaveValue('new value');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Input aria-label="Test input" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      render(<Input placeholder="Keyboard test" />);

      const input = getInput();
      await userEvent.tab();
      expect(document.activeElement).toBe(input);
    });

    it('maintains focus after clearing search input', async () => {
      render(<Input type="search" />);

      const input = screen.getByRole('searchbox');
      await userEvent.type(input, 'test');
      const clearButton = screen.getByRole('button');
      await userEvent.click(clearButton);

      expect(document.activeElement).toBe(input);
    });
  });

  // Design Token Integration Tests
  describe('Design Token Integration', () => {
    it('applies proper focus styles', () => {
      render(<Input />);
      const input = getInput();
      expect(input).toHaveClass(
        'focus:outline-none',
        'focus-visible:border-ring',
        'focus-visible:ring-1',
        'focus-visible:ring-brand',
        'focus-visible:bg-stone-50'
      );
    });

    it('applies proper base border styles', () => {
      render(<Input variant="default" />);
      const input = getInput();
      expect(input).toHaveClass('border', 'border-stone-500');
    });
  });
});
