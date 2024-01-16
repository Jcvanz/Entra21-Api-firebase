const express = require('express');
const app = express();

const router = require('./src/Routes/Routes');

// Usar as rotas
app.use(router);

app.listen(3000, () => console.log('Server rodando'));