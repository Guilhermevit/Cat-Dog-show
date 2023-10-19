import React, { useEffect, useState } from "react";
import jsonData from "../cards/produtos.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Headers from "../header/header";
import Footer from "../footer/footer";
import Banner from "../banner/banner";
import "./human.css";

export default function Human() {
  const maxCards = 50;
  const [produtos, setProdutos] = useState([]);
  const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [carrinho, setCarrinho] = useState([]);

  function CircularProgressWithLabel(props) {
    return (
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          top: "2vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: "0",
            left: "0",
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  useEffect(() => {
    const produtosAleatorios = jsonData.Produtos.slice(0, maxCards).sort(
      () => 0.5 - Math.random()
    ); // Embaralha a lista de produtos
    setProdutos(produtosAleatorios);

    // Simula um atraso de 3 segundos antes de mostrar o Grid
    const delay = setTimeout(() => {
      setLoading(false); // Define loading como false após o atraso
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    console.log("Card Clicado Produto:", produto);
  };
  return (
    <>
      <Headers />
      <Banner />
      <br />
      {loading ? (
        <CircularProgressWithLabel value={progress} />
      ) : (
        <div>
          <h2 className="destaque">Produtos você mesmo serHumaninho Lindo</h2>
          <div style={{ maxWidth: "90%", margin: "0 auto" }}>
            <Grid container spacing={2}>
              {produtos
                .filter((produto) => produto.tipo === "Humano")
                .map((produto) => {
                  const precoOriginal = produto.preco;
                  const precoComDesconto = precoOriginal * 1.1;

                  return (
                    <Grid item key={produto.id} xs={7} sm={4} md={2}>
                      <div
                        onClick={() => adicionarAoCarrinho(produto)}
                        style={{ cursor: "pointer" }}
                      >
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
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                              >
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
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
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
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
