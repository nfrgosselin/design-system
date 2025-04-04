import type { Meta, StoryObj } from '@storybook/react';
import {
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
} from '@/components/navigation/link';
import { Mail, ChevronRight } from 'lucide-react';

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base Link Stories
export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
};

// Inline Links (for content)
export const InlineLinks: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="prose">
      <p className="font-serif">
        This is a serif paragraph with an <InlineLink href="#">inline link</InlineLink> in the
        middle of the text. These links inherit the font while maintaining proper text rhythm.
      </p>
      <p className="font-sans">
        Here&apos;s a sans-serif paragraph with a{' '}
        <InlineLink href="https://google.com">visited external link</InlineLink> to show the visited
        state in sunset color.
      </p>
      <p className="font-mono">
        This is a monospace paragraph with an <InlineLink href="#">inline link</InlineLink> that
        inherits the monospace font.
      </p>
    </div>
  ),
};

// Utility Links
export const UtilityAndMetadata: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <UtilityLink href="#">Privacy Policy</UtilityLink>
        <UtilityLink href="#">Terms of Service</UtilityLink>
      </div>
      <div className="flex gap-4">
        <MetadataLink href="#">Published on Jan 1, 2024</MetadataLink>
        <MetadataLink href="#">5 min read</MetadataLink>
      </div>
    </div>
  ),
};

// Standalone Links
export const StandaloneLinks: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Link href="#" variant="standalone">
          Learn more
        </Link>
        <Link href="#" variant="standalone-icon-right">
          Documentation <ChevronRight className="h-4 w-4" />
        </Link>
        <Link href="#" variant="standalone-icon-left">
          <Mail className="h-4 w-4" /> Contact us
        </Link>
      </div>
    </div>
  ),
};

// Button-style Links
export const ButtonLinks: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <ButtonLink href="#">Primary Button</ButtonLink>
        <Link href="#" variant="button-outline">
          Secondary Button
        </Link>
        <Link href="#" variant="button-accent">
          Accent Button
        </Link>
      </div>
    </div>
  ),
};

// Breadcrumb Links
export const BreadcrumbExample: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="flex items-center gap-2">
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
      <ChevronRight className="h-4 w-4 text-stone-400" />
      <BreadcrumbLink href="#">Products</BreadcrumbLink>
      <ChevronRight className="h-4 w-4 text-stone-400" />
      <BreadcrumbLink href="#">Categories</BreadcrumbLink>
    </div>
  ),
};

// States
export const States: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Loading State</h3>
        <div className="flex gap-4">
          <Link href="#" isLoading>
            Loading Link
          </Link>
          <ButtonLink href="#" isLoading>
            Loading Button
          </ButtonLink>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled State</h3>
        <div className="flex gap-4">
          <Link href="#" disabled>
            Disabled Link
          </Link>
          <ButtonLink href="#" disabled>
            Disabled Button
          </ButtonLink>
        </div>
      </div>
    </div>
  ),
};
