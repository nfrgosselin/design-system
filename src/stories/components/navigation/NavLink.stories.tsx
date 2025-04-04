import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from '@/components/navigation/NavLink';

const meta = {
  title: 'Components/Navigation/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base NavLink Stories
export const Default: Story = {
  args: {
    href: '#',
    children: 'Default NavLink',
  },
};

// Variants
export const Variants: Story = {
  args: {
    href: '#',
    children: 'Navigation Link',
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Default Navigation */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Default Navigation</h3>
        <div className="flex gap-8">
          <NavLink href="#" isActive>
            Active Nav
          </NavLink>
          <NavLink href="#">Default Nav</NavLink>
          <NavLink href="#" variant="muted">
            Muted Nav
          </NavLink>
        </div>
      </div>

      {/* Size Variants */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Size Variants</h3>
        <div className="flex gap-8">
          <NavLink href="#" size="sm">
            Small Nav
          </NavLink>
          <NavLink href="#" size="base">
            Base Nav
          </NavLink>
        </div>
      </div>

      {/* Transform & Underline */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Transform & Underline</h3>
        <div className="flex gap-8">
          <NavLink href="#" transform="uppercase">
            Uppercase Nav
          </NavLink>
          <NavLink href="#" transform="none">
            No Transform
          </NavLink>
          <NavLink href="#" underline>
            Underlined Nav
          </NavLink>
        </div>
      </div>
    </div>
  ),
};

// Example Navigation Bar
export const NavigationBar: Story = {
  args: {
    href: '#',
    children: 'Navigation Link',
  },
  render: () => (
    <nav className="flex gap-8 border-b border-border px-8 py-4">
      <NavLink href="#" isActive>
        Home
      </NavLink>
      <NavLink href="#">Products</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#" variant="muted">
        Contact
      </NavLink>
    </nav>
  ),
};

// Example Side Navigation
export const SideNavigation: Story = {
  args: {
    href: '#',
    children: 'Navigation Link',
  },
  render: () => (
    <nav className="w-48 space-y-2 rounded-lg border border-border p-4">
      <NavLink href="#" isActive size="sm">
        Dashboard
      </NavLink>
      <NavLink href="#" size="sm">
        Settings
      </NavLink>
      <NavLink href="#" size="sm">
        Profile
      </NavLink>
      <NavLink href="#" size="sm" variant="muted">
        Help
      </NavLink>
    </nav>
  ),
};

// States
export const States: Story = {
  args: {
    href: '#',
    children: 'Navigation Link',
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">States</h3>
        <div className="flex gap-4">
          <NavLink href="#" disabled>
            Disabled Link
          </NavLink>
          <NavLink href="#" isLoading>
            Loading Link
          </NavLink>
          <NavLink href="https://example.com">External Link</NavLink>
        </div>
      </div>
    </div>
  ),
};
