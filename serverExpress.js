import chalk from "chalk";
import app from "./src/app.js";

// define a constante "port" de acordo com o ambiente em que o servidor está hospedado
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(chalk.green(`Servidor escutando em `) + chalk.blue(`http://localhost:${port}`));
});