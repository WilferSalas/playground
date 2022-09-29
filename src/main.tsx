// @packages
import CssBaseline from '@mui/material/CssBaseline';
import React, { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

// @scripts
import App from './pages/master-page';
import theme from './styles/theme';
import UsersProvider from './context/users/UserProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <UsersProvider>
        <App />
      </UsersProvider>
    </ThemeProvider>
    ,
  </StrictMode>,
);
