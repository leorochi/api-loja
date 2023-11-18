import mongoose, { mongo } from "mongoose";
import { produtoSchema } from "./Produto.js";
import { funcionarioSchema } from "./Funcionario.js";

const lojaSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String},
  cnpj: {type: Number},
  endereco: {type: String},
  produto: produtoSchema,
  funcionario: funcionarioSchema
}, {versionKey: false});

const loja = mongoose.model('lojas', lojaSchema);

export default loja;

