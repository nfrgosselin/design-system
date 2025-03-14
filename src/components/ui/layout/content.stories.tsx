import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Content } from './content';

const meta = {
  title: 'Layout/Content',
  component: Content,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A content container with consistent vertical spacing between child elements. Uses design system spacing tokens for consistent vertical rhythm.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-full max-w-[768px] mx-auto bg-white p-8 rounded-lg border border-stone-200">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof Content>;

// Demo content block to visualize spacing
const ContentBlock = ({ label, showSpacing = false }: { label: string; showSpacing?: boolean }) => (
  <div className="relative p-4 rounded-lg bg-stone-50 border border-stone-200">
    <div className="h-24 flex items-center justify-center">
      <span className="text-stone-600 font-medium">{label}</span>
    </div>
    {showSpacing && (
      <div className="absolute -bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-stone-500">
        <div className="h-[32px] w-px bg-stone-300 mb-1"></div>
        <span>Spacing</span>
      </div>
    )}
  </div>
);

export const Default: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <ContentBlock label="Content Block 1" />
        <ContentBlock label="Content Block 2" showSpacing={true} />
        <ContentBlock label="Content Block 3" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default spacing (--spacing-content = 2rem/32px) between content blocks.',
      },
    },
  },
};

export const RelaxedSpacing: Story = {
  args: {
    spacing: 'relaxed',
    children: (
      <>
        <ContentBlock label="Content Block 1" />
        <ContentBlock label="Content Block 2" showSpacing={true} />
        <ContentBlock label="Content Block 3" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Relaxed spacing (--spacing-relaxed = 1.5rem/24px) between content blocks.',
      },
    },
  },
};

export const CompactSpacing: Story = {
  args: {
    spacing: 'compact',
    children: (
      <>
        <ContentBlock label="Content Block 1" />
        <ContentBlock label="Content Block 2" showSpacing={true} />
        <ContentBlock label="Content Block 3" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact spacing (--spacing-compact = 0.5rem/8px) between content blocks.',
      },
    },
  },
};

export const WithCustomContent: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <h2 className="text-2xl font-serif font-bold">Content Title</h2>
        <p className="text-stone-600">
          This is a paragraph of text demonstrating how Content spaces elements vertically. The
          Content component applies{' '}
          <code className="px-1 py-0.5 bg-stone-100 rounded text-sm">--spacing-content</code>{' '}
          (2rem/32px) spacing between child elements by default.
        </p>
        <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
          <p className="text-stone-600">
            This is an example of a content box that might contain important information or a
            callout.
          </p>
        </div>
        <ContentBlock label="Additional Content" />
      </>
    ),
  },
};
