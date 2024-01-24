const express = require('express');
const router = express.Router();
const NotasFiscaisController = require('../Controllers/NFiscalControler');

// Rota para criar um novo produto
router.post('/notafiscal', NotasFiscaisController.createNfiscal);

//Rota para obter um novo produto
router.get('/notafiscal', NotasFiscaisController.getAllNfiscal);

// Rota para obter um produto pelo ID
router.get('/notafiscal/:id', NotasFiscaisController.getNfiscalById);

// Rota para atualizar um produto
router.put('/notafiscal/:id', NotasFiscaisController.updateNfiscal);

// Rota para deletar um produto
router.delete('/notafiscal/:id', NotasFiscaisController.deleteNfiscal);

module.exports = router;