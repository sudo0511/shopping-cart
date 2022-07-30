import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import About from "./components/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
