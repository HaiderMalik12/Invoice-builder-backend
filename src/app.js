import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import swaggerDocument from './config/swagger.json';
import { restRouter } from './api';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/invoice-builder');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);
app.use('/api', restRouter);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
