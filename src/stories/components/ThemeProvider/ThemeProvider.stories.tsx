import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from '../../../components/ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

function DemoComponent() {
  const { theme, isDark, setTheme } = useTheme();
  return (
    <div className="p-4 rounded border border-ds-border bg-ds-paper">
      <div className="space-y-4">
        <div>
          <div className="font-medium">Current Theme:</div>
          <div className="text-ds-text">{theme}</div>
        </div>
        <div>
          <div className="font-medium">Dark Mode:</div>
          <div className="text-ds-text">{isDark ? 'Yes' : 'No'}</div>
        </div>
        <div className="space-x-2">
          <button
            className="px-3 py-1 rounded bg-ds-primary text-white"
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className="px-3 py-1 rounded bg-ds-primary text-white"
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
          <button
            className="px-3 py-1 rounded bg-ds-primary text-white"
            onClick={() => setTheme('white')}
          >
            White
          </button>
          <button
            className="px-3 py-1 rounded bg-ds-primary text-white"
            onClick={() => setTheme('system')}
          >
            System
          </button>
        </div>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <DemoComponent />
    </ThemeProvider>
  ),
};

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider theme="light">
      <DemoComponent />
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider theme="dark">
      <DemoComponent />
    </ThemeProvider>
  ),
};

export const WhiteTheme: Story = {
  render: () => (
    <ThemeProvider theme="white">
      <DemoComponent />
    </ThemeProvider>
  ),
};
