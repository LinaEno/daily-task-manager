import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import theme from 'utils/theme';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import UserAuthContext from 'components/context/UserAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContext>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </PersistGate>
      </ThemeProvider>
    </UserAuthContext>
  </React.StrictMode>
);
