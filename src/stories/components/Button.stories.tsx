import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/registry/extended/button';
import { Mail, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Base variants
export const PrimaryReverse: Story = {
  args: {
    children: 'Primary Reverse',
    variant: 'primary-reverse',
  },
};

export const PrimaryInverse: Story = {
  args: {
    children: 'Primary Inverse',
    variant: 'primary-inverse',
  },
};

export const PrimaryAccent: Story = {
  args: {
    children: 'Primary Accent',
    variant: 'primary-accent',
  },
};

export const PrimaryAccentReverse: Story = {
  args: {
    children: 'Primary Accent Reverse',
    variant: 'primary-accent-reverse',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
  },
};

export const OutlineAccent: Story = {
  args: {
    children: 'Outline Accent',
    variant: 'outline-accent',
  },
};

export const OutlineSubtle: Story = {
  args: {
    children: 'Outline Subtle',
    variant: 'outline-subtle',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// States
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    children: 'Send Email',
    icon: Mail,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next Step',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

export const IconOnly: Story = {
  args: {
    icon: Mail,
    isIconOnly: true,
    'aria-label': 'Send email',
  },
};

// Full Width
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="w-full space-y-4 border-2 border-dashed border-stone-200 p-4">
        <div className="w-full">
          <Story />
        </div>
        <div className="w-full">
          <Button variant="outline-subtle" fullWidth>
            Another Full Width Button
          </Button>
        </div>
        <div className="w-full">
          <Button variant="ghost" fullWidth icon={Mail}>
            Full Width with Icon
          </Button>
        </div>
      </div>
    ),
  ],
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary-reverse',
  },
};

// Button Group Example
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary-reverse">Save</Button>
      <Button variant="outline-subtle">Cancel</Button>
    </div>
  ),
};
