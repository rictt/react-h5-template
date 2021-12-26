import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from '@/i18n'
import { getLanguage } from '@/utils/i18n'

i18n.use(initReactI18next)
    .init({
      resources,
      lng: getLanguage(),
      fallbackLng: "en"
    })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
