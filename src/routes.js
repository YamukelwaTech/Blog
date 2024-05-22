import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/blog";
import Post from "./components/post";
import Newpost from "./components/newpost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/newpost" element={<Newpost />} />
      <Route path="/post/:token" element={<Post />} />
    </Routes>
  );
};

export default AppRoutes;
