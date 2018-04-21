import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import Invoice from '../models/invoice.model';

export default {
  findAll(req, res, next) {
    Invoice.find()
      .then(invoices => res.json(invoices))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  create(req, res, next) {
    const schema = Joi.object().keys({
      item: Joi.string().required(),
      date: Joi.date().required(),
      due: Joi.date().required(),
      qty: Joi.number()
        .integer()
        .required(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Invoice.create(value)
      .then(invoice => res.json(invoice))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const { id } = req.params;
    Invoice.findById(id)
      .then(invoice => {
        if (!invoice) {
          return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not find any invoice' });
        }
        return res.json(invoice);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  delete(req, res) {
    const { id } = req.params;
    Invoice.findByIdAndRemove(id)
      .then(invoice => {
        if (!invoice) {
          return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not delete any invoice' });
        }
        return res.json(invoice);
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
};
