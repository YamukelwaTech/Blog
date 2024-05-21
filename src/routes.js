import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Blog from "./components/blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-post" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
