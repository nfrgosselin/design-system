import type { StoryObj } from '@storybook/react';
import { ProjectCard, type ProjectCardProps } from '../../../components/data-display/card';

const meta = {
  title: 'Data Display/ProjectCard',
  component: ProjectCard,
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
    status: {
      control: 'select',
      options: ['active', 'completed', 'archived'],
      description: 'Status of the project',
    },
    aspectRatio: {
      control: 'select',
      options: ['video', 'square', 'wide'],
      description: 'Aspect ratio of the card image',
    },
  },
  args: {
    title: 'Project Title',
    description: 'A brief description of the project and its purpose',
    status: 'active',
    technologies: [
      { name: 'React', color: 'seafoam' },
      { name: 'TypeScript', color: 'coral' },
      { name: 'Tailwind', color: 'lagoon' },
    ],
    size: 'md',
    hover: 'none',
  },
};

export default meta;
type Story = StoryObj<ProjectCardProps>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    aspectRatio: 'wide',
  },
};
