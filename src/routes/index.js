import express from 'express';
import lojas from './lojaRoutes.js';
import produtos from './produtoRoutes.js';
import funcionarios from './funcionarioRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Curso de Node.js'));

  app.use(express.json(), lojas, produtos, funcionarios);
}

export default routes;