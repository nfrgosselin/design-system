import type { Meta, StoryObj } from '@storybook/react';
import {
  Link,
  InlineLink,
  NavLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
} from '@/components/ui/link';
import { Mail, ChevronRight } from 'lucide-react';

const meta = {
  title: 'Components/Link',
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

// Prose Links (for content)
export const ProseLinks: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-4">
      <p className="max-w-md">
        This is a paragraph with an <InlineLink href="#">inline link</InlineLink> in the middle of
        the text. These links are styled to be subtle but noticeable within body content.
      </p>
      <p className="max-w-md">
        Here&apos;s another paragraph with a{' '}
        <InlineLink href="https://example.com">visited external link</InlineLink> to show the
        visited state.
      </p>
    </div>
  ),
};

// Navigation Links
export const NavigationLinks: Story = {
  args: {
    href: '#',
    children: 'Example Link',
  },
  render: () => (
    <div className="space-y-8">
      <div className="flex gap-4">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#" isActive>
          Services
        </NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink href="#" variant="nav-side">
          Settings
        </NavLink>
        <NavLink href="#" variant="nav-side">
          Profile
        </NavLink>
        <NavLink href="#" variant="nav-side-active">
          Security
        </NavLink>
      </div>
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
          Documentation <ChevronRight />
        </Link>
        <Link href="#" variant="standalone-icon-left">
          <Mail /> Contact us
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

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Active State</h3>
        <div className="flex gap-4">
          <NavLink href="#" isActive>
            Active Nav Link
          </NavLink>
          <NavLink href="#" variant="nav-side" isActive>
            Active Side Nav
          </NavLink>
        </div>
      </div>
    </div>
  ),
};
