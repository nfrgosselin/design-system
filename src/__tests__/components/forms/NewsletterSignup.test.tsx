import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { NewsletterSignup } from '../../../components/forms/NewsletterSignup';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('NewsletterSignup Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<NewsletterSignup />);
      expect(
        screen.getByText('Want this in your inbox? Sign up for my newsletter.')
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Subscribe');
    });

    it('renders with custom text content', () => {
      render(<NewsletterSignup headingText="Custom heading" placeholder="Custom placeholder" />);
      expect(screen.getByText('Custom heading')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Custom placeholder')).toBeInTheDocument();
    });

    it('renders in inline variant by default', () => {
      render(<NewsletterSignup />);
      const form = screen.getByRole('form');
      expect(form).toHaveClass('flex', 'gap-3');
      expect(form).not.toHaveClass('flex-col');
    });

    it('renders in stacked variant', () => {
      render(<NewsletterSignup variant="stacked" />);
      const form = screen.getByRole('form');
      expect(form).toHaveClass('flex-col');
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });
  });

  // State Tests
  describe('States', () => {
    it('handles loading state correctly', () => {
      render(<NewsletterSignup status="loading" />);
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      expect(input).toBeDisabled();
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Subscribe');
      expect(button).toHaveAttribute('data-loading', 'true');
    });

    it('handles success state correctly', () => {
      render(<NewsletterSignup status="success" />);
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');
      const successMessage = screen.getByText('A confirmation email is on its way!');

      expect(input).toBeDisabled();
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Submitted!');
      expect(successMessage).toBeInTheDocument();
    });

    it('handles error state correctly', () => {
      render(<NewsletterSignup error="Test error message" />);
      const errorMessage = screen.getByText('Test error message');

      expect(errorMessage).toHaveClass('text-error', 'font-sans');
    });

    it('shows custom success message', () => {
      render(<NewsletterSignup status="success" successMessage="Custom success message" />);
      expect(screen.getByText('Custom success message')).toBeInTheDocument();
    });
  });

  // Interaction Tests
  describe('Interactions', () => {
    it('calls onSubmit with email value when form is submitted', async () => {
      const handleSubmit = jest.fn();
      render(<NewsletterSignup onSubmit={handleSubmit} />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      await userEvent.type(input, 'test@example.com');
      fireEvent.submit(form);

      expect(handleSubmit).toHaveBeenCalledWith('test@example.com');
    });

    it('updates input value when typing', async () => {
      render(<NewsletterSignup />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, 'test@example.com');
      expect(input).toHaveValue('test@example.com');
    });

    it('respects defaultValue prop', () => {
      render(<NewsletterSignup defaultValue="test@example.com" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('test@example.com');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<NewsletterSignup />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations in stacked variant', async () => {
      const { container } = render(<NewsletterSignup variant="stacked" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('maintains focus after form submission', async () => {
      render(<NewsletterSignup />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      input.focus();
      fireEvent.submit(form);

      expect(document.activeElement).toBe(input);
    });
  });
});
