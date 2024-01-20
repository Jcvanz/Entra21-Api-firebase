// Importação do Módulo Firebase
const db = require('../../firebaseConfig');

// Objeto que controla as operações relacionada as saídas no banco
const ExitsControllers = {
    // Rota para criar uma saída
    createSaidas: async (req, res) => {
        try {
            // É responsável por criar uma nova saida
            const entradaRef = db.collection('saidas').doc();
            await entradaRef.set(req.body);
            // Resposta da requisição caso seja true
            res.status(201).json({ id: entradaRef.id, ...req.body });
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar todos os produtos
    getAllSaidas: async (req, res) => {
        try {
            // É responsável por buscar todas as saidas que existem no banco
            const entradasSnapshot = await db.collection('saidas').get();
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
    getSaidasById: async (req, res) => {
        try {
            // Obtém uma saida específica pelo ID fornecido como parâmetro na URL
            const entradaRef = db.collection('saidas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('saida não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID e atualizar ele
    updateSaidas: async (req, res) => {
        try {
            // Atualiza uma saida existente com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('saidas').doc(req.params.id);
            await entradaRef.update(req.body);
            // Resposta da requisição caso seja true
            res.status(200).send('saida atualizada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID e deletar ele
    deleteSaidas: async (req, res) => {
        try {
            // Exclui uma saida com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('saidas').doc(req.params.id);
            await entradaRef.delete();
            // Resposta da requisição caso seja true
            res.status(200).send('saida deletada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    }
};

module.exports = ExitsControllers;