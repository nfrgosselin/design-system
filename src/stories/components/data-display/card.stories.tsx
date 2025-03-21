import type { Meta, StoryObj } from '@storybook/react';
import {
  ArticleCard,
  ProjectCard,
  FeatureCard,
  type ArticleCardProps,
  type ProjectCardProps,
  type FeatureCardProps,
} from '../../../components/data-display/card';

// Example icon for stories
const ExampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// Example action button for stories
const ExampleActionButton = () => (
  <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white">
    Learn More
  </button>
);

// ArticleCard Stories
const articleCardMeta: Meta<ArticleCardProps> = {
  title: 'Data Display/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
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

export default articleCardMeta;
type ArticleCardStory = StoryObj<ArticleCardProps>;

export const Default: ArticleCardStory = {
  args: {},
};

export const WithCategory: ArticleCardStory = {
  args: {
    category: 'Tutorial',
    categoryColor: 'seafoam',
  },
};

export const WithImage: ArticleCardStory = {
  args: {
    image: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f',
    aspectRatio: 'video',
  },
};

export const AsLink: ArticleCardStory = {
  args: {
    href: '#',
    excerpt: 'Click this card to navigate to the article page',
  },
};

export const Small: ArticleCardStory = {
  args: {
    size: 'sm',
    title: 'Smaller Card',
    subtitle: 'A more compact card design',
  },
};

export const Large: ArticleCardStory = {
  args: {
    size: 'lg',
    title: 'Featured Article',
    subtitle: 'A larger, more prominent card design for featured content',
    category: 'Featured',
    categoryColor: 'gold',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7',
  },
};

// ProjectCard Stories
export const projectCardMeta: Meta<ProjectCardProps> = {
  title: 'Data Display/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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

export const ProjectDefault: StoryObj<ProjectCardProps> = {
  render: args => <ProjectCard {...args} />,
  args: {},
};

export const ProjectWithMetrics: StoryObj<ProjectCardProps> = {
  render: args => <ProjectCard {...args} />,
  args: {
    metrics: [
      { label: 'Users', value: '25k+' },
      { label: 'Deployments', value: 348 },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '120ms' },
    ],
  },
};

export const ProjectWithImage: StoryObj<ProjectCardProps> = {
  render: args => <ProjectCard {...args} />,
  args: {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    aspectRatio: 'wide',
  },
};

export const ProjectAsLink: StoryObj<ProjectCardProps> = {
  render: args => <ProjectCard {...args} />,
  args: {
    href: '#',
    description: 'Click this card to navigate to the project details page',
  },
};

// FeatureCard Stories
export const featureCardMeta: Meta<FeatureCardProps> = {
  title: 'Data Display/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card',
    },
    variant: {
      control: 'select',
      options: ['default', 'highlight', 'callout'],
      description: 'Visual style variant of the card',
    },
    hover: {
      control: 'select',
      options: ['subtle', 'lift', 'none'],
      description: 'Hover animation style',
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the card content is expanded',
    },
  },
  args: {
    title: 'Feature Title',
    description: 'A brief description of the feature and its benefits',
    size: 'md',
    variant: 'default',
    hover: 'none',
    expanded: false,
  },
};

export const FeatureDefault: StoryObj<FeatureCardProps> = {
  render: args => <FeatureCard {...args} />,
  args: {},
};

export const FeatureWithIcon: StoryObj<FeatureCardProps> = {
  render: args => <FeatureCard {...args} />,
  args: {
    icon: <ExampleIcon />,
  },
};

export const FeatureWithAction: StoryObj<FeatureCardProps> = {
  render: args => <FeatureCard {...args} />,
  args: {
    action: <ExampleActionButton />,
  },
};

export const FeatureExpanded: StoryObj<FeatureCardProps> = {
  render: args => (
    <FeatureCard {...args}>
      <div className="prose">
        <p>
          This is the expanded content of the feature card. It can contain any additional
          information, components, or media related to the feature.
        </p>
        <ul>
          <li>Benefit one of this feature</li>
          <li>Benefit two of this feature</li>
          <li>Benefit three of this feature</li>
        </ul>
      </div>
    </FeatureCard>
  ),
  args: {
    expanded: true,
  },
};

export const FeatureHighlighted: StoryObj<FeatureCardProps> = {
  render: args => <FeatureCard {...args} />,
  args: {
    variant: 'highlight',
    title: 'Highlighted Feature',
    description: 'This feature is highlighted to draw more attention to it',
    icon: <ExampleIcon />,
  },
};

export const FeatureCallout: StoryObj<FeatureCardProps> = {
  render: args => <FeatureCard {...args} />,
  args: {
    variant: 'callout',
    title: 'Important Feature',
    description: 'This feature is presented as a callout for maximum emphasis',
    icon: <ExampleIcon />,
    action: <ExampleActionButton />,
  },
};
