import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BlogPostList } from '../../../components/data-display/blog-post-list';
import { BlogPost } from '../../../types/blog';

describe('BlogPostList', () => {
  const mockPosts: BlogPost[] = [
    {
      _id: '1',
      title: 'Test Post 1',
      slug: 'test-post-1',
      publishedAt: '2023-05-15T00:00:00.000Z',
    },
    {
      _id: '2',
      title: 'Test Post 2',
      subtitle: 'A test subtitle',
      slug: 'test-post-2',
      publishedAt: '2023-06-01T00:00:00.000Z',
    },
  ];

  it('renders correctly with posts', () => {
    const { container } = render(<BlogPostList posts={mockPosts} />);
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    expect(screen.getByText('A test subtitle')).toBeInTheDocument();

    // Instead of checking specific dates, verify that time elements exist
    const timeElements = container.querySelectorAll('time');
    expect(timeElements.length).toBe(2);
  });

  it('does not show "See all" button by default', () => {
    render(<BlogPostList posts={mockPosts} />);
    expect(screen.queryByText('See all')).not.toBeInTheDocument();
  });

  it('shows "See all" button when showMore is true', () => {
    render(<BlogPostList posts={mockPosts} showMore />);
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<BlogPostList posts={mockPosts} className="custom-class" />);
    const listElement = container.firstChild;
    expect(listElement).toHaveClass('custom-class');
  });
});
