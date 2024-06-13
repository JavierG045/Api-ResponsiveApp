import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screenss/Home";
import VolleyballNews from "./screenss/VolleyballNews";
import VoleyPics from "./screenss/VoleyPics";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div id="root">
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/volleyball-news" element={<VolleyballNews />} />
            <Route path="/volleyball-news/:image" element={<VolleyballNews />} />
            <Route path="/voley-pics" element={<VoleyPics />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
