
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./reusable/ScrollToTop.jsx";

function App() {
  return (
    <Router basename="/monexa-test/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
