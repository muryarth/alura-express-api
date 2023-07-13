import editoras from "../models/Editora.js";

class EditoraController {

    static listarEditoras = async (req, res) => {
        try {
            const resultado = await editoras.find();
            res.status(200).json(resultado);
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot GET` });
        }
    }

    static cadastrarEditora = async (req, res) => {
        const editora = new editoras(req.body); // Instancia o SCHEMA do mongoose, passando o corpo da requisição como argumento

        try {
            await editora.save();
            res.status(200).send(editora.toJSON());
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot POST` });
        }
    }

}

export default EditoraController;