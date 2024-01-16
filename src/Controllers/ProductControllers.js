const db = require('../../firebaseConfig');

// Config das rotas
const ProductController = {
    createProduto: async(req, res) => {
        try {
            const produtoRef = db.collection('produtos').doc();
            await produtoRef.set(req.body);
            res.status(201).json({ id: produtoRef.id, ...req.body });
        } catch(error) {
            res.status(500).send(error.messagem);
        }
    },
}

module.exports = ProductController;