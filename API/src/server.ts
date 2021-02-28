import 'reflect-metadata'
import express, { request, response } from "express";
import "./database";

const app = express();

/**
 * GET - Buscar
 * POST - Salvar
 * PUT - Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

// http://localhost:3333/users
app.get("/users", (request, response) => {
    return response.json({
        message: "Hello Word!!!!! - NLW#04"
    });
})

// 1º parâmetro => Rota(Recurso API)º
// 2º parâmetro => request, response

app.post("/", (request, response) => {
    // recebi os dados para salvar
    return response.json({
        message: "## Os dados foram salvos com Sucesso!!!"
    });  
})

app.listen(3333, () => console.log("SERVER IS RUNNING!!!"));

