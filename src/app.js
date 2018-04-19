import express from 'express';
import mongoose from 'mongoose';

import { router } from './config/routes';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/invoice-builder');
const app = express();
const PORT = 3000;

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to Invoice builder backend',
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
