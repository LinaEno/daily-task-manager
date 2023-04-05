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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
