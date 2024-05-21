import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
