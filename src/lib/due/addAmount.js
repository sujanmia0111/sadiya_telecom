const Due = require('@root/models/due');

const addAmount = async (id, data) => {
    const due = await Due.findById(id);
    due.totalAmount += data.amount;
    due.dueAmount += data.amount;
    const newAddTransaction = { amount: data.amount, notes: data.notes };
    due.addedAmountTransactions.push(newAddTransaction);
    await due.save();
    return due;
};

module.exports = addAmount;