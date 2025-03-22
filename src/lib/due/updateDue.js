const Due = require("@root/models/due");
const Accounts = require('@root/models/accounts');

const updateDue = async (id, data) => {
  const { amount, method } = data;
  const due = await Due.findById(id);

  // Update Paid, Due, and Transactions
  due.paidAmount += amount;
  due.dueAmount -= amount;
  due.transactions.push({ amount, method });

  // Update Status
  if (due.dueAmount === 0) {
    due.status = "Paid";
  } else {
    due.status = "Partially Paid";
  }

  const account = await Accounts.findOne().sort({ createdAt: -1});
  
  if(due.dueType === "customer") {
    account[method] += amount
  } else {
    account[method] -= amount;
  }

  await account.save();


  const updatedDue = await due.save();
  return updatedDue;
};

module.exports = updateDue;
