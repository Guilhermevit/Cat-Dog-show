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
  // Definição de variáveis e importação de bibliotecas

  const maxCards = 12; // Número máximo de cartões a serem exibidos
  const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos

  useEffect(() => {
    // Efeito colateral que é executado após a renderização inicial

    // Seleciona aleatoriamente produtos do arquivo JSON e os embaralha
    const produtosAleatorios = jsonData.Produtos.slice(0, maxCards).sort(
      () => 0.5 - Math.random()
    );
    setProdutos(produtosAleatorios); // Atualiza o estado 'produtos' com a lista de produtos aleatórios
  }, []);

  return (
    // Componente de React que é renderizado na página

    <>
      <br /> {/* Uma quebra de linha */}
      <h2 className="destaque">Destaques da semana:</h2>{" "}
      {/* Título destacado */}
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          {/* Criação de uma grade para exibir os produtos */}
          {produtos.map((produto) => {
            // Mapeia cada produto na lista para renderizar

            const precoOriginal = produto.preco; // Preço original do produto
            const precoComDesconto = precoOriginal * 1.1; // Preço com um desconto fictício

            return (
              <Grid item key={produto.id} xs={7} sm={4} md={2}>
                {/* Define um cartão para exibir um produto específico */}
                <Card
                  sx={{
                    maxWidth: "400px",
                    maxHeight: "350px",
                    minHeight: "350px",
                  }}
                >
                  <CardActionArea>
                    {/* Área clicável do cartão */}
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
                    {/* Imagem do produto */}
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {produto.nome}
                      </Typography>
                      {/* Nome do produto */}
                      <Typography
                        variant="body3"
                        color="text.secondary"
                        sx={{ flex: 1, textAlign: "justify" }}
                      >
                        {produto.descricao}
                      </Typography>
                      {/* Descrição do produto */}
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
                        {/* Preço original do produto */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            style={{ textDecoration: "line-through" }}
                          >
                            R$ {precoComDesconto.toFixed(2)}
                          </Typography>
                          {/* Preço com desconto (exibido com uma linha no meio) */}
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
