const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductControllers');

// Rota para criar um novo produto
router.post('/produtos', ProductController.createProduto);

//Rota para obter um novo produto
router.get('/produtos');

// Rota para obter um produto pelo ID
router.get('/produtos/:id');

// Rota para atualizar um produto
router.put('/produtos/:id');

// Rota para deletar um produto
router.delete('/produtos/:id');

module.exports = router;