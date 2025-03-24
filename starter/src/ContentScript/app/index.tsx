import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const initReactApp = () => {
  const container = document.createElement('div');

  container.id = 'simplify-extension-root';

  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
};
