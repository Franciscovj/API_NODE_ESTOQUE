import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

// Exporte o modelo corretamente usando 'export default'
const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;  // CORREÇÃO AQUI
