import React from "react";
import jsonData from "./produtos.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Cards() {
  const maxCards = 12;
  const produtos = jsonData.Produtos.slice(0, maxCards);

  return (
    <>
      <br />
      <h1 className="destaque">Destaques da semana:</h1>
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          {produtos.map((produto) => (
            <Grid item key={produto.id} xs={7} sm={4} md={2}>
              <Card sx={{ maxWidth: "500px", maxHeight: "450px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150px"
                    image={produto.imagem}
                    alt={produto.nome}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {produto.nome}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                      {produto.descricao}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      Preço: R$ {produto.preco}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
