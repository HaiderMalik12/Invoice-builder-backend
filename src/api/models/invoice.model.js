import mongoose from 'mongoose';

const { Schema } = mongoose;
const InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
  },
  date: {
    type: Date,
  },
  due: {
    type: Date,
  },
  rate: {
    type: Number,
  },
  tax: {
    type: Number,
  },
});
export default mongoose.model('Invoice', InvoiceSchema);
