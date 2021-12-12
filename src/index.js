import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UsersContextProvider from './context/UserAppContext';

export const UsersContext = React.createContext(null);


ReactDOM.render(
  <React.StrictMode>
    <UsersContextProvider>
    <App />
    </UsersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();