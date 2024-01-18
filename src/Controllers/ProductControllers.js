const db = require('../../firebaseConfig');

// Config das rotas
const ProductController = {
    // Rota para criar produto
    createProducts: async(req, res) => {
        try {
            // Faz a requisição
            const produtoRef = db.collection('produtos').doc();
            await produtoRef.set(req.body);
            // Resposta da requisição caso seja true
            res.status(201).json({ id: produtoRef.id, ...req.body });
        } catch(error) {
            // Devolve o erro erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar todos os produtos
    getAllProducts: async(req, res) => {
        try {
            // Faz a busca dos produtos
            const produtoSnapshot = await db.collection('produtos').get();
            const produtos = [];
            produtoSnapshot.forEach(doc => {
                produtos.push({ id:doc.id, ...doc.data() });
            });
            // Resposta da requisição caso seja true
            res.status(200).json(produtos);
        } catch(error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID
    getProdutoById: async (req, res) => {
        try {
            // Faz a busca do produto pelo ID
            const produtoRef = db.collection('produtos').doc(req.params.id);
            const doc = await produtoRef.get();
            // Faz a verificação se existe o produto
            if (!doc.exists) {
                res.status(404).send('Produto não encontrado');
            } else {
                // Resposta da requisição caso seja true
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },

    // Rota para buscar um produto pelo ID e atualizar ele
    updateProduto: async (req, res) => {
        try {
            // Faz a busca do produto pelo ID e atualiza ele
            const produtoRef = db.collection('produtos').doc(req.params.id);
            await produtoRef.update(req.body);
            // Resposta da requisição caso seja true
            res.status(200).send('Produto atualizado com sucesso');
        } catch (error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    },
    
    // Rota para buscar um produto pelo ID e deletar ele
    deleteProduto: async(req, res) => {
        try {
            // Faz a busca do produto pelo ID e deleta ele
            const produtoRef = db.collection('produtos').doc(req.params.id);
            await produtoRef.delete(req.body);
            // Resposta da requisição caso seja true
            res.status(200).send('Produto deletado com sucesso');
        } catch(error) {
            // Devolve o erro
            res.status(500).send(error.message);
        }
    }
}

module.exports = ProductController;