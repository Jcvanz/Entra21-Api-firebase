const express = require('express');
const router = express.Router();
const ExitsControllers = require('../Controllers/ExitsControllers');

// Rota para criar uma nova saida
router.post('/saidas', ExitsControllers.createSaidas);

// Rota para obter todos as saidas
router.get('/saidas', ExitsControllers.getAllSaidas);

// Rota para obter uma saida pelo ID
router.get('/saidas/:id', ExitsControllers.getSaidasById);

// Rota para atualizar uma saida
router.put('/saidas/:id', ExitsControllers.updateSaidas);

// Rota para deletar uma saida
router.delete('/saidas/:id', ExitsControllers.deleteSaidas);

module.exports = router;