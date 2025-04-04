import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/components/utils/icon';
import { Mail, AlertCircle, CheckCircle2, InfoIcon, AlertTriangle } from 'lucide-react';

const meta = {
  title: 'Components/Utils/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

// Sizes
export const Small: Story = {
  args: {
    icon: Mail,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    icon: Mail,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    icon: Mail,
    size: 'lg',
  },
};

// Colors
export const Colors: Story = {
  decorators: [
    () => (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Icon icon={Mail} color="default" />
          <span className="text-sm">Default (text-foreground)</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={Mail} color="muted" />
          <span className="text-sm">Muted (text-muted-foreground)</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={Mail} color="brand" />
          <span className="text-sm">Brand</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={CheckCircle2} color="success" />
          <span className="text-sm">Success</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={AlertTriangle} color="warning" />
          <span className="text-sm">Warning</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={AlertCircle} color="error" />
          <span className="text-sm">Error</span>
        </div>
        <div className="flex items-center gap-4">
          <Icon icon={InfoIcon} color="info" />
          <span className="text-sm">Info</span>
        </div>
      </div>
    ),
  ],
};

// All Sizes Example
export const AllSizes: Story = {
  decorators: [
    () => (
      <div className="flex items-end gap-4">
        <Icon icon={Mail} size="sm" />
        <Icon icon={Mail} size="md" />
        <Icon icon={Mail} size="lg" />
      </div>
    ),
  ],
};
