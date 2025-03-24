import React from 'react';

import { GlobalStyle } from '../styles/global';

type AppProviderProps = React.PropsWithChildren;

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default AppProvider;
