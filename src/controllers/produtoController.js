import {produto} from '../models/Produto.js';

class ProdutoController {
  
  static async listarProdutos(req, res) {
    
    try {
      const listaProdutos = await produto.find({});
    res.status(200).json(listaProdutos);
    } catch (errr) {
      res.status(500).json({message: `${error.message} - Erro ao listar produtos`});
    }

  }

  static async listarProdutoPorId(req, res) {
    
    try {
      const id = req.params.id;
      const produtoEncontrado = await produto.findById(id);
      res.status(200).json(produtoEncontrado);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao listar produto por ID`});
    }

  }

  static async listarProdutoPorCodigo(req, res) {
    const codigo = req.query.codigo;
    try {
      const produtoPorCodigo = await produto.find({codigo: codigo});
      res.status(200).json(produtoPorCodigo);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao listar produto por codigo`});
    }
  }

  static async cadastrarProduto(req, res) {
    
    try {
      const novoProduto = await produto.create(req.body);
      res.status(200).json({message: 'Produto criado com sucesso!', produto: novoProduto});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao cadastrar novo produto`});
    }
  }

  static async atualizarProduto(req, res) {
    
    try {
      const id = req.params.id;
      await produto.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: 'Produto atualizado com sucesso!'});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao atualizar produto`});
    }
  }

  static async removerProduto(req, res) {
    
    try {
      const id = req.params.id;
    await produto.findByIdAndDelete(id, req.body);
    res.status(200).json({message: 'Produto removido com sucesso!'});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao removedor produto`});
    }
  }
}

export default ProdutoController;
