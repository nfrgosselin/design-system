import type { StoryObj } from '@storybook/react';
import {
  BlogPostList,
  type BlogPostListProps,
} from '../../../components/data-display/blog-post-list';
import { BlogPost } from '../../../types/blog';

const mockPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Getting Started with Design Systems',
    subtitle: 'A comprehensive guide for beginners',
    slug: 'getting-started-with-design-systems',
    publishedAt: '2023-06-01T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Component-Driven Development',
    subtitle: 'Best practices and patterns',
    slug: 'component-driven-development',
    publishedAt: '2023-05-15T00:00:00.000Z',
  },
  {
    _id: '3',
    title: 'Accessibility in UI Components',
    subtitle: 'Creating inclusive interfaces for all users',
    slug: 'accessibility-in-ui-components',
    publishedAt: '2023-04-28T00:00:00.000Z',
  },
];

const meta = {
  title: 'Data Display/BlogPostList',
  component: BlogPostList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      autodocs: true,
    },
  },
  argTypes: {
    posts: {
      control: 'object',
      description: 'Array of blog post objects to display',
    },
    showMore: {
      control: 'boolean',
      description: 'Whether to show the "See all" button',
    },
  },
  args: {
    posts: mockPosts,
    showMore: false,
  },
};

export default meta;
type Story = StoryObj<BlogPostListProps>;

export const Default: Story = {
  args: {},
};

export const WithShowMore: Story = {
  args: {
    showMore: true,
  },
};

export const SinglePost: Story = {
  args: {
    posts: [mockPosts[0]],
  },
};

export const ManyPosts: Story = {
  args: {
    posts: [
      ...mockPosts,
      {
        _id: '4',
        title: 'Typography Systems',
        subtitle: 'Creating consistent text hierarchies',
        slug: 'typography-systems',
        publishedAt: '2023-03-10T00:00:00.000Z',
      },
      {
        _id: '5',
        title: 'Color Theory in UI Design',
        slug: 'color-theory-ui-design',
        publishedAt: '2023-02-22T00:00:00.000Z',
      },
    ],
    showMore: true,
  },
};
