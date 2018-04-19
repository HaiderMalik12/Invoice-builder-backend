import express from 'express';
import invoiceController from '../controllers/invoice.controller';

export const router = express.Router();

// Invoices
router.get('/invoices', invoiceController.findAll);
