import express from 'express';
import { invoiceRouter } from './resources/invoice';
import { clientRouter } from './resources/client';
import { userRouter } from './resources/user/user.router';

export const restRouter = express.Router();
restRouter.use('/clients', clientRouter);
restRouter.use('/invoices', invoiceRouter);
restRouter.use('/users', userRouter);
