import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.styles.css';
import 'react-datetime/css/react-datetime.css';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
