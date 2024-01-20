// Importação do Módulo Firebase
const db = require('../../firebaseConfig');

// Objeto que controla as operações relacionada as entradas no banco
const EntradaController = {
    // Rota para criar uma entrada
    createEntrada: async (req, res) => {
        try {
            // É responsável por criar uma nova entrada
            const entradaRef = db.collection('entradas').doc();
            await entradaRef.set(req.body);
            // Resposta da requisição caso seja true
            res.status(201).json({ id: entradaRef.id, ...req.body });
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar todos os produtos
    getAllEntradas: async (req, res) => {
        try {
            // É responsável por buscar todas as entradas que existem no banco
            const entradasSnapshot = await db.collection('entradas').get();
            const entradas = [];
            // Faz um mapeamento (método forEach) e sobe para o array (método push)
            entradasSnapshot.forEach(doc => {
                entradas.push({ id: doc.id, ...doc.data() });
            });
            // Resposta da requisição caso seja true
            res.status(200).json(entradas);
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID
    getEntradaById: async (req, res) => {
        try {
            // Obtém uma entrada específica pelo ID fornecido como parâmetro na URL
            const entradaRef = db.collection('entradas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('entrada não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID e atualizar ele
    updateEntrada: async (req, res) => {
        try {
            // Atualiza uma entrada existente com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.update(req.body);
            // Resposta da requisição caso seja true
            res.status(200).send('entrada atualizada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },
    
    // Rota para buscar um produto pelo ID e deletar ele
    deleteEntrada: async (req, res) => {
        try {
            // Exclui uma entrada com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('entradas').doc(req.params.id);
            await entradaRef.delete();
            // Resposta da requisição caso seja true
            res.status(200).send('entrada deletada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    }
};

module.exports = EntradaController;