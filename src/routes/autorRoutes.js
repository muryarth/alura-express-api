import express from "express";
import AutorController from "../controllers/autoresController.js";

// Roteamento do express
const router = express.Router();

// Chama a requisição baseada no método HTTP especificado para o endpoint
// De maneira geral, define o que vai acontecer a cada rota. Baseado na requisição e no parâmetro da rota
router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.removerAutor)

export default router;