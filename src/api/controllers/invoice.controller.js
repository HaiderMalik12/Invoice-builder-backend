import Joi from 'joi';
import Invoice from '../models/invoice.model';

export default {
  findAll(req, res, next) {
    Invoice.find().then(invoices => res.json(invoices));
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
      return res.status(400).json(error);
    }
    Invoice.create(value)
      .then(invoice => res.json(invoice))
      .catch(err => res.status(500).json(err));
  },
};
