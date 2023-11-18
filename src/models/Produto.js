import mongoose, { mongo } from "mongoose";

const produtoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String},
  codigo: {type: Number},
  tipo: {type: String},
  valor: {type: String}
}, {versionKey: false});

const produto = mongoose.model('produtos', produtoSchema);

export {produto, produtoSchema};