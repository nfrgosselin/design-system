import type { Meta, StoryObj } from '@storybook/react';
import {
  Code,
  ColoredText,
  Emphasis,
  Strong,
  FootnoteText,
  FootnoteItem,
} from '@/components/typography';
import { Link } from '@/components/navigation/link';

const meta = {
  title: 'Components/Typography/Inline',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Collection of inline typography components for text formatting and emphasis.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant for ColoredText component',
    },
    subtle: {
      control: 'boolean',
      description: 'Whether to show ColoredText with a subtle background',
    },
    number: {
      control: 'number',
      description: 'Reference number for FootnoteText and FootnoteItem components',
    },
    isExternal: {
      control: 'boolean',
      description: 'Whether the link points to an external resource',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta;

export default meta;

export const Links: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Link href="#">Internal link example</Link>
      </div>
      <div>
        <Link href="https://example.com" isExternal>
          External link example
        </Link>
      </div>
    </div>
  ),
};

export const TextEmphasis: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Emphasis>Emphasized text using italics</Emphasis>
      </div>
      <div>
        <Strong>Strong text using bold</Strong>
      </div>
      <div>
        <Code>Code text using monospace</Code>
      </div>
    </div>
  ),
};

export const ColoredTextExamples: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <ColoredText color="primary">Primary colored text</ColoredText>
      </div>
      <div>
        <ColoredText color="success">Success message</ColoredText>
      </div>
      <div>
        <ColoredText color="warning">Warning message</ColoredText>
      </div>
      <div>
        <ColoredText color="error">Error message</ColoredText>
      </div>
      <div>
        <ColoredText color="info">Informational text</ColoredText>
      </div>
      <div>
        <ColoredText color="primary" subtle>
          Subtle primary text with background
        </ColoredText>
      </div>
    </div>
  ),
};

export const FootnoteExamples: StoryObj = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <p className="font-serif text-lg">
        This is a paragraph with a footnote reference
        <FootnoteText number={1} /> and here&apos;s another one
        <FootnoteText number={2} />.
      </p>
      <div className="border-t border-stone-200 pt-8">
        <FootnoteItem number={1}>
          First footnote with a detailed explanation. This shows how footnotes appear at the bottom
          of the content.
        </FootnoteItem>
        <FootnoteItem number={2}>
          Second footnote demonstrating multiple footnote items in sequence.
        </FootnoteItem>
      </div>
    </div>
  ),
};

export const CompleteExample: StoryObj = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <p className="font-serif text-lg">
        The <Emphasis>Design System</Emphasis> includes several components like <Code>Button</Code>{' '}
        and <Code>Input</Code>. For more information, check out our{' '}
        <Link href="https://example.com/docs" isExternal>
          documentation
        </Link>
        .
      </p>
      <p className="font-serif text-lg">
        <Strong>Important note:</Strong> Make sure to follow our <Link href="#">style guide</Link>{' '}
        when using these components.
      </p>
      <p className="font-serif text-lg">
        You can use <ColoredText color="primary">colored text</ColoredText> for emphasis, or{' '}
        <ColoredText color="error" subtle>
          subtle backgrounds
        </ColoredText>{' '}
        for additional visual hierarchy. Add footnotes
        <FootnoteText number={1} /> when needed.
      </p>
      <div className="border-t border-stone-200 pt-4">
        <FootnoteItem number={1}>
          Footnotes are perfect for adding additional context without disrupting the main content
          flow.
        </FootnoteItem>
      </div>
    </div>
  ),
};
