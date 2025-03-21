import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArticleCard, ProjectCard, FeatureCard } from '../../../components/data-display/card';

describe('ArticleCard', () => {
  it('renders correctly with basic props', () => {
    render(<ArticleCard title="Test Article" />);
    expect(screen.getByText('Test Article')).toBeInTheDocument();
  });

  it('renders with a subtitle', () => {
    render(<ArticleCard title="Test Article" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders with a category', () => {
    render(<ArticleCard title="Test Article" category="News" />);
    expect(screen.getByText('News')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(<ArticleCard title="Test Article" href="/test-article" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/test-article');
  });

  it('applies size variant classes correctly', () => {
    const { container } = render(<ArticleCard title="Test Article" size="lg" />);
    const article = container.firstChild;
    expect(article).toHaveClass('group');
  });
});

describe('ProjectCard', () => {
  it('renders correctly with basic props', () => {
    render(<ProjectCard title="Test Project" description="A test project description" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders with a status', () => {
    render(
      <ProjectCard title="Test Project" description="A test project description" status="active" />
    );
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  it('renders with technologies', () => {
    render(
      <ProjectCard
        title="Test Project"
        description="A test project description"
        technologies={[{ name: 'React' }]}
      />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders with metrics', () => {
    render(
      <ProjectCard
        title="Test Project"
        description="A test project description"
        metrics={[{ label: 'Users', value: '10k' }]}
      />
    );
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('10k')).toBeInTheDocument();
  });
});

describe('FeatureCard', () => {
  it('renders correctly with basic props', () => {
    render(<FeatureCard title="Test Feature" description="A test feature description" />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('A test feature description')).toBeInTheDocument();
  });

  it('renders with children when expanded', () => {
    render(
      <FeatureCard title="Test Feature" description="A test feature description" expanded>
        <div>Expanded content</div>
      </FeatureCard>
    );
    expect(screen.getByText('Expanded content')).toBeInTheDocument();
  });

  it('renders with an action', () => {
    render(
      <FeatureCard
        title="Test Feature"
        description="A test feature description"
        action={<button>Action Button</button>}
      />
    );
    expect(screen.getByText('Action Button')).toBeInTheDocument();
  });

  it('renders with an icon', () => {
    render(
      <FeatureCard
        title="Test Feature"
        description="A test feature description"
        icon={<span data-testid="test-icon">🔍</span>}
      />
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
