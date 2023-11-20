import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';
import EpaycoPrueba from "./api/epaycoprueba.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <EpaycoPrueba />
    </BrowserRouter>
  </StrictMode>
);
