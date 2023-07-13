// Na versão utilizada neste projeto, o mongoose não tem mais suporte para callback functions

import livros from "../models/Livro.js";

// Configura/Controla as requisições que serão usadas a partir de um método HTTP que for definido como rota no endpoint
// De maneira geral, define o controller define a implementação do método 
class LivroController {

    // Obter todos os itens da COLEÇÃO "livros"
    // (COLEÇÃO é o equivalente a uma TABELA em bancos relacionais)
    static listarLivros = async (req, res) => {
        try {
            const resultado = await livros.find().populate(["autor", "editora"]); // Populate puxa as informações do autor baseado no id
            res.status(200).json(resultado) // Envia o resultado da coleção, em formato json
        }
        catch (err) {
            res.status(500).json({ message: `${err.message} - Cannot GET` }); // Captura o erro e envia para o usuário
        }
    }

    static listarLivroPorId = async (req, res) => {
        const id = req.params.id;

        try {
            const resultado = await livros.findById(id)
                .populate("autor", "nome")
                .populate("editora");
            res.status(200).json(resultado); // Envia o resultado da coleção, em formato json
        }
        catch (err) {
            res.status(400).json({ message: `${err.message} - Cannot GET` }); // Captura o erro e envia para o usuário
        }
    }

    // Cadastrar um novo item na COLEÇÃO "livros"
    static cadastrarLivro = async (req, res) => {
        const livro = new livros(req.body);

        try {
            await livro.save();
            res.status(201).send(livro.toJSON());
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot POST` });
        }
    }

    // Atualizar um item na COLEÇÃO "livros"
    static atualizarLivro = async (req, res) => {
        const id = req.params.id;

        try {
            await livros.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: `Livro atualizado!` });
        }
        catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot PUT` });
        }
    }

    // Remover um item na COLEÇÃO "livros"
    static removerLivro = async (req, res) => {
        const id = req.params.id;

        try {
            await livros.findByIdAndDelete(id);
            res.status(200).send({ message: `Item ${id} deletado com sucesso!` });
        }
        catch (err) {
            res.status(400).send({ message: `${err.message} - Cannot DELETE` });
        }
    }

    static listarLivrosPorEditora = async (req, res) => {
        const editora = req.query.editora;

        try {
            const resultado = await livros.find({ 'editora': editora }, {})
            res.status(200).send(resultado);
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Cannot GET` });
        }

    }
}

export default LivroController;