const Accounts = require("@root/models/accounts");
const Due = require("@root/models/due"); // Fix incorrect model import
const Products = require("@root/models/products");
const Expense = require("@root/models/expense");

const getDashboard = async () => {
  const account = await Accounts.findOne().sort({ createdAt: -1 });

  const customerDue = await Due.aggregate([
    { $match: { dueType: "customer" } },
    { $group: { _id: null, totalAmount: { $sum: "$dueAmount" } } },
  ]);

  const supplierDue = await Due.aggregate([
    { $match: { dueType: "supplier" } },
    { $group: { _id: null, totalAmount: { $sum: "$dueAmount" } } },
  ]);

  const productTotal = await Products.aggregate([
    { $match: { productType: "mobile" } },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: { $multiply: ["$buyPrice", "$quantity"] } },
      },
    },
  ]);

  const totalExpense = await Expense.aggregate([
    { $group: { _id: null, totalAmount: { $sum: "$amount" } } },
  ]);

  const dashboard = {
    bkash: account?.bkash || 0,
    dbbl: account?.dbbl || 0,
    bank: account?.bank || 0,
    cash: account?.cash || 0,
    nagad: account?.nagad || 0,
    productTotal: productTotal.length > 0 ? productTotal[0].totalAmount : 0,
    customerDue: customerDue.length > 0 ? customerDue[0].totalAmount : 0,
    supplierDue: supplierDue.length > 0 ? supplierDue[0].totalAmount : 0,
    totalExpense: totalExpense.length > 0 ? totalExpense[0].totalAmount : 0,
  };

  const totalAmount =
    dashboard.bkash +
    dashboard.dbbl +
    dashboard.bank +
    dashboard.cash +
    dashboard.nagad +
    dashboard.customerDue +
    dashboard.productTotal;
  const totalDue = dashboard.customerDue + dashboard.supplierDue;
  const totalBalance = totalAmount - dashboard.supplierDue;

  dashboard.totalAmount = totalAmount;
  dashboard.totalDue = totalDue;
  dashboard.totalBalance = totalBalance;

  return dashboard;
};

module.exports = {
  getDashboard,
};
