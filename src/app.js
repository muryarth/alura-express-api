import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import chalk from "chalk";

// Tratamento da conexão com o banco
db.on("error", console.log.bind(console, chalk.red('Erro de conexão.'))); // Captura o erro e avisa no console
db.once("open", () => { console.log(chalk.yellow("Conexão com o banco feita com sucesso!")); }); // Exibe a mensagem de sucesso no console

// Instancia a app usando express
const app = express();

// Passa a instância da app para o arquivo de uso das routes
routes(app);

export default app;