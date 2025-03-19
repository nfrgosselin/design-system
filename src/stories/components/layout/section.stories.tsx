import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '@/components/layout/section';

const meta = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A section component with configurable vertical spacing for dividing content into distinct areas.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-full min-h-[400px] bg-stone-100/50">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

// Demo content to visualize the section
const DemoContent = () => (
  <div className="p-4 rounded-lg bg-white border border-stone-200">
    <div className="w-full h-32 bg-stone-100 rounded flex items-center justify-center">
      <span className="text-stone-600 font-medium">Section Content</span>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    spacing: 'default',
    children: <DemoContent />,
  },
};

export const WithBackground: Story = {
  args: {
    spacing: 'default',
    className: 'bg-stone-100',
    children: <DemoContent />,
  },
};

export const RelaxedSpacing: Story = {
  args: {
    spacing: 'relaxed',
    className: 'bg-stone-50',
    children: <DemoContent />,
  },
};

export const CompactSpacing: Story = {
  args: {
    spacing: 'compact',
    className: 'bg-stone-50',
    children: <DemoContent />,
  },
};

export const WithMultipleChildren: Story = {
  args: {
    spacing: 'default',
    className: 'bg-stone-50',
    children: (
      <>
        <div className="container">
          <DemoContent />
        </div>
        <div className="container mt-6">
          <DemoContent />
        </div>
      </>
    ),
  },
};
