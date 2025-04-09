import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { WorkItem } from '../../../components/ui/WorkItem';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe('WorkItem', () => {
  const defaultProps = {
    projectName: 'Test Project',
    description: 'A test project description',
    imageUrl: '/test-image.jpg',
    primaryService: 'Development',
    year: '2024',
    pillColor: 'marine' as const,
  };

  it('renders project information correctly', () => {
    render(<WorkItem {...defaultProps} />);
    expect(screen.getAllByText('Test Project')).toHaveLength(2); // One for mobile, one for desktop
    expect(screen.getAllByText('A test project description')).toHaveLength(2); // One for mobile, one for desktop
    expect(screen.getAllByText('Development')).toHaveLength(2); // One for mobile, one for desktop
    expect(screen.getAllByText('2024')).toHaveLength(2); // One for mobile, one for desktop
  });

  it('renders image with correct attributes', () => {
    render(<WorkItem {...defaultProps} />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('src', '/test-image.jpg');
      expect(img).toHaveAttribute('alt', 'Test Project');
    });
  });

  it('applies custom className when provided', () => {
    const { container } = render(<WorkItem {...defaultProps} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders as link when url is provided', async () => {
    await act(async () => {
      render(<WorkItem {...defaultProps} url="/test-url" />);
    });
    await waitFor(() => {
      expect(screen.getByRole('link')).toHaveAttribute('href', '/test-url');
    });
  });

  it('opens external links in new tab', async () => {
    await act(async () => {
      render(<WorkItem {...defaultProps} url="https://external-url.com" />);
    });
    await waitFor(() => {
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies hover styles based on pill color', () => {
    const { container } = render(<WorkItem {...defaultProps} pillColor="coral" />);
    expect(container.firstChild).toHaveClass('hover:border-coral');
  });

  it('renders responsive layouts', () => {
    const { container } = render(<WorkItem {...defaultProps} />);
    expect(container.querySelector('.block.md\\:hidden')).toBeInTheDocument(); // Mobile
    expect(container.querySelector('.hidden.md\\:grid')).toBeInTheDocument(); // Desktop
  });

  it('applies cursor-pointer when url is provided', async () => {
    await act(async () => {
      render(<WorkItem {...defaultProps} url="/test-url" />);
    });
    await waitFor(() => {
      expect(screen.getByRole('link')).toHaveClass('cursor-pointer');
    });
  });

  it('does not apply cursor-pointer when no url is provided', () => {
    const { container } = render(<WorkItem {...defaultProps} />);
    expect(container.firstChild).not.toHaveClass('cursor-pointer');
  });

  it('renders different text sizes for mobile and desktop', () => {
    render(<WorkItem {...defaultProps} />);
    const mobileTitle = screen.getByText('Test Project', { selector: '.text-lg' });
    const desktopTitle = screen.getByText('Test Project', { selector: '.text-xl' });
    expect(mobileTitle).toBeInTheDocument();
    expect(desktopTitle).toBeInTheDocument();
  });
});
