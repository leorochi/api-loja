import express from 'express';
import routes from './routes/index.js';
import conectaNaDataBase from './config/dbConnect.js';


const conexao = await conectaNaDataBase();

conexao.on('error', (erro) => {
  console.error('Erro de conexão', erro);
})

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!');
})

const app = express();
routes(app);

export default app;