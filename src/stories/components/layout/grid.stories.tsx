import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@/components/layout/grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible grid system that supports different column configurations and responsive behavior.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-full max-w-[1200px] p-4 bg-white rounded-lg">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex min-h-32 w-full items-center justify-center rounded-lg bg-stone-100 border border-stone-200 p-6 shadow-sm">
    <span className="text-base font-medium text-stone-600">{children || 'Grid Item'}</span>
  </div>
);

export const Default: Story = {
  args: {
    cols: 2,
    gap: 'default',
    children: (
      <>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'default',
    children: (
      <>
        <GridItem>Column 1</GridItem>
        <GridItem>Column 2</GridItem>
        <GridItem>Column 3</GridItem>
        <GridItem>Column 4</GridItem>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 'default',
    children: (
      <>
        <GridItem>Column 1</GridItem>
        <GridItem>Column 2</GridItem>
        <GridItem>Column 3</GridItem>
        <GridItem>Column 4</GridItem>
        <GridItem>Column 5</GridItem>
        <GridItem>Column 6</GridItem>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'default',
    children: (
      <>
        <GridItem>Column 1</GridItem>
        <GridItem>Column 2</GridItem>
        <GridItem>Column 3</GridItem>
        <GridItem>Column 4</GridItem>
        <GridItem>Column 5</GridItem>
        <GridItem>Column 6</GridItem>
        <GridItem>Column 7</GridItem>
        <GridItem>Column 8</GridItem>
      </>
    ),
  },
};

export const WithGaps: Story = {
  args: {
    cols: 3,
    gap: 'relaxed',
    children: (
      <>
        <GridItem>Relaxed Gap 1</GridItem>
        <GridItem>Relaxed Gap 2</GridItem>
        <GridItem>Relaxed Gap 3</GridItem>
        <GridItem>Relaxed Gap 4</GridItem>
        <GridItem>Relaxed Gap 5</GridItem>
        <GridItem>Relaxed Gap 6</GridItem>
      </>
    ),
  },
};

export const ResponsiveCollapse: Story = {
  args: {
    cols: 3,
    gap: 'default',
    collapseBelow: 'lg',
    children: (
      <>
        <GridItem>Responsive 1</GridItem>
        <GridItem>Responsive 2</GridItem>
        <GridItem>Responsive 3</GridItem>
        <GridItem>Responsive 4</GridItem>
        <GridItem>Responsive 5</GridItem>
        <GridItem>Responsive 6</GridItem>
      </>
    ),
  },
};
