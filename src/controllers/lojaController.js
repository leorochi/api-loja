import { funcionario } from '../models/Funcionario.js';
import loja from '../models/Loja.js';
import { produto } from '../models/Produto.js';

class LojaController {

  static async listarLojas(req, res) {

    try {
      const listaLojas = await loja.find({});
      res.status(200).json(listaLojas);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar lojas`});
    }
  }

  static async listarLojaPorId(req, res) {
   
    try {
      const id = req.params.id;
      const lojaEncontrada = await loja.findById(id);
      res.status(200).json(lojaEncontrada);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Erro na busca por ID`});
    }
  }

  static async listarLojaPorCnpj(req, res) {
    const cnpj = req.query.cnpj
    try {
      const lojaPorCnpj = await loja.find({cnpj: cnpj});
      res.status(200).json(lojaPorCnpj);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar por CNPJ`})
    }
  }

  static async atualizarLoja(req, res) {

    try {
      const id = req.params.id;
      await loja.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: 'Loja atualizada com sucesso!'});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Erro ao atualizar a loja`});
    }
  }

  static async cadastrarLoja(req, res) {
    const novaLoja = req.body;
    try {
      const produtoEncontrado = await produto.findById(novaLoja.produto)
      const funcionarioEncontrado = await funcionario.findById(novaLoja.funcionario)
      const lojaCompleta = {...novaLoja, produto: {...produtoEncontrado._doc}, funcionario: {...funcionarioEncontrado._doc}};
      const lojaCriada = await loja.create(lojaCompleta);
      res.status(201).json({message: 'Criado com sucesso!', loja: lojaCriada});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao cadastrar loja`});
    }
  }

  static async removerLoja(req, res) {
  
    try {
      const id = req.params.id;
    await loja.findByIdAndDelete(id, req.body);
    res.status(200).json({message: 'Livro removido com sucesso!'});
    } catch (error) {
      res.status(500).json({message: `${error.messae} - Erro ao remover loja`});
    }
  }
}

export default LojaController;