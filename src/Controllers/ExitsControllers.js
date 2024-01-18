const db = require('../../firebaseConfig');

const ExitsControllers = {
    createSaidas: async (req, res) => {
        try {
            const entradaRef = db.collection('saidas').doc();
            await entradaRef.set(req.body);
            res.status(201).json({ id: entradaRef.id, ...req.body });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllSaidas: async (req, res) => {
        try {
            const entradasSnapshot = await db.collection('saidas').get();
            const entradas = [];
            entradasSnapshot.forEach(doc => {
                entradas.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(entradas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getSaidasById: async (req, res) => {
        try {
            const entradaRef = db.collection('saidas').doc(req.params.id);
            const doc = await entradaRef.get();
            if (!doc.exists) {
                res.status(404).send('saida não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateSaidas: async (req, res) => {
        try {
            const entradaRef = db.collection('saidas').doc(req.params.id);
            await entradaRef.update(req.body);
            res.status(200).send('saida atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteSaidas: async (req, res) => {
        try {
            const entradaRef = db.collection('saidas').doc(req.params.id);
            await entradaRef.delete();
            res.status(200).send('saida deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = ExitsControllers;