import { render, screen, fireEvent } from '@testing-library/react';
import { BrandNav } from '../../../components/navigation/BrandNav';

describe('BrandNav', () => {
  const defaultProps = {
    logo: <div data-testid="mock-logo">Logo</div>,
    brandName: 'Test Brand',
    navItems: [
      { label: 'Item 1', href: '#1' },
      { label: 'Item 2', href: '#2', isActive: true },
      { label: 'Item 3', href: '#3' },
    ],
  };

  // Create a full mock DOMRect
  const createMockDOMRect = (bottom = 0): DOMRect => ({
    bottom,
    height: 100,
    left: 0,
    right: 100,
    top: 0,
    width: 100,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  });

  beforeEach(() => {
    // Reset mocks before each test
    jest.restoreAllMocks();
  });

  it('renders brand name and logo', () => {
    render(<BrandNav {...defaultProps} />);

    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
  });

  it('renders navigation items with separators', () => {
    render(<BrandNav {...defaultProps} />);

    // Check nav items
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // Check separators (|)
    const separators = screen.getAllByText('|');
    expect(separators).toHaveLength(2); // Should have 2 separators for 3 items
  });

  it('handles string logo URLs', () => {
    render(<BrandNav {...defaultProps} logo="https://example.com/logo.png" />);

    const img = screen.getByAltText('Test Brand logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/logo.png');
  });

  it('applies custom stack spacing', () => {
    const { container } = render(<BrandNav {...defaultProps} stackSpacing="space-y-4" />);

    const stack = container.querySelector('.space-y-4');
    expect(stack).toBeInTheDocument();
  });

  it('applies logo offset', () => {
    const { container } = render(<BrandNav {...defaultProps} logoOffset="-mt-1" />);

    const logoContainer = container.querySelector('.-mt-1');
    expect(logoContainer).toBeInTheDocument();
  });

  it('calls onNavBottomChange when mounted', () => {
    const mockOnChange = jest.fn();

    // Mock getBoundingClientRect with full DOMRect
    Element.prototype.getBoundingClientRect = jest.fn(() => createMockDOMRect(100));

    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 50,
      writable: true,
    });

    render(<BrandNav {...defaultProps} onNavBottomChange={mockOnChange} />);

    expect(mockOnChange).toHaveBeenCalledWith(150); // 100 + 50
  });

  it('updates position on scroll and resize', () => {
    const mockOnChange = jest.fn();

    // Mock getBoundingClientRect with full DOMRect
    Element.prototype.getBoundingClientRect = jest.fn(() => createMockDOMRect(100));

    render(<BrandNav {...defaultProps} onNavBottomChange={mockOnChange} />);

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100 });
    fireEvent.scroll(window);
    expect(mockOnChange).toHaveBeenCalledWith(200); // 100 + 100

    // Simulate resize
    fireEvent.resize(window);
    expect(mockOnChange).toHaveBeenCalledTimes(3); // Initial + scroll + resize
  });

  it('renders without nav items', () => {
    const { container } = render(
      <BrandNav logo={defaultProps.logo} brandName={defaultProps.brandName} />
    );

    // Should not render the nav items container
    expect(container.querySelector('.flex.items-center')).not.toBeInTheDocument();
  });
});
