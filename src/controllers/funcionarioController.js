import { funcionario } from "../models/Funcionario.js";


class FuncionarioController {
  
  static async listarFuncionarios(req, res) {
    
    try {
      const listaFuncionarios = await funcionario.find({});
    res.status(200).json(listaFuncionarios);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar os funcionários`});
    }
  }

  static async listarFuncionarioPorId(req, res) {
    
    try {
      const id = req.params.id;
      const funcionarioEncontrado = await funcionario.findById(id);
      res.status(200).json(funcionarioEncontrado);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar por ID o funcionário`});
    }
  }

  static async listarFuncionarioPorEndereco(req, res) {
    const endereco = req.query.endereco
    try {
      const enderecoFuncionario = await funcionario.find({endereco: endereco});
      res.status(200).json(enderecoFuncionario);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar pelo endereço do funcionário`});
    }
  }

  static async cadastrarFuncionario(req, res) {
    
    try {
      const novoFuncionario = await funcionario.create(req.body);
      res.status(200).json({message: 'Funcionário criado com sucesso!', funcionario: novoFuncionario});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao cadastrar funcionário`});
    }
  }

  static async atualizarFuncionario(req, res) {
    
    try {
      const id = req.params.id;
      await funcionario.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: 'Funcionário atualizado com sucesso!'});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao atualizar funcionário`});
    }
  }

  static async removerFuncionario(req, res) {

    try {
      const id = req.params.id;
      await funcionario.findByIdAndDelete(id);
      res.status(200).json({message: 'Funcionário removido com sucesso!!'});
    } catch (error) {
      res.status(500).json({message: `${error.message} - Erro ao remover funcionário`});
    }
  }
}

export default FuncionarioController;