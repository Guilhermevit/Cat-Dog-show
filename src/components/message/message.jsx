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
} from "@mui/material";
import Headers from "../header/header";
import Footer from "../footer/footer";

import "./message.css";

export default function Message() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Recupera os cards do localStorage quando o componente é montado
    const savedCards = localStorage.getItem("savedCards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    // Salva os cards no localStorage sempre que a lista de cards for atualizada
    localStorage.setItem("savedCards", JSON.stringify(cards));
  }, [cards]);

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

  return (
    <>
      <Headers />
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
        </form>
        <div className="message-cards">
          <Grid container spacing={1}>
            {cards.map((card, index) => (
              <>
                <Grid item xs={12} sm={6} md={5} key={index}>
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
                {(index + 1) % 8 === 0 && <br />}{" "}
                {/* Quebra de linha após cada grupo de 8 cards */}
              </>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}
