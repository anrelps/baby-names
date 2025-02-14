import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './styles.css';

import App from './App';
import { AppStateProvider } from './providers/app-state';
import { NamesProvider } from './providers/names';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
   <React.StrictMode>
      <NamesProvider>
         <AppStateProvider>
            <App />
         </AppStateProvider>
      </NamesProvider>
   </React.StrictMode>
);
