const invoices = [
  { _id: '123123', item: 'Amazon Product', qty: 10, date: new Date() },
  { _id: '223123', item: 'GOogle Product', qty: 10, date: new Date() },
  { _id: '323123', item: 'Linked Product', qty: 10, date: new Date() },
];
export default {
  findAll(req, res, next) {
    res.json(invoices);
  },
};
