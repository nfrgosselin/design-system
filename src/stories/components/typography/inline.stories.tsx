import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineEmphasis, InlineStrong, InlineCode } from '@/components/typography/inline';
import { InlineLink } from '@/components/navigation/link';

const meta = {
  title: 'Components/Typography/Inline',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

export const Links: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <InlineLink href="#">Internal link example</InlineLink>
      </div>
      <div>
        <InlineLink href="https://example.com" isExternal>
          External link example
        </InlineLink>
      </div>
    </div>
  ),
};

export const TextEmphasis: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <InlineEmphasis>Emphasized text using italics</InlineEmphasis>
      </div>
      <div>
        <InlineStrong>Strong text using bold</InlineStrong>
      </div>
      <div>
        <InlineCode>Code text using monospace</InlineCode>
      </div>
    </div>
  ),
};

export const CompleteExample: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <p className="font-serif text-lg">
        The <InlineEmphasis>Design System</InlineEmphasis> includes several components like{' '}
        <InlineCode>Button</InlineCode> and <InlineCode>Input</InlineCode>. For more information,
        check out our{' '}
        <InlineLink href="https://example.com/docs" isExternal>
          documentation
        </InlineLink>
        .
      </p>
      <p className="font-serif text-lg">
        <InlineStrong>Important note:</InlineStrong> Make sure to follow our{' '}
        <InlineLink href="#">style guide</InlineLink> when using these components.
      </p>
    </div>
  ),
};
