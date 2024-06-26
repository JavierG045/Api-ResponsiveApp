import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./screenss/Home";
import SearchPage from "./screenss/SearchPage";
import VolleyballNews from "./screenss/VolleyballNews";
import VoleyPics from "./screenss/VoleyPics";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/volleyball-news" element={<VolleyballNews />} />
        <Route path="/voley-pics" element={<VoleyPics />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
