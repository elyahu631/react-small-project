import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RegisterAndLoginContextProvider from "./Context/RegisterAndLoginContextProvider";
import NotesContextProvider from "./Context/NotesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RegisterAndLoginContextProvider>
    <NotesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotesContextProvider>
  </RegisterAndLoginContextProvider>
);
