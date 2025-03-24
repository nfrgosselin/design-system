import { addons } from '@storybook/manager-api';

// Configure Storybook's UI manager
addons.setConfig({
  // Critical for showing the hierarchical structure in the sidebar
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
    renderLabel: ({ name }) => name,
  },
  // Navigation settings
  enableShortcuts: true,
  // Control toolbar visibility
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
