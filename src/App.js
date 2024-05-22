import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/navbar";
import { GlobalStateProvider } from "./GlobalStateContext"; 

const App = () => {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </GlobalStateProvider>
  );
};

export default App;
