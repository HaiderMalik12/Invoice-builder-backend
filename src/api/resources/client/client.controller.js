import { BAD_REQUEST } from 'http-status-codes';
import clientService from './client.service';

export default {
  async create(req, res) {
    const { value, error } = clientService.validateCreateSchema(req.body);
    if (error && error.details) {
      return res.status(BAD_REQUEST).json(error);
    }
    return res.json(value);
  },
};
