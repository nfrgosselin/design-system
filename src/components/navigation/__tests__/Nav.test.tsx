import { render, screen, fireEvent } from '@testing-library/react';
import { Nav } from '../Nav';
import type { IconName } from '../../utils/namedIcon';

const mockItems = [
  { href: '/home', label: 'Home', icon: 'page' as IconName },
  { href: '/account', label: 'Account', icon: 'user' as IconName },
];

const mockBrand = {
  logo: <div data-testid="logo">Logo</div>,
  name: 'Brand Name',
};

describe('Nav', () => {
  it('renders top navigation with brand and items', () => {
    render(<Nav variant="top" items={mockItems} brand={mockBrand} />);

    // Check brand section
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Brand Name')).toBeInTheDocument();

    // Check navigation items - use getAllByText since items appear in both desktop and mobile menus
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toBeInTheDocument();

    const accountLinks = screen.getAllByText('Account');
    expect(accountLinks.length).toBeGreaterThan(0);
    expect(accountLinks[0]).toBeInTheDocument();
  });

  it('renders side navigation with correct styles', () => {
    render(<Nav variant="side" items={mockItems} brand={mockBrand} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('lg:flex-col', 'lg:bg-stone-100');
  });

  it('toggles mobile menu', () => {
    render(<Nav variant="top" items={mockItems} brand={mockBrand} />);

    // Initially hidden
    const mobileNav = screen.getByRole('navigation', { hidden: true });
    expect(mobileNav).toHaveClass('hidden', 'md:flex');

    // Toggle menu
    fireEvent.click(screen.getByLabelText(/toggle.*menu/i));
    expect(mobileNav).not.toHaveClass('hidden');

    // Toggle again to hide
    fireEvent.click(screen.getByLabelText(/toggle.*menu/i));
    expect(mobileNav).toHaveClass('hidden');
  });

  it('renders action items', () => {
    const actions = <button data-testid="action-btn">Action</button>;
    render(<Nav variant="top" items={mockItems} brand={mockBrand} actions={actions} />);
    expect(screen.getByTestId('action-btn')).toBeInTheDocument();
  });

  it('applies size variants to side navigation', () => {
    const { rerender } = render(
      <Nav variant="side" items={mockItems} brand={mockBrand} size="slim" />
    );
    expect(screen.getByRole('navigation')).toHaveClass('lg:w-48');

    rerender(<Nav variant="side" items={mockItems} brand={mockBrand} size="wide" />);
    expect(screen.getByRole('navigation')).toHaveClass('lg:w-72');
  });

  it('applies spacing variants to side navigation', () => {
    const { rerender } = render(
      <Nav variant="side" items={mockItems} brand={mockBrand} spacing="compact" />
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('lg:p-3', 'lg:space-y-1');

    rerender(<Nav variant="side" items={mockItems} brand={mockBrand} spacing="relaxed" />);
    expect(nav).toHaveClass('lg:p-6', 'lg:space-y-3');
  });
});
