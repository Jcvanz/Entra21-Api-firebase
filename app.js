const express = require('express');
const app = express();

app.use(express.json());

const productsRouter = require('./src/Routes/productsRoutes');
const entryRoutes = require('./src/Routes/entryRoutes');
const exitRoutes = require('./src/Routes/exitRoutes');

// Usar as rotas
app.use(productsRouter, entryRoutes, exitRoutes);

app.listen(3000, () => console.log('Server rodando'));