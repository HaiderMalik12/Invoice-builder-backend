import Invoice from '../models/invoice.model';

export default {
  findAll(req, res, next) {
    Invoice.find().then(invoices => res.json(invoices));
  },
  create(req, res) {
    const { item, qty, date, due, tax, rate } = req.body;
    if (!item) {
      return res.status(400).json({ err: 'item is required field' });
    }
    if (!date) {
      return res.status(400).json({ err: 'date is required field' });
    }
    if (!due) {
      return res.status(400).json({ err: 'due is required field' });
    }
    if (!qty) {
      return res.status(400).json({ err: 'qty is required field' });
    }
    Invoice.create({ item, qty, date, due, tax, rate })
      .then(invoice => res.json(invoice))
      .catch(err => res.status(500).json(err));
  },
};
