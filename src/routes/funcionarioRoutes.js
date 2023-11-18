import express from 'express';
import FuncionarioController from '../controllers/funcionarioController.js';

const routes = express.Router();

routes.get('/funcionarios', FuncionarioController.listarFuncionarios);
routes.get('/funcionarios/busca', FuncionarioController.listarFuncionarioPorEndereco);
routes.get('/funcionarios/:id', FuncionarioController.listarFuncionarioPorId);  
routes.post('/funcionarios', FuncionarioController.cadastrarFuncionario);
routes.put('/funcionarios/:id', FuncionarioController.atualizarFuncionario);
routes.delete('/funcionarios/:id', FuncionarioController.removerFuncionario);


export default routes;