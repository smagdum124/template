import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure your CSS file exists and is correct
import App from './App';  // Make sure your App component is correct

// Render the app to the 'root' div element in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode helps in detecting potential problems in the app during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals is optional, can be used to measure performance in your app
// Uncomment this line if you want to log or send web vitals to analytics
// reportWebVitals(console.log);
