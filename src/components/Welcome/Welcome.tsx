import React from "react";
import Headers from "../header/header";
import Cards from "../cards/cards";
import "./styles.css";
import Footer from "../footer/footer";
import Banner from "../banner/banner";

function Welcome() {
  return (
    <div>
      <Headers />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default Welcome;
