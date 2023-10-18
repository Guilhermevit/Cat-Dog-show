import React from "react";
import Headers from "../header/header";
import { Routes, Route } from "react-router-dom";
import Cards from "../cards/cards";
import Dogs from "../dog/dogs";
import Cats from "../cat/cats";
import "./styles.css";
import Footer from "../footer/footer";
import Banner from "../banner/banner";
import Snake from "../snake/snake";
import Shopper from "../shop/shop";

function Welcome() {
  return (
    <div>
      <Headers />
      <Banner />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cachorro" element={<Dogs />} />
        <Route path="/gatos" element={<Cats />} />

        <Route path="/reptil" element={<Snake />} />
        <Route path="/carrinho" element={<Shopper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Welcome;
