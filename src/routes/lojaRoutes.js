import express from 'express';
import LojaController from '../controllers/lojaController.js';

const routes = express.Router();

routes.get('/lojas', LojaController.listarLojas);
routes.get('/lojas/busca', LojaController.listarLojaPorCnpj);
routes.get('/lojas/:id', LojaController.listarLojaPorId);  
routes.post('/lojas', LojaController.cadastrarLoja);
routes.put('/lojas/:id', LojaController.atualizarLoja);
routes.delete('/lojas/:id', LojaController.removerLoja);

export default routes;