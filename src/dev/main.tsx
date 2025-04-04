import React from 'react';
import ReactDOM from 'react-dom/client';
import { Workbench } from '@/dev/workbench';
import { ThemeProvider } from '@/components/ThemeProvider';

// Import global styles
import '@/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme="light">
      <Workbench />
    </ThemeProvider>
  </React.StrictMode>
);
