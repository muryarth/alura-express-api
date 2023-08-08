import mongoose from "mongoose";
// import "dotenv/config";

mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.1zmcs.mongodb.net/alura-node`);

let db = mongoose.connection;

export default db;