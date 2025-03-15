import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Content } from '../content';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Content Component', () => {
  describe('Rendering', () => {
    it('renders with default spacing', () => {
      render(<Content>Test Content</Content>);
      const content = screen.getByText('Test Content');
      expect(content).toHaveClass('space-y-[var(--spacing-content)]');
    });

    it('renders with relaxed spacing', () => {
      render(<Content spacing="relaxed">Test Content</Content>);
      const content = screen.getByText('Test Content');
      expect(content).toHaveClass('space-y-[var(--spacing-relaxed)]');
    });

    it('renders with compact spacing', () => {
      render(<Content spacing="compact">Test Content</Content>);
      const content = screen.getByText('Test Content');
      expect(content).toHaveClass('space-y-[var(--spacing-compact)]');
    });

    it('accepts and applies custom className', () => {
      render(<Content className="custom-class">Test Content</Content>);
      const content = screen.getByText('Test Content');
      expect(content).toHaveClass('custom-class');
    });

    it('renders multiple children with proper spacing', () => {
      render(
        <Content>
          <div>First Child</div>
          <div>Second Child</div>
          <div>Third Child</div>
        </Content>
      );

      const content = screen.getByText('First Child').parentElement;
      expect(content).toHaveClass('space-y-[var(--spacing-content)]');
      expect(screen.getByText('First Child')).toBeInTheDocument();
      expect(screen.getByText('Second Child')).toBeInTheDocument();
      expect(screen.getByText('Third Child')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Content>
          <div>First Child</div>
          <div>Second Child</div>
        </Content>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('preserves role attributes', () => {
      render(<Content role="region">Test Content</Content>);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });
  });
});
