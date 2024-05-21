import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPostForm from "./pages/NewPostForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-post" element={<NewPostForm />} />
    </Routes>
  );
};

export default AppRoutes;
