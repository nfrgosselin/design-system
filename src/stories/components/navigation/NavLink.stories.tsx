import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from '@/components/navigation/NavItem';

const meta = {
  title: 'Navigation/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    href: '#',
    isActive: true,
    children: 'Active Nav',
  },
};

export const Default: Story = {
  render: () => (
    <div className="space-x-4">
      <NavItem href="#">Default Nav</NavItem>
      <NavItem href="#" textVariant="muted">
        Muted Nav
      </NavItem>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-x-4">
      <NavItem href="#" size="sm">
        Small Nav
      </NavItem>
      <NavItem href="#" size="base">
        Base Nav
      </NavItem>
    </div>
  ),
};

export const TextTransforms: Story = {
  render: () => (
    <div className="space-x-4">
      <NavItem href="#" transform="uppercase">
        Uppercase Nav
      </NavItem>
      <NavItem href="#" transform="none">
        Normal Nav
      </NavItem>
      <NavItem href="#" underline>
        Underlined Nav
      </NavItem>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-x-4">
      <NavItem href="#" icon="settings">
        With Start Icon
      </NavItem>
      <NavItem href="#" icon="arrowRight" iconPosition="end">
        With End Icon
      </NavItem>
      <NavItem href="#" icon="settings" iconOnly>
        <span className="sr-only">Settings</span>
      </NavItem>
    </div>
  ),
};

export const TopNavigation: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
      <NavItem href="#" isActive>
        Home
      </NavItem>
      <NavItem href="#">Products</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#" textVariant="muted">
        Contact
      </NavItem>
    </div>
  ),
};

export const SideNavigation: Story = {
  render: () => (
    <div className="w-64 p-4 bg-white rounded-lg">
      <div className="space-y-1">
        <NavItem href="#" variant="side" isActive icon="page">
          Dashboard
        </NavItem>
        <NavItem href="#" variant="side" icon="user">
          Profile
        </NavItem>
        <NavItem href="#" variant="side" icon="settings">
          Settings
        </NavItem>
        <NavItem href="#" variant="side" icon="help">
          Help
        </NavItem>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-x-4">
      <NavItem href="#" disabled>
        Disabled Nav
      </NavItem>
      <NavItem href="#" isLoading>
        Loading Nav
      </NavItem>
      <NavItem href="https://example.com">External Link</NavItem>
    </div>
  ),
};
