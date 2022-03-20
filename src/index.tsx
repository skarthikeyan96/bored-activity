import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://ac556364b88245c5b4128f1456f8008b@o1117361.ingest.sentry.io/6268001",
  integrations: [new BrowserTracing()],
  environment: process.env.NODE_ENV,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: process.env.NODE_ENV !== 'development' ? 0.2 : 1.0,
});

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
