import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavItem } from '../../../components/navigation/NavItem';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('NavItem', () => {
  it('renders correctly', () => {
    render(<NavItem href="/test">Test Link</NavItem>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('applies correct text variant styles', () => {
    const variants = ['default', 'active', 'muted'] as const;
    variants.forEach(variant => {
      const { container } = render(
        <NavItem href="/test" textVariant={variant}>
          Test Link
        </NavItem>
      );
      expect(container.firstChild).toHaveClass('no-underline');
    });
  });

  it('applies correct size styles', () => {
    const sizes = ['sm', 'base'] as const;
    sizes.forEach(size => {
      const { container } = render(
        <NavItem href="/test" size={size}>
          Test Link
        </NavItem>
      );
      expect(container.firstChild).toHaveClass('no-underline');
    });
  });

  it('accepts custom className', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <NavItem href="/test" className={customClass}>
        Test Link
      </NavItem>
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies active styles when isActive is true', () => {
    render(
      <NavItem href="/test" isActive>
        Test Link
      </NavItem>
    );
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('applies muted styles', () => {
    render(
      <NavItem href="#" textVariant="muted">
        Muted Link
      </NavItem>
    );
    expect(screen.getByText('Muted Link')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <NavItem href="/test" disabled>
        Disabled Link
      </NavItem>
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies text transform styles', () => {
    render(
      <NavItem href="/test" transform="uppercase">
        Uppercase Text
      </NavItem>
    );
    expect(screen.getByText('Uppercase Text')).toBeInTheDocument();
  });

  it('applies no transform styles', () => {
    render(
      <NavItem href="/test" transform="none">
        Normal Text
      </NavItem>
    );
    expect(screen.getByText('Normal Text')).toBeInTheDocument();
  });

  it('applies underline styles', () => {
    render(
      <NavItem href="#" underline>
        Underlined Link
      </NavItem>
    );
    expect(screen.getByText('Underlined Link')).toBeInTheDocument();
  });

  it('handles icons correctly', () => {
    render(
      <NavItem href="/test" icon="settings">
        Settings
      </NavItem>
    );
    expect(screen.getByTestId('named-icon-wrapper')).toBeInTheDocument();
  });

  it('handles icon-only variant correctly', () => {
    render(
      <NavItem href="/test" icon="settings" iconOnly>
        <span className="sr-only">Settings</span>
      </NavItem>
    );
    expect(screen.getByTestId('named-icon-wrapper')).toBeInTheDocument();
  });

  it('applies correct size variants', () => {
    render(
      <NavItem href="/test" size="sm">
        Small Link
      </NavItem>
    );
    expect(screen.getByText('Small Link')).toBeInTheDocument();

    render(
      <NavItem href="/test" size="base">
        Base Link
      </NavItem>
    );
    expect(screen.getByText('Base Link')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    const { container } = render(<NavItem href="/test">Accessible Link</NavItem>);
    expect(container.querySelector('a')).toHaveAttribute('href', '/test');
  });

  it('handles external links correctly', () => {
    const linkText = 'External Link';
    render(<NavItem href="https://example.com">{linkText}</NavItem>);
    const link = screen.getByText(linkText);
    expect(link).toBeInTheDocument();
  });

  it('should not have any accessibility violations', async () => {
    const { container } = render(<NavItem href="/test">Accessible Link</NavItem>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
