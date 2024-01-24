const express = require('express');
const app = express();

// Configurar o aplicativo Express para fazer o parsing de JSON nas requisições
app.use(express.json());

// Importação das routes
const productsRouter = require('./src/Routes/productsRoutes');
const entryRoutes = require('./src/Routes/entryRoutes');
const exitRoutes = require('./src/Routes/exitRoutes');
const nFiscalRoutes = require('./src/Routes/NFiscalRoutes');

// Usar as rotas
app.use(productsRouter, entryRoutes, exitRoutes, nFiscalRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Server rodando'));