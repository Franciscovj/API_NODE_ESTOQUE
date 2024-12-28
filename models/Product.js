import mongoose from 'mongoose';


// Definição do esquema para o produto
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity_in_stock: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true }
}, { timestamps: true });

// Criação do modelo para o produto
const Product = mongoose.model('Product', productSchema);

// Exportação do modelo Product
export default Product;


