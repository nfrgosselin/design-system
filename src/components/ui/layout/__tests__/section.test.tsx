import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from '../section';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Section Component', () => {
  describe('Rendering', () => {
    it('renders with default spacing', () => {
      render(<Section>Test Section</Section>);
      const section = screen.getByText('Test Section');
      expect(section).toHaveClass('py-[var(--spacing-section)]');
    });

    it('renders with relaxed spacing', () => {
      render(<Section spacing="relaxed">Test Section</Section>);
      const section = screen.getByText('Test Section');
      expect(section).toHaveClass('py-[var(--spacing-relaxed)]');
    });

    it('renders with compact spacing', () => {
      render(<Section spacing="compact">Test Section</Section>);
      const section = screen.getByText('Test Section');
      expect(section).toHaveClass('py-[var(--spacing-compact)]');
    });

    it('accepts and applies custom className', () => {
      render(<Section className="custom-class">Test Section</Section>);
      const section = screen.getByText('Test Section');
      expect(section).toHaveClass('custom-class');
    });

    it('renders nested content correctly', () => {
      render(
        <Section>
          <div>First Child</div>
          <div>Second Child</div>
        </Section>
      );

      expect(screen.getByText('First Child')).toBeInTheDocument();
      expect(screen.getByText('Second Child')).toBeInTheDocument();
    });
  });

  describe('HTML Semantics', () => {
    it('renders as a section element', () => {
      render(<Section>Test Section</Section>);
      const section = screen.getByText('Test Section');
      expect(section.tagName).toBe('SECTION');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Section>
          <h2>Section Title</h2>
          <p>Section Content</p>
        </Section>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('preserves role attributes', () => {
      render(<Section role="region">Test Section</Section>);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      render(<Section aria-label="Test Section">Content</Section>);
      expect(screen.getByLabelText('Test Section')).toBeInTheDocument();
    });
  });
});
