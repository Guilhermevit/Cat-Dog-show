import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import jsonData from "../cards/produtos.json";

import "./header.css";

export default function Headers() {
  const [buttonStyle, setButtonStyle] = useState({
    color: "#7c67079b",
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const customButtonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "white",
  };

  useEffect(() => {
    if (searchInput.length > 2) {
      // Filtrar produtos com base na entrada de pesquisa
      const products = jsonData.Produtos; // Acessar a matriz de produtos dentro do objeto jsonData
      const filteredProducts = products.filter((product) =>
        product.nome.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/home">
            <img
              src="./logo.jpg"
              alt="Logo da Loja"
              width="200px"
              height="150px"
            />
          </Link>
        </div>
        <div className="pesquisa">
          <TextField
            id="outlined-textarea"
            label="Produtos"
            placeholder="O que seu pet precisa?"
            style={{ width: "50%" }}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button className="lupa">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBCZ3_Wo5bKmIWQSTTN8TRTMyl2qp6nosRA&usqp=CAU"
              alt="lupinha"
              width="40px"
            />
          </Button>

          <Button className="shopping">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqeQKC741sH_vTY7iY5_N2iXvO3SERNX4qg&usqp=CAU"
              alt="carrinho_de_compra"
              width="45px"
            />
          </Button>
        </div>
      </header>{" "}
      <div className="procura">
        {searchResults.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imagem} alt={product.nome} />
            <div className="card-info">
              <h3>{product.nome}</h3>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="menu">
        <div>
          <Link to="/home">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Home
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/cachorro">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Cachorro
            </Button>{" "}
          </Link>
        </div>
        <div>
          <Link to="/gatos">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Gato
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/reptil">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Répteis e Insetos
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/humano">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Humanos
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/mensagem">
            <Button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
              onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
              size="small"
              variant="text"
            >
              Nos deixe um card
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
