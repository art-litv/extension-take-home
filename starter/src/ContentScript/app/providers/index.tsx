import React from 'react';

import { GlobalStyle } from 'ContentScript/app/styles/global';

type AppProviderProps = React.PropsWithChildren;

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AppProvider;
