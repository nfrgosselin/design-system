import type { StoryObj } from '@storybook/react';
import { FeatureCard, type FeatureCardProps } from '../../../components/data-display/card';

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

const ExampleActionButton = () => (
  <button className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
    Learn More
  </button>
);

const meta = {
  title: 'Data Display/FeatureCard',
  component: FeatureCard,
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

export default meta;
type Story = StoryObj<FeatureCardProps>;

export const Default: Story = {
  args: {},
};

export const WithAction: Story = {
  args: {
    action: <ExampleActionButton />,
  },
};

export const Expanded: Story = {
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

export const Highlighted: Story = {
  args: {
    variant: 'highlight',
    title: 'Highlighted Feature',
    description: 'This feature is highlighted to draw more attention to it',
    icon: <ExampleIcon />,
  },
};

export const Callout: Story = {
  args: {
    variant: 'callout',
    title: 'Important Feature',
    description: 'This feature is presented as a callout for maximum emphasis',
    icon: <ExampleIcon />,
    action: <ExampleActionButton />,
  },
};
