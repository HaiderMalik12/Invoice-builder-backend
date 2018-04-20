import Invoice from '../models/invoice.model';

export default {
  findAll(req, res, next) {
    Invoice.find().then(invoices => res.json(invoices));
  },
};
