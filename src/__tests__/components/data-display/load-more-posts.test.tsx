import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadMorePosts } from '../../../components/data-display/load-more-posts';
import { type BlogPost } from '../../../types/blog';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ posts: mockAdditionalPosts }),
  } as Response)
);

const mockInitialPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Test Post 1',
    subtitle: 'A test post',
    slug: 'test-post-1',
    publishedAt: '2023-01-01',
  },
  {
    _id: '2',
    title: 'Test Post 2',
    subtitle: 'Another test post',
    slug: 'test-post-2',
    publishedAt: '2023-01-02',
  },
];

const mockAdditionalPosts: BlogPost[] = [
  {
    _id: '3',
    title: 'Test Post 3',
    subtitle: 'A third test post',
    slug: 'test-post-3',
    publishedAt: '2023-01-03',
  },
];

describe('LoadMorePosts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the initial posts', () => {
    render(<LoadMorePosts initialPosts={mockInitialPosts} totalPosts={3} />);

    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    expect(screen.queryByText('Test Post 3')).not.toBeInTheDocument();
  });

  it('shows the load more button when there are more posts', () => {
    render(<LoadMorePosts initialPosts={mockInitialPosts} totalPosts={3} />);

    expect(screen.getByText('Load More Posts')).toBeInTheDocument();
  });

  it('does not show load more button when there are no more posts', () => {
    render(<LoadMorePosts initialPosts={mockInitialPosts} totalPosts={2} />);

    expect(screen.queryByText('Load More Posts')).not.toBeInTheDocument();
  });

  it('loads more posts when the button is clicked', async () => {
    render(<LoadMorePosts initialPosts={mockInitialPosts} totalPosts={3} />);

    const loadMoreButton = screen.getByText('Load More Posts');
    fireEvent.click(loadMoreButton);

    await waitFor(() => {
      expect(screen.getByText('Test Post 3')).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/posts?limit=6&offset=2');
  });
});
