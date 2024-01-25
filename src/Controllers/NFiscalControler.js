// Importação do Módulo Firebase
const db = require('../../firebaseConfig');

// Objeto que controla as operações relacionada as notas fiscais no banco
const NotasFiscaisController = {
    // Rota para criar uma nota fiscal
    createNfiscal: async (req, res) => {
        try {
            // É responsável por criar uma nova nota fiscal
            const entradaRef = db.collection('nota-fiscal').doc();
            await entradaRef.set(req.body);
            // Resposta da requisição caso seja true
            res.status(201).json({ id: entradaRef.id, ...req.body });
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar todas as notas fiscais
    getAllNfiscal: async (req, res) => {
        try {
            // É responsável por buscar todas as notas fiscais que existem no banco
            const entradasSnapshot = await db.collection('nota-fiscal').get();
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

    // Rota para buscar uma nota fiscal pelo ID
    getNfiscalById: async (req, res) => {
        try {
            // Obtém uma nota fiscal específica pelo ID fornecido como parâmetro na URL
            const entradaRef = db.collection('nota-fiscal').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('Nota fiscal não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar uma nota fiscal pelo ID e atualizar ele
    updateNfiscal: async (req, res) => {
        try {
            // Atualiza uma nota fiscal existente com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('nota-fiscal').doc(req.params.id);
            await entradaRef.update(req.body);
            // Resposta da requisição caso seja true
            res.status(200).send('Nota fiscal atualizada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar uma nota fiscal pelo ID e deletar ele
    deleteNfiscal: async (req, res) => {
        try {
            // Exclui uma nota fiscal com base no ID fornecido como parâmetro na URL
            const entradaRef = db.collection('nota-fiscal').doc(req.params.id);
            await entradaRef.delete();
            // Resposta da requisição caso seja true
            res.status(200).send('Nota fiscal deletada com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    }
};

module.exports = NotasFiscaisController;