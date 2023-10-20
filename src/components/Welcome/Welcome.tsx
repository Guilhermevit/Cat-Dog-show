import React from "react";
import Headers from "../header/header"; // Importa o componente de cabeçalho
import Cards from "../cards/cards"; // Importa o componente de cartões
import "./styles.css"; // Importa estilos CSS
import Footer from "../footer/footer"; // Importa o componente de rodapé
import Banner from "../banner/banner"; // Importa o componente de banner

function Welcome() {
  return (
    <div>
      <Headers /> {/* Renderiza o componente de cabeçalho */}
      <Banner /> {/* Renderiza o componente de banner */}
      <Cards /> {/* Renderiza o componente de cartões */}
      <Footer /> {/* Renderiza o componente de rodapé */}
    </div>
  );
}

export default Welcome;
