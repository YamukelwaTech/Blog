import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import NewPostForm from "./pages/NewPostForm";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPostForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
