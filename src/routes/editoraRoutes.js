import express from "express";
import EditoraController from "../controllers/editorasController.js"

const router = express.Router();

router
    .get("/editoras", EditoraController.listarEditoras)
    .post("/editoras", EditoraController.cadastrarEditora)

export default router;