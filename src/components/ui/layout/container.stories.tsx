import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="w-full min-h-[400px] bg-stone-100/50 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

const DemoContent = ({ label }: { label: string }) => (
  <div className="w-full rounded-lg border-2 border-dashed border-stone-200 bg-white p-8">
    <div className="flex min-h-32 items-center justify-center">
      <span className="text-base font-medium text-stone-600">{label}</span>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    children: <DemoContent label="Default Container (1280px)" />,
  },
};

export const Content: Story = {
  args: {
    size: 'content',
    children: <DemoContent label="Content Container (768px)" />,
  },
};

export const Form: Story = {
  args: {
    size: 'form',
    children: <DemoContent label="Form Container (640px)" />,
  },
};

export const AsMain: Story = {
  args: {
    as: 'main',
    children: <DemoContent label="Rendered as <main> element" />,
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: <DemoContent label="Rendered as <section> element" />,
  },
};
