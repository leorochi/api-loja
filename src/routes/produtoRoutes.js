import express from 'express';
import ProdutoController from '../controllers/produtoController.js';

const routes = express.Router();

routes.get('/produtos', ProdutoController.listarProdutos);
routes.get('/produtos/busca', ProdutoController.listarProdutoPorCodigo);
routes.get('/produtos/:id', ProdutoController.listarProdutoPorId);  
routes.post('/produtos', ProdutoController.cadastrarProduto);
routes.put('/produtos/:id', ProdutoController.atualizarProduto);
routes.delete('/produtos/:id', ProdutoController.removerProduto);


export default routes;