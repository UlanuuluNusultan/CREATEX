import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./i18n";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
     <I18nextProvider i18n={i18n}>
         <App />
     </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
