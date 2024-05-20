import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header"; 
import "./styles.css";
import Home from "./pages/Home";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
