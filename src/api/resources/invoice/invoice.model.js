import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
  rate: {
    type: Number,
  },
  tax: {
    type: Number,
  },
});
InvoiceSchema.plugin(mongoosePaginate);
export default mongoose.model('Invoice', InvoiceSchema);
