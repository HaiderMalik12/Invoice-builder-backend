import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import clientService from './client.service';
import Client from './client.model';

export default {
  async create(req, res) {
    try {
      const { value, error } = clientService.validateCreateSchema(req.body);
      if (error && error.details) {
        return res.status(BAD_REQUEST).json(error);
      }
      const client = await Client.create(value);
      return res.json(client);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async findAll(req, res) {
    try {
      const clients = await Client.find();
      return res.json(clients);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async findOne(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      return res.json(client);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
