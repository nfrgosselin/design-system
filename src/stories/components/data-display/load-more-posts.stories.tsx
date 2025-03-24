import type { Meta, StoryObj } from '@storybook/react';
import { LoadMorePosts } from '../../../components/data-display/load-more-posts';
import { type BlogPost } from '../../../types/blog';

const meta: Meta<typeof LoadMorePosts> = {
  title: 'Components/Data Display/LoadMorePosts',
  component: LoadMorePosts,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: {
        type: 'select',
        options: ['1', '2', '3'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadMorePosts>;

const mockPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Building a Design System from Scratch',
    subtitle: 'A comprehensive guide to creating your own design system',
    slug: 'design-system-guide',
    publishedAt: '2023-01-01',
    categories: [{ title: 'Design' }],
  },
  {
    _id: '2',
    title: 'The Future of Web Development',
    subtitle: 'Emerging trends and technologies in frontend development',
    slug: 'future-web-dev',
    publishedAt: '2023-01-15',
    categories: [{ title: 'Development' }],
  },
  {
    _id: '3',
    title: 'Optimizing React Applications',
    subtitle: 'Techniques for improving performance in React',
    slug: 'react-optimization',
    publishedAt: '2023-02-01',
    categories: [{ title: 'Performance' }],
  },
];

// Mock the fetch API for Storybook
if (typeof window !== 'undefined') {
  window.fetch = async () => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      ok: true,
      json: async () => ({
        posts: [
          {
            _id: '4',
            title: 'Accessibility in Modern UIs',
            subtitle: 'Creating inclusive web experiences for all users',
            slug: 'accessibility-guide',
            publishedAt: '2023-02-15',
            categories: [{ title: 'Accessibility' }],
          },
          {
            _id: '5',
            title: 'State Management Deep Dive',
            subtitle: 'Comparing different approaches to state management',
            slug: 'state-management',
            publishedAt: '2023-03-01',
            categories: [{ title: 'Architecture' }],
          },
        ],
      }),
    } as Response;
  };
}

export const Default: Story = {
  args: {
    initialPosts: mockPosts,
    totalPosts: 5,
    columns: '3',
    size: 'md',
  },
};

export const SingleColumn: Story = {
  args: {
    initialPosts: mockPosts,
    totalPosts: 5,
    columns: '1',
    size: 'md',
  },
};

export const TwoColumns: Story = {
  args: {
    initialPosts: mockPosts,
    totalPosts: 5,
    columns: '2',
    size: 'md',
  },
};

export const NoMorePosts: Story = {
  args: {
    initialPosts: mockPosts,
    totalPosts: 3, // Same as the number of initial posts, so no "Load More" button
    columns: '3',
    size: 'md',
  },
};
