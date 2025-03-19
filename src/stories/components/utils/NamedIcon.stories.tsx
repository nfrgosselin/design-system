import type { Meta, StoryObj } from '@storybook/react';
import { NamedIcon, Icons, type IconName } from '../../../components/utils/namedIcon';

const meta = {
  title: 'Components/Utils/NamedIcon',
  component: NamedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NamedIcon>;

export default meta;
type Story = StoryObj<typeof NamedIcon>;

// Sizes
export const Small: Story = {
  args: {
    name: 'user',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    name: 'user',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    name: 'user',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'user',
    size: 'xl',
  },
};

// All Sizes Example
export const AllSizes: Story = {
  decorators: [
    () => (
      <div className="flex items-end gap-4">
        <NamedIcon name="user" size="sm" />
        <NamedIcon name="user" size="md" />
        <NamedIcon name="user" size="lg" />
        <NamedIcon name="user" size="xl" />
      </div>
    ),
  ],
};

// Common Icons Gallery
export const IconGallery: Story = {
  decorators: [
    () => (
      <div className="grid grid-cols-4 gap-6 p-4">
        {Object.keys(Icons).map(iconName => (
          <div key={iconName} className="flex flex-col items-center">
            <NamedIcon name={iconName as IconName} size="md" />
            <span className="mt-2 text-xs text-stone-500">{iconName}</span>
          </div>
        ))}
      </div>
    ),
  ],
};

// Custom Icons
export const CustomIcons: Story = {
  decorators: [
    () => (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <NamedIcon name="gitHub" size="md" />
          <span className="text-sm">GitHub</span>
        </div>
        <div className="flex items-center gap-4">
          <NamedIcon name="twitter" size="md" />
          <span className="text-sm">Twitter</span>
        </div>
      </div>
    ),
  ],
};

// Usage with class names
export const WithClassNames: Story = {
  args: {
    name: 'check',
    size: 'lg',
    className: 'bg-green-100 p-2 rounded-full text-green-600',
  },
};
