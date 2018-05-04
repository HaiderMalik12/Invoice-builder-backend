import express from 'express';
import clientController from './client.controller';

export const clientRouter = express.Router();
clientRouter
  .route('/')
  .post(clientController.create)
  .get(clientController.findAll);

clientRouter
  .route('/:id')
  .get(clientController.findOne)
  .delete(clientController.delete)
  .put(clientController.update);
