import express from 'express';
import { invoiceRouter } from './resources/invoice';

export const restRouter = express.Router();
restRouter.use('/invoices', invoiceRouter);
