import express from 'express';
import Product from '../models/Product.js';  // Corrigir a importação

const router = express.Router();

// Criar um novo produto
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category').populate('supplier');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obter um produto por ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category').populate('supplier');
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Exportando o router
export default router;
