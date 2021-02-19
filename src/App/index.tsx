import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <ToastProvider>
        <Routes />
        <GlobalStyle />
      </ToastProvider>
    </>
  );
};

export default App;
