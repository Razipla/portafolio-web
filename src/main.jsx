/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/

// node modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

// styles
import './index.css';
import 'lenis/dist/lenis.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
