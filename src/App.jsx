import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Home from "./pages/Home";
import HireForm from "./components/HireForm";
import "./App.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <div className="fade-wrapper">
          <SplashScreen />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HireForm" element={<HireForm />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
