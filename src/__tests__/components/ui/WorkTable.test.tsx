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
    },
  ];

  it('renders all work items', () => {
    render(<WorkTable items={defaultItems} />);
    expect(screen.getAllByText('Alpha Project')).toHaveLength(1);
    expect(screen.getAllByText('Beta Project')).toHaveLength(1);
  });

  it('applies custom className when provided', () => {
    const { container } = render(<WorkTable items={defaultItems} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('sorts items by project name ascending', () => {
    render(<WorkTable items={defaultItems} sortBy="projectName" sortDirection="asc" />);
    const items = screen.getAllByRole('heading', { level: 3 });
    expect(items[0]).toHaveTextContent('Alpha Project');
    expect(items[1]).toHaveTextContent('Beta Project');
  });

  it('sorts items by project name descending', () => {
    render(<WorkTable items={defaultItems} sortBy="projectName" sortDirection="desc" />);
    const items = screen.getAllByRole('heading', { level: 3 });
    expect(items[0]).toHaveTextContent('Beta Project');
    expect(items[1]).toHaveTextContent('Alpha Project');
  });

  it('sorts items by year', () => {
    render(<WorkTable items={defaultItems} sortBy="year" sortDirection="desc" />);
    const years = screen.getAllByText(/202[34]/, { selector: '.text-base' });
    expect(years[0]).toHaveTextContent('2024');
    expect(years[1]).toHaveTextContent('2023');
  });

  it('filters items by search text', () => {
    render(<WorkTable items={defaultItems} filterValue="alpha" />);
    expect(screen.getAllByText('Alpha Project')).toHaveLength(1);
    expect(screen.queryByText('Beta Project')).not.toBeInTheDocument();
  });

  it('filters items by primary service', () => {
    render(<WorkTable items={defaultItems} filterValue="Design" />);
    expect(screen.queryByText('Alpha Project')).not.toBeInTheDocument();
    expect(screen.getAllByText('Beta Project')).toHaveLength(1);
  });

  it('first item has a border like all other items', () => {
    const { container } = render(<WorkTable items={defaultItems} />);
    const firstItem = container.firstChild?.firstChild;
    expect(firstItem).toHaveClass('border-t');
  });

  it('renders empty table when no items provided', () => {
    const { container } = render(<WorkTable items={[]} />);
    expect(container.firstChild?.childNodes.length).toBe(0);
  });

  it('handles case-insensitive filtering', () => {
    render(<WorkTable items={defaultItems} filterValue="alpha" />);
    expect(screen.getAllByText('Alpha Project')).toHaveLength(1);
  });
});
