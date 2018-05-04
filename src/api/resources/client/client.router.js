import express from 'express';
import clientController from './client.controller';

export const clientRouter = express.Router();
clientRouter
  .route('/')
  .post(clientController.create)
  .get(clientController.findAll);
