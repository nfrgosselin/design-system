import { ThemeProvider } from '../../../components/ThemeProvider';
import { usePrimaryColor } from '../../../components/ThemeProvider/hooks';
import '../../../styles/styles.css';

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A provider component that manages theme and primary color selection for the design system.',
      },
    },
  },
};

export default meta;

// Self-contained component that demonstrates primaryColor functionality
function ColorDemo() {
  const { primaryColor, setPrimaryColor } = usePrimaryColor();

  return (
    <div className="w-[600px] bg-white p-8 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Primary Color Selection</h2>
        <p className="text-gray-600">Click a button to change the primary color</p>
        <div className="flex gap-4">
          {(['ocean', 'sunset', 'sun', 'marine'] as const).map(color => (
            <button
              key={color}
              onClick={() => setPrimaryColor(color)}
              className={`
                px-4 py-2 rounded-md font-medium transition-colors
                ${
                  color === primaryColor
                    ? 'bg-primary text-white'
                    : 'border border-gray-200 hover:border-primary'
                }
              `}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Preview</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Primary Button
            </button>
            <button className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-16 bg-primary/10 rounded-md" />
            <div className="h-16 bg-primary/25 rounded-md" />
            <div className="h-16 bg-primary/50 rounded-md" />
            <div className="h-16 bg-primary rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fully self-contained stories that don't rely on Storybook's args or URL parameters
export const Default = {
  render: () => (
    <ThemeProvider theme="light">
      <ColorDemo />
    </ThemeProvider>
  ),
};

export const WithDarkTheme = {
  render: () => (
    <div className="p-4 bg-gray-900 rounded-lg">
      <ThemeProvider theme="dark">
        <ColorDemo />
      </ThemeProvider>
    </div>
  ),
};

// Standalone component for custom color demo
// This component is kept as a reference but not currently used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CustomColorDemo() {
  return (
    <div className="w-[600px] bg-white text-gray-900 p-8 rounded-lg border border-gray-200">
      <div className="mb-4 py-2 px-4 bg-purple-100 text-purple-800 rounded-md">
        Using custom color: purple
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Color Example</h2>
        <p className="text-gray-600">This example uses a custom purple as the primary color</p>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-medium">Preview</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
                Secondary Button
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-16 bg-primary/10 rounded-md" />
              <div className="h-16 bg-primary/25 rounded-md" />
              <div className="h-16 bg-primary/50 rounded-md" />
              <div className="h-16 bg-primary rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const WithCustomTokens = {
  render: () => (
    <ThemeProvider
      theme="light"
      customTokens={{
        '--ds-primary': 'purple',
        '--ds-ring': 'purple',
      }}
    >
      <div className="mb-4 py-2 px-4 bg-purple-100 text-purple-800 rounded-md">
        Using custom color: purple
      </div>
      <ColorDemo />
    </ThemeProvider>
  ),
};
