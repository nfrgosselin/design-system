import { BlogPost } from '../../types/blog';

interface BlogPostsResponse {
  posts: BlogPost[];
  total: number;
}

interface BlogPostsParams {
  limit?: number;
  offset?: number;
}

/**
 * Mock implementation of Sanity client query for blog posts
 * In a real application, this would connect to Sanity's API
 */
export async function getBlogPostsClient({
  limit = 6,
  offset = 0,
}: BlogPostsParams = {}): Promise<BlogPostsResponse> {
  // This is a mock implementation that would normally fetch from Sanity
  // In the design system, we'll just return some dummy data

  // Mock data
  const mockPosts: BlogPost[] = [
    {
      _id: 'post-1',
      title: 'Getting Started with Design Systems',
      subtitle: 'A comprehensive guide for beginners',
      slug: 'getting-started-with-design-systems',
      publishedAt: '2023-06-01T00:00:00.000Z',
      categories: [{ _id: 'cat-1', title: 'Guide' }],
    },
    {
      _id: 'post-2',
      title: 'Component-Driven Development',
      subtitle: 'Best practices and patterns',
      slug: 'component-driven-development',
      publishedAt: '2023-05-15T00:00:00.000Z',
      categories: [{ _id: 'cat-2', title: 'Development' }],
    },
    {
      _id: 'post-3',
      title: 'Accessibility in UI Components',
      subtitle: 'Creating inclusive interfaces for all users',
      slug: 'accessibility-in-ui-components',
      publishedAt: '2023-04-28T00:00:00.000Z',
      categories: [{ _id: 'cat-3', title: 'Accessibility' }],
    },
    {
      _id: 'post-4',
      title: 'Typography Systems',
      subtitle: 'Creating consistent text hierarchies',
      slug: 'typography-systems',
      publishedAt: '2023-03-10T00:00:00.000Z',
      categories: [{ _id: 'cat-4', title: 'Design' }],
    },
    {
      _id: 'post-5',
      title: 'Color Theory in UI Design',
      slug: 'color-theory-ui-design',
      publishedAt: '2023-02-22T00:00:00.000Z',
      categories: [{ _id: 'cat-5', title: 'Design' }],
    },
    {
      _id: 'post-6',
      title: 'Responsive Design Principles',
      subtitle: 'Building for all screen sizes',
      slug: 'responsive-design-principles',
      publishedAt: '2023-01-15T00:00:00.000Z',
      categories: [{ _id: 'cat-6', title: 'Design' }],
    },
    {
      _id: 'post-7',
      title: 'CSS Grid Layouts',
      subtitle: 'Modern techniques for complex UIs',
      slug: 'css-grid-layouts',
      publishedAt: '2022-12-20T00:00:00.000Z',
      categories: [{ _id: 'cat-7', title: 'Development' }],
    },
    {
      _id: 'post-8',
      title: 'Animation Principles for UI',
      subtitle: 'Creating smooth, meaningful animations',
      slug: 'animation-principles-ui',
      publishedAt: '2022-11-05T00:00:00.000Z',
      categories: [{ _id: 'cat-8', title: 'Design' }],
    },
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Calculate pagination
  const availablePosts = mockPosts.slice(offset, offset + limit);

  return {
    posts: availablePosts,
    total: mockPosts.length,
  };
}
