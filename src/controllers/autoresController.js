// Na versão utilizada neste projeto, o mongoose não tem mais suporte para callback functions

import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const resultado = await autores.find();
            res.status(200).json(resultado);
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Cannot GET` });
        }
    }

    static listarAutorPorId = async (req, res) => {
        const id = req.params.id;

        try {
            const resultado = await autores.findById(id);
            res.status(200).json(resultado);
        }
        catch (err) {
            res.status(400).json({ message: `${err.message} - Cannot GET` });
        }
    }

    static cadastrarAutor = async (req, res) => {
        const autor = new autores(req.body);

        try {
            await autor.save();
            res.status(201).send(autor.toJSON());
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot POST` });
        }
    }

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;

        try {
            await autores.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: `Autor atualizado!` });
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot PUT` });
        }
    }

    static removerAutor = async (req, res) => {
        const id = req.params.id;

        try {
            await autores.findByIdAndDelete(id);
            res.status(200).send({ message: `Item ${id} deletado com sucesso!` });
        }
        catch (err) {
            res.status(400).send({ message: `${err.message} - Cannot DELETE` });
        }
    }
}

export default AutorController;