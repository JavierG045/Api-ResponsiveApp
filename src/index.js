import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
      .then(function (registration) {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(function (error) {
        console.log('Registro del Service Worker fallido:', error);
      });
  });
}