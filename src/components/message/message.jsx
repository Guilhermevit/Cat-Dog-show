import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
  TextField,
  Typography,
  Grid,
} from "@mui/material"; // Importa componentes do Material-UI
import Headers from "../header/header"; // Importa um componente de cabeçalho
import Footer from "../footer/footer"; // Importa um componente de rodapé

import "./message.css"; // Importa estilos CSS

export default function Message() {
  // Define estados usando o useState
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cards, setCards] = useState([]);

  // useEffect para carregar cartões salvos do localStorage ao montar o componente
  useEffect(() => {
    const savedCards = localStorage.getItem("savedCards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  // useEffect para salvar os cartões no localStorage sempre que eles forem atualizados
  useEffect(() => {
    localStorage.setItem("savedCards", JSON.stringify(cards));
  }, [cards]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      name,
      message,
    };
    setCards([...cards, newCard]);
    setName("");
    setMessage("");
    setSubmitted(true);
  };

  // Função para limpar todos os cartões
  const clearCards = () => {
    setCards([]);
  };

  return (
    <>
      <Headers /> {/* Renderiza o componente de cabeçalho */}
      <div className="message-container">
        <form onSubmit={handleSubmit} className="message-form">
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Recado"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
          <Button variant="contained" color="secondary" onClick={clearCards}>
            Limpar Cartões
          </Button>
        </form>
        <div className="message-cards">
          <Grid container spacing={1}>
            {cards.map((card, index) => (
              <Grid item xs={10} sm={5} md={7} key={index}>
                <Card className="message-card">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mensagem: {card.message}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container spacing={1} justifyContent="center">
                      <Grid item>
                        <Avatar alt="Soul-Code" src="./soulcode.jpg" />
                      </Grid>
                      <Grid item>
                        <Avatar alt="logo" src="./logo.jpg" />
                      </Grid>
                      <Grid item>
                        <Avatar
                          alt="Avatar"
                          src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170526145/78529288-dise%C3%B1o-de-avatar-humano-silueta-icono-vector-ilustraci%C3%B3n.jpg"
                        />
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer /> {/* Renderiza o componente de rodapé */}
    </>
  );
}
