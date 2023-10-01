import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { IntlProvider } from 'react-intl';

let userLocale = navigator.language || navigator.userLanguage;
if (userLocale.startsWith('es')) {
  userLocale = 'es-ES';
}
else {
  userLocale = 'en-US';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLocale} messages={userLocale === 'es-ES' ? localeEsMessages : localeEnMessages}>
    <App />
  </IntlProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
