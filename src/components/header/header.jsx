import React from "react";
import { Link } from "react-router-dom";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Headers() {
  return (
    <header>
      <div className="logo">
        <Link to="/home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrcZW0E0Zkq3d_6IYjPcrRyvbDZSy0Ug5cA&usqp=CAU"
            alt="Logo da Loja"
          />
        </Link>
        <TextField
          id="outlined-textarea"
          label="Produtos"
          placeholder="o que seu pet precisa?"
          style={{ width: "400px" }}
        />
      </div>
      <div className="cart-icon">
        <Link to="/carrinho">
          <img src="carrinho.png" alt="Ícone do Carrinho de Compras" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
