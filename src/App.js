import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AppProvider } from './context/AppContext';
import { LoginProvider } from './context/LoginContext';

import './style.css';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
