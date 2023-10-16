import express from "express";
import cors from "cors";
import fs from "fs";

// prettier-ignore
import jsonData from "../../../../BancoDeDados.json" assert { type: "json" };

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json(jsonData);
});


// Rota PUT para atualizar o arquivo BancoDeDados.json
app.put("/update", (req, res) => {
    console.log("Recebido PUT request com dados:", req.body);

    const newData = req.body; // Os novos dados que você deseja salvar

    fs.writeFile("./BancoDeDados.json", JSON.stringify(newData), (err) => {
        if (err) {
            return res.status(500).send("Erro ao salvar o arquivo BancoDeDados.json");
        }
        res.send("Arquivo BancoDeDados.json atualizado com sucesso.");
    });
});


app.listen(port, () => {
    console.log("Banco de dados \x1b[0m\x1b[32mONLINE\x1b[0m")
});