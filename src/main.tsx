import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { ModalState } from "./context/ModaleContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalState>
        <App />
      </ModalState>
    </BrowserRouter>
  </React.StrictMode>
);
