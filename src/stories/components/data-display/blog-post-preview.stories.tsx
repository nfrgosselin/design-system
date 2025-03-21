import type { StoryObj } from '@storybook/react';
import {
  BlogPostPreview,
  type BlogPostPreviewProps,
} from '../../../components/data-display/blog-post-preview';

const meta = {
  title: 'Data Display/BlogPostPreview',
  component: BlogPostPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      autodocs: true,
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the blog post',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or excerpt of the blog post',
    },
    publishDate: {
      control: 'text',
      description: 'Publication date of the blog post',
    },
    href: {
      control: 'text',
      description: 'URL for the blog post',
    },
  },
  args: {
    title: 'Blog Post Title',
    publishDate: 'May 15, 2023',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<BlogPostPreviewProps>;

export const Default: Story = {
  args: {},
};

export const WithSubtitle: Story = {
  args: {
    subtitle: 'A brief description of the blog post contents',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long blog post title that might need to be truncated in some views',
  },
};

export const LongSubtitle: Story = {
  args: {
    subtitle:
      'This is a very long subtitle or excerpt that demonstrates how the component handles text overflow with truncation to ensure proper layout and readability',
  },
};

export const RecentPost: Story = {
  args: {
    title: 'Just Published',
    publishDate: 'Today',
  },
};

export const MultipleExamples: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <BlogPostPreview
        title="Getting Started with Design Systems"
        subtitle="A comprehensive guide for beginners"
        publishDate="June 1, 2023"
        href="#"
      />
      <BlogPostPreview
        title="Component-Driven Development"
        subtitle="Best practices and patterns"
        publishDate="May 15, 2023"
        href="#"
      />
      <BlogPostPreview
        title="Accessibility in UI Components"
        subtitle="Creating inclusive interfaces for all users"
        publishDate="April 28, 2023"
        href="#"
      />
    </div>
  ),
};
