import React from 'react';
import ReactDOM from 'react-dom/client';
import { Workbench } from '@/dev/workbench';

// Import global styles
import '@/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Workbench />
  </React.StrictMode>
);
