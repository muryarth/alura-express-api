const http = require("http"); //módulo nativo do node
const chalk = require("chalk");
const port = 3000;

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Entrei na pag de livro',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //devolve uma resposta com o header do tipo "text/plain"
    res.end(rotas[req.url]); //define o conteúdo da página, na porta 8000
});

server.listen(port, () => { //criação do listener, que faz com que o servidor "escute" num porta específica
    console.log(chalk.green(`Servidor escutando em http://localhost:${port}`));
});