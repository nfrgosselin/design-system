import { render, screen } from '@testing-library/react';
import { NavItem } from '../../../components/navigation/NavItem';

describe('NavItem', () => {
  it('renders basic nav item with text', () => {
    render(<NavItem href="/home">Home</NavItem>);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });

  it('renders with icon in start position', () => {
    render(
      <NavItem href="/home" icon="page" iconPosition="start">
        Home
      </NavItem>
    );
    const link = screen.getByRole('link');
    expect(link.firstChild).toHaveClass('shrink-0'); // Icon container
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders with icon in end position', () => {
    render(
      <NavItem href="/home" icon="page" iconPosition="end">
        Home
      </NavItem>
    );
    const link = screen.getByRole('link');
    expect(link.lastChild).toHaveClass('shrink-0'); // Icon container
  });

  it('renders icon-only variant', () => {
    render(
      <NavItem href="/home" icon="page" iconOnly>
        Home
      </NavItem>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('justify-center');
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('applies active styles when isActive is true', () => {
    render(
      <NavItem href="/home" isActive>
        Home
      </NavItem>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('data-active', 'true');
    const icon = link.querySelector('.shrink-0');
    if (icon) {
      expect(icon).toHaveClass('text-marine');
    }
  });

  it('applies default styles when not active', () => {
    render(
      <NavItem href="/home" icon="page">
        Home
      </NavItem>
    );
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('data-active');
    const icon = link.querySelector('.shrink-0');
    if (icon) {
      expect(icon).toHaveClass('text-stone-500');
      expect(icon).toHaveClass('group-hover:text-marine-hover');
    }
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <NavItem href="/home" size="sm">
        Home
      </NavItem>
    );
    expect(screen.getByText('Home')).toHaveAttribute('data-ds-element', 'text');
    expect(screen.getByText('Home')).toHaveClass('text-sm');

    rerender(
      <NavItem href="/home" size="base">
        Home
      </NavItem>
    );
    expect(screen.getByText('Home')).toHaveAttribute('data-ds-element', 'text');
    expect(screen.getByText('Home')).toHaveClass('text-base');
  });

  it('applies text transform styles', () => {
    render(
      <NavItem href="/home" transform="uppercase">
        Home
      </NavItem>
    );
    expect(screen.getByText('Home')).toHaveAttribute('data-ds-element', 'text');
    expect(screen.getByText('Home')).toHaveClass('uppercase');
  });

  it('applies alignment styles', () => {
    const { rerender } = render(
      <NavItem href="/home" align="center">
        Home
      </NavItem>
    );
    expect(screen.getByRole('link')).toHaveClass('mx-auto');

    rerender(
      <NavItem href="/home" align="right">
        Home
      </NavItem>
    );
    expect(screen.getByRole('link')).toHaveClass('ml-auto');
  });

  it('applies underline effect when specified', () => {
    render(
      <NavItem href="/home" underline>
        Home
      </NavItem>
    );
    const text = screen.getByText('Home');
    expect(text).toHaveClass('pb-0.5');
    expect(text).toHaveClass('after:w-0');
    expect(text).toHaveClass('after:bg-marine');
  });
});
