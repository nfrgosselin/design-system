import { render, screen } from '@testing-library/react';
import { WorkTable } from '../../../components/ui/WorkTable';

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

describe('WorkTable', () => {
  const defaultItems = [
    {
      projectName: 'Alpha Project',
      description: 'First test project',
      imageUrl: '/alpha.jpg',
      primaryService: 'Development',
      year: '2024',
      pillColor: 'marine' as const,
    },
    {
      projectName: 'Beta Project',
      description: 'Second test project',
      imageUrl: '/beta.jpg',
      primaryService: 'Design',
      year: '2023',
      pillColor: 'coral' as const,
      featured: true,
      featuredText: 'Featured',
    },
  ];

  const getDesktopElements = (text: string | RegExp) => {
    const elements = screen.getAllByText(text);
    return elements.filter(el => {
      const parent = el.closest('div[class*="md:"]');
      return parent?.className.includes('md:grid') || parent?.className.includes('md:flex');
    });
  };

  it('renders all work items', () => {
    render(<WorkTable items={defaultItems} />);
    const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(desktopHeadings).toHaveLength(4); // 2 items x 2 layouts (mobile + desktop)
    expect(desktopHeadings[1]).toHaveTextContent('Alpha Project'); // Desktop heading
    expect(desktopHeadings[3]).toHaveTextContent('Beta Project'); // Desktop heading
  });

  it('applies custom className when provided', () => {
    const { container } = render(<WorkTable items={defaultItems} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  describe('sorting', () => {
    it('sorts items by project name ascending', () => {
      render(<WorkTable items={defaultItems} sortBy="projectName" sortDirection="asc" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings[1]).toHaveTextContent('Alpha Project'); // Desktop heading
      expect(desktopHeadings[3]).toHaveTextContent('Beta Project'); // Desktop heading
    });

    it('sorts items by project name descending', () => {
      render(<WorkTable items={defaultItems} sortBy="projectName" sortDirection="desc" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings[1]).toHaveTextContent('Beta Project'); // Desktop heading
      expect(desktopHeadings[3]).toHaveTextContent('Alpha Project'); // Desktop heading
    });

    it('sorts items by year descending', () => {
      render(<WorkTable items={defaultItems} sortBy="year" sortDirection="desc" />);
      const desktopYears = getDesktopElements(/202[34]/);
      expect(desktopYears[0]).toHaveTextContent('2024');
      expect(desktopYears[1]).toHaveTextContent('2023');
    });

    it('sorts items by year ascending', () => {
      render(<WorkTable items={defaultItems} sortBy="year" sortDirection="asc" />);
      const desktopYears = getDesktopElements(/202[34]/);
      expect(desktopYears[0]).toHaveTextContent('2023');
      expect(desktopYears[1]).toHaveTextContent('2024');
    });
  });

  describe('filtering', () => {
    it('filters items by search text in project name', () => {
      render(<WorkTable items={defaultItems} filterValue="alpha" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings).toHaveLength(2); // Mobile + desktop for one item
      expect(desktopHeadings[1]).toHaveTextContent('Alpha Project'); // Desktop heading
    });

    it('filters items by search text in description', () => {
      render(<WorkTable items={defaultItems} filterValue="first test" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings).toHaveLength(2); // Mobile + desktop for one item
      expect(desktopHeadings[1]).toHaveTextContent('Alpha Project'); // Desktop heading
    });

    it('filters items by primary service', () => {
      render(<WorkTable items={defaultItems} filterValue="Design" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings).toHaveLength(2); // Mobile + desktop for one item
      expect(desktopHeadings[1]).toHaveTextContent('Beta Project'); // Desktop heading
    });

    it('handles case-insensitive filtering', () => {
      render(<WorkTable items={defaultItems} filterValue="design" />);
      const desktopHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(desktopHeadings).toHaveLength(2); // Mobile + desktop for one item
      expect(desktopHeadings[1]).toHaveTextContent('Beta Project'); // Desktop heading
    });
  });

  describe('featured items', () => {
    it('renders featured items with featured variant', () => {
      render(<WorkTable items={defaultItems} />);
      const featuredTexts = screen.getAllByText('Featured');
      expect(featuredTexts).toHaveLength(2); // One for mobile, one for desktop
    });

    it('renders non-featured items with collapsed variant', () => {
      render(<WorkTable items={defaultItems} />);
      const descriptions = screen.getAllByText('First test project');
      const desktopDescription = descriptions.find(d => {
        const parent = d.closest('div');
        return parent?.className.includes('col-span-2');
      });
      expect(desktopDescription).toHaveClass('line-clamp-1', 'text-stone-500', 'text-sm');
    });
  });

  it('renders empty table when no items provided', () => {
    const { container } = render(<WorkTable items={[]} />);
    expect(container.firstChild?.childNodes.length).toBe(0);
  });
});
