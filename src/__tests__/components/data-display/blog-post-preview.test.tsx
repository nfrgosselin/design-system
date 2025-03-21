import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BlogPostPreview } from '../../../components/data-display/blog-post-preview';

describe('BlogPostPreview', () => {
  it('renders correctly with basic props', () => {
    render(<BlogPostPreview title="Test Blog Post" publishDate="May 15, 2023" href="/blog/test" />);
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.getByText('May 15, 2023')).toBeInTheDocument();
  });

  it('renders with a subtitle', () => {
    render(
      <BlogPostPreview
        title="Test Blog Post"
        subtitle="A test subtitle"
        publishDate="May 15, 2023"
        href="/blog/test"
      />
    );
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.getByText('A test subtitle')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument(); // The separator should be rendered
  });

  it('functions as a link', () => {
    render(<BlogPostPreview title="Test Blog Post" publishDate="May 15, 2023" href="/blog/test" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/blog/test');
  });

  it('applies custom className', () => {
    const { container } = render(
      <BlogPostPreview
        title="Test Blog Post"
        publishDate="May 15, 2023"
        href="/blog/test"
        className="custom-class"
      />
    );
    const linkElement = container.firstChild;
    expect(linkElement).toHaveClass('custom-class');
  });
});
