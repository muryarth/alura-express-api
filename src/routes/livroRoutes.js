import express from "express";
import LivroController from "../controllers/livrosController.js";

// Roteamento do express
const router = express.Router();

// Chama a requisição baseada no método HTTP especificado para o endpoint
// De maneira geral, define o que vai acontecer a cada rota. Baseado na requisição e no parâmetro da rota
router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.removerLivro)

export default router;