import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Importando as rotas
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.log(err));

// Usar as rotas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/suppliers', supplierRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
