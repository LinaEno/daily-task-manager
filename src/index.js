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
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCyxHIH5yyCBsrssl9al46wXw2j2wqhOBs',
  authDomain: 'task-manager-f6855.firebaseapp.com',
  projectId: 'task-manager-f6855',
  storageBucket: 'task-manager-f6855.appspot.com',
  messagingSenderId: '40553423896',
  appId: '1:40553423896:web:530044a9763e393a76cf6d',
};

firebase.initializeApp(firebaseConfig);

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
