import React from 'react';

import Popup from './components/Popup';
import AppProvider from './providers';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Popup />
    </AppProvider>
  );
};

export default App;
