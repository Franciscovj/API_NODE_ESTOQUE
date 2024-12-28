import express from 'express';
import Category from '../models/Category.js';  // Certifique-se de que o modelo está correto

const router = express.Router();

// Criar uma nova categoria
router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Listar todas as categorias
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Exportar o router como default
export default router;
