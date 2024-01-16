const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductControllers');

// Rota para criar um novo produto
router.post('/produtos', ProductController.createProducts);

//Rota para obter um novo produto
router.get('/produtos', ProductController.getAllProducts);

// Rota para obter um produto pelo ID
router.get('/produtos/:id', ProductController.getProdutoById);

// Rota para atualizar um produto
router.put('/produtos/:id', ProductController.updateProducts);

// Rota para deletar um produto
router.delete('/produtos/:id', ProductController.deleteProduto);

module.exports = router;