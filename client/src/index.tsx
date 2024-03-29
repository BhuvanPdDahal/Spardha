import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import App from './App';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';
import { SocketProvider } from './context/SocketProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore({ reducer: reducers });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <App />
      </SocketProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();