import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages/nav";
import GraphPage from "./pages/GraphPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graph/:id" element={<GraphPage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
