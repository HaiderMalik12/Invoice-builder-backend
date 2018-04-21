import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';

import { router } from './config/routes';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/invoice-builder');
const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use('/api', router);
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
