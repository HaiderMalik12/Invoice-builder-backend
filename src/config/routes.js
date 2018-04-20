import express from 'express';
import invoiceController from '../api/controllers/invoice.controller';

export const router = express.Router();

// Invoices
router.get('/invoices', invoiceController.findAll);
router.post('/invoices', invoiceController.create);
