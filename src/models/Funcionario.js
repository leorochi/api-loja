import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String},
  telefone: {type: String},
  endereco: {type: String},
  salario: {type: String}
}, {versionKey: false});

const funcionario = mongoose.model('funcionarios', funcionarioSchema);

export {funcionario, funcionarioSchema};