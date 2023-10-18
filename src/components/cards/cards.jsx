import React, { useEffect, useState } from "react";
import jsonData from "./produtos.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

import "./cards.css";

export default function Cards() {
  const maxCards = 12;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosAleatorios = jsonData.Produtos.slice(0, maxCards).sort(
      () => 0.5 - Math.random()
    ); // Embaralha a lista de produtos
    setProdutos(produtosAleatorios);
  }, []);

  return (
    <>
      <br />
      <h2 className="destaque">Destaques da semana:</h2>
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          {produtos.map((produto) => {
            const precoOriginal = produto.preco;
            const precoComDesconto = precoOriginal * 1.1;

            return (
              <Grid item key={produto.id} xs={7} sm={4} md={2}>
                <Card
                  sx={{
                    maxWidth: "400px",
                    maxHeight: "350px",
                    minHeight: "350px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "150px",
                      }}
                      image={produto.imagem}
                      alt={produto.nome}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {produto.nome}
                      </Typography>
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ flex: 1, textAlign: "justify" }}
                      >
                        {produto.descricao}
                      </Typography>{" "}
                      <br />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body1" color="primary">
                          R$ {precoOriginal.toFixed(2)}
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            style={{ textDecoration: "line-through" }}
                          >
                            R$ {precoComDesconto.toFixed(2)}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
