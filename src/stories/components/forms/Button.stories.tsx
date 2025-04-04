import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/forms/button';
import { Mail, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: [
        'solid',
        'outline',
        'brand',
        'brand-outline',
        'accent',
        'outline-accent',
        'outline-subtle',
        'ghost',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Base variants
export const Solid: Story = {
  name: 'Solid',
  args: {
    children: 'Solid Button',
    variant: 'solid',
  },
};

export const Outline: Story = {
  name: 'Outline',
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Brand: Story = {
  name: 'Brand',
  args: {
    children: 'Brand Button',
    variant: 'brand',
  },
};

export const BrandOutline: Story = {
  name: 'Brand Outline',
  args: {
    children: 'Brand Outline',
    variant: 'brand-outline',
  },
};

export const Accent: Story = {
  name: 'Accent',
  args: {
    children: 'Accent Button',
    variant: 'accent',
  },
};

export const OutlineAccent: Story = {
  name: 'Outline Accent',
  args: {
    children: 'Outline Accent',
    variant: 'outline-accent',
  },
};

export const OutlineSubtle: Story = {
  name: 'Outline Subtle',
  args: {
    children: 'Outline Subtle',
    variant: 'outline-subtle',
  },
};

export const Ghost: Story = {
  name: 'Ghost',
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

// Sizes
export const Small: Story = {
  name: 'Small',
  args: {
    children: 'Small Button',
    variant: 'solid',
    size: 'sm',
  },
};

export const Medium: Story = {
  name: 'Medium',
  args: {
    children: 'Medium Button',
    variant: 'solid',
    size: 'md',
  },
};

export const Large: Story = {
  name: 'Large',
  args: {
    children: 'Large Button',
    variant: 'solid',
    size: 'lg',
  },
};

// States
export const Loading: Story = {
  name: 'Loading',
  args: {
    children: 'Loading Button',
    variant: 'solid',
    isLoading: true,
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    children: 'Disabled Button',
    variant: 'solid',
    disabled: true,
  },
};

// With Icons
export const WithLeftIcon: Story = {
  name: 'With Left Icon',
  args: {
    children: 'Send Email',
    variant: 'solid',
    icon: Mail,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  name: 'With Right Icon',
  args: {
    children: 'Next Step',
    variant: 'solid',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

export const IconOnly: Story = {
  name: 'Icon Only',
  args: {
    variant: 'solid',
    icon: Mail,
    isIconOnly: true,
    'aria-label': 'Send email',
  },
};

// Full Width
export const FullWidth: Story = {
  name: 'Full Width',
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
    variant: 'solid',
    fullWidth: true,
  },
};

// Button Group Example
export const ButtonGroup: Story = {
  name: 'Button Group',
  render: () => (
    <div className="flex gap-2">
      <Button variant="solid">Save</Button>
      <Button variant="outline-subtle">Cancel</Button>
    </div>
  ),
};
