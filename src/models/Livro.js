import mongoose from "mongoose";

// MODEL que determina o padrão do dado da maneira que está incluído no banco, ou seja, 
// contém as regras de negócio.
const livroSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true }, // Referência ao objeto Autor
    editora: { type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true },
    numeroPaginas: { type: Number }
}); // Modelo que representa livros, como está no MongoDB

const livros = mongoose.model('livros', livroSchema);

export default livros;