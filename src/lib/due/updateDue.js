const Due = require("@root/models/due");

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

  const updatedDue = await due.save();
  return updatedDue;
};

module.exports = updateDue;
