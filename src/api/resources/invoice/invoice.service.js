export default {
  getTotal(invoice) {
    let total = 0;
    let subTotal = 0;

    if (typeof invoice.qty !== 'undefined' && typeof invoice.rate !== 'undefined') {
      total = invoice.qty * invoice.rate;
    }
    let salesTax = 0;
    if (typeof invoice.tax !== 'undefined') {
      salesTax = total * invoice.tax / 100;
    }
    subTotal = total + salesTax;
    return { total, subTotal };
  },
};
