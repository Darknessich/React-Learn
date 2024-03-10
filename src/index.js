import React from 'react';
import ReactDOM from 'react-dom/client';
import {results, getImages} from "./data.js"
import App from '/src/components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App results={results} getImages={getImages}/>
  </React.StrictMode>
);