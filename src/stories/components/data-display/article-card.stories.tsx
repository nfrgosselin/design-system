import type { StoryObj } from '@storybook/react';
import { ArticleCard, type ArticleCardProps } from '../../../components/data-display/card';

const meta = {
  title: 'Data Display/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      autodocs: true,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card',
    },
    hover: {
      control: 'select',
      options: ['subtle', 'lift', 'none'],
      description: 'Hover animation style',
    },
    categoryColor: {
      control: 'select',
      options: ['seafoam', 'coral', 'navy', 'amber', 'lagoon', 'peach', 'slate', 'gold'],
      description: 'Background color for the category tag',
    },
    aspectRatio: {
      control: 'select',
      options: ['video', 'square', 'wide'],
      description: 'Aspect ratio of the card image',
    },
  },
  args: {
    title: 'Article Title',
    subtitle: 'Article subtitle giving a brief summary of the content',
    date: 'May 15, 2023',
    size: 'sm',
    hover: 'none',
  },
};

export default meta;
type Story = StoryObj<ArticleCardProps>;

export const Default: Story = {
  args: {},
};

export const WithCategory: Story = {
  args: {
    category: 'Tutorial',
    categoryColor: 'seafoam',
  },
};

export const WithImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f',
    aspectRatio: 'video',
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    excerpt: 'Click this card to navigate to the article page',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Smaller Card',
    subtitle: 'A more compact card design',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    title: 'Featured Article',
    subtitle: 'A larger, more prominent card design for featured content',
    category: 'Featured',
    categoryColor: 'gold',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7',
  },
};
