import express from 'express';
import { invoiceRouter } from './resources/invoice';
import { clientRouter } from './resources/client';
import { userRouter } from './resources/user';
import { authRouter } from './resources/auth';

export const restRouter = express.Router();
restRouter.use('/clients', clientRouter);
restRouter.use('/invoices', invoiceRouter);
restRouter.use('/users', userRouter);
restRouter.use('/auth', authRouter);
