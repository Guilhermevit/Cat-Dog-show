import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome/Welcome";

render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Welcome />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
