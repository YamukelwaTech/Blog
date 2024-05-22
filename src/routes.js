import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/blog";
import Post from "./components/post";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-post" element={<Blog />} />
      <Route path="/post/:token" element={<Post />} />
    </Routes>
  );
};

export default AppRoutes;
