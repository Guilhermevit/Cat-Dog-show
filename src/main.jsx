import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome/Welcome";
import Dogs from "./components/dog/dogs";
import Cats from "./components/cat/cats";
import Snake from "./components/snake/snake";
import Shopper from "./components/shop/shop";

render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/cachorro" element={<Dogs />} />
        <Route path="/gatos" element={<Cats />} />
        <Route path="/reptil" element={<Snake />} />
        <Route path="/carrinho" element={<Shopper />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
