import chalk from "chalk";
import app from "./src/app.js";

// Define a constante "port" de acordo com o ambiente em que o servidor está hospedado
const port = process.env.PORT || 3000;

// "Escuta" o servidor na porta definida
app.listen(port, () => {
    console.log(chalk.green(`Servidor escutando em `) + chalk.blue(`http://localhost:${port}`));
});