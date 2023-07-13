import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import chalk from "chalk"

// tratamento da conexão com o banco
db.on("error", console.log.bind(console, chalk.red('Erro de conexão.'))); // captura o erro e avisa no console
db.once("open", () => { // em caso de sucesso, exibe a mensagem de sucesso no console
    console.log(chalk.yellow("Conexão com o banco feita com sucesso!"));
});

const app = express();

app.use(express.json()); // recurso do express que interpreta o que tá chegando via POST ou PUT, e transformar em um objeto

// const livros = [
//     { id: 1, "titulo": "Mandaloriano" },
//     { id: 2, "titulo": "Andor" },
//     { id: 3, "titulo": "Boba Fett" },
//     { id: 4, "titulo": "A Pequena Sereia" },
//     { id: 5, "titulo": "O Hobbit" }
// ]

//GET traz todos os itens da COLEÇÃO "livros"
//(COLEÇÃO é o equivalente a uma TABELA em bancos relacionais)
app.get('/livros', async (req, res) => {
    try {
        const resultado = await livros.find();
        res.status(200).json(resultado); // envia o resultado da coleção, em formato json
    }
    catch {
        res.status(500).json(err);
    }

});

//GET por id
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
});

app.get('/', (req, res) => {
    res.status(200).send('Rodando no node.');
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Filme cadastrado com sucesso.");
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = buscaLivro(id);
    livros.splice(index, 1);
    res.send({ message: `Livro ${id} removido com sucesso.`, success: true });
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;