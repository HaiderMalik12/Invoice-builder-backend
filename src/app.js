import express from 'express';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log('Time: %d', Date.now());

  next();
});
app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to Invoice builder backend',
  });
});
const invoices = [
  { _id: '123123', item: 'Amazon Product', qty: 10, date: new Date() },
  { _id: '223123', item: 'GOogle Product', qty: 10, date: new Date() },
  { _id: '323123', item: 'Linked Product', qty: 10, date: new Date() },
];
app.get('/invoices', (req, res) => {
  res.json(invoices);
});
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
