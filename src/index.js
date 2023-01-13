import React from 'react';
import {ReactDOM,hydrateRoot,createRoot }from 'react-dom/client';
import { hydrate, render } from "react-dom";
import App from './App';
import "./Styles/index.scss"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App/>);
} else {
  const root = createRoot(rootElement);
  root.render(<App/>);
}

// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(<App />, rootElement);
// } else {
//   ReactDOM.render(<App />, rootElement);
// }