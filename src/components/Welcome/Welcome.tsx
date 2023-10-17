import React, { useState } from "react";
import Headers from "../header/header";
import "./styles.css";
import Cards from "../cards/cards";

function Welcome() {
  return (
    <>
      <div>
        <Headers />
        <Cards />
      </div>
    </>
  );
}

export default Welcome;
