import mongoose from "mongoose";

// model que determina o padrão do dado da maneira que está incluído no banco
const livroSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
}); //modelo que representa livros

const livros = mongoose.model('livros', livroSchema);

export default livros;