import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// define o caminho para o .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

// console.log(process.env.db_username, process.env.db_password);
mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.1zmcs.mongodb.net/alura-node`);

let db = mongoose.connection;

export default db;