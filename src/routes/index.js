import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";
import editoras from "./editoraRoutes.js";

// Faz uso da instancia app para configurar os endpoints das rotas a serem usadas
// Concentra todas as rotas que serão usadas na aplicação
const routes = (app) => {
    app.route('/').get((req, res) => { // Rota padrão
        res.status(200).send({ titulo: "Curso de node" });
    });

    app.use( // Usa as outras rotas
        express.json(), // Recurso do express que interpreta o que está chegando via POST ou PUT, e transforma em um objeto
        livros,
        autores,
        editoras
    );
}

export default routes;