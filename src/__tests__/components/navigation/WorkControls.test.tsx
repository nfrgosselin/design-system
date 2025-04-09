import { render, screen, fireEvent } from '@testing-library/react';
import { WorkControls } from '../../../components/navigation/WorkControls';

describe('WorkControls', () => {
  const defaultProps = {
    title: 'Sort',
    navItems: [
      { label: 'Newest', href: '#', isActive: true },
      { label: 'Oldest', href: '#' },
      { label: 'AtoZ', href: '#' },
    ],
  };

  it('renders title and navigation items', () => {
    render(<WorkControls {...defaultProps} />);
    expect(screen.getByText('Sort')).toBeInTheDocument();
    expect(screen.getByText('Newest')).toBeInTheDocument();
    expect(screen.getByText('Oldest')).toBeInTheDocument();
    expect(screen.getByText('AtoZ')).toBeInTheDocument();
  });

  it('handles collapsed state correctly', () => {
    render(<WorkControls {...defaultProps} collapsed={true} />);
    // Initially shows only active item
    expect(screen.getByText('Newest')).toBeInTheDocument();
    expect(screen.queryByText('Oldest')).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(screen.getByText('Sort'));
    expect(screen.getByText('Oldest')).toBeInTheDocument();
    expect(screen.getByText('AtoZ')).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(screen.getByText('Sort'));
    expect(screen.queryByText('Oldest')).not.toBeInTheDocument();
  });

  it('calls onClick handler when item is clicked', () => {
    const handleClick = jest.fn();
    render(<WorkControls {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText('Oldest'));
    expect(handleClick).toHaveBeenCalledWith({
      label: 'Oldest',
      href: '#',
    });
  });

  it('calls onClick handler in collapsed state', () => {
    const handleClick = jest.fn();
    render(<WorkControls {...defaultProps} collapsed={true} onClick={handleClick} />);

    // Click active item in collapsed state
    fireEvent.click(screen.getByText('Newest'));
    expect(handleClick).toHaveBeenCalledWith({
      label: 'Newest',
      href: '#',
      isActive: true,
    });
  });

  it('applies custom className when provided', () => {
    const { container } = render(<WorkControls {...defaultProps} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders separators between items in expanded state', () => {
    render(<WorkControls {...defaultProps} />);
    const separators = screen.getAllByText('|');
    expect(separators).toHaveLength(2); // Should have 2 separators for 3 items
  });

  it('uses first item as active when no active item is specified', () => {
    const props = {
      ...defaultProps,
      navItems: [
        { label: 'First', href: '#' },
        { label: 'Second', href: '#' },
      ],
    };
    render(<WorkControls {...props} collapsed={true} />);
    expect(screen.getByText('First')).toBeInTheDocument();
  });
});
