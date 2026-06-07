import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Prerendered pages ship full HTML inside #root — hydrate it instead of
// re-rendering from scratch (createRoot tears down the server DOM and
// rebuilds it, which shifts the footer and fails CLS). Dev serves an
// empty #root, so fall back to a normal client render there.
// firstElementChild (not hasChildNodes) so a stray comment/whitespace node
// injected by a CDN can't route an empty shell into hydrateRoot.
if (rootElement.firstElementChild !== null) {
  // A recoverable hydration error means React threw away the prerendered DOM
  // and re-rendered — which reintroduces the footer-CLS bug silently. Keep this
  // warning so any future mismatch is visible in the console.
  ReactDOM.hydrateRoot(rootElement, app, {
    onRecoverableError: (err: unknown, errorInfo: { componentStack?: string }) => {
      console.warn('Hydration mismatch (CLS risk):', (err as Error)?.message, errorInfo?.componentStack?.split('\n').slice(0, 4).join(' '));
    },
  });
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
