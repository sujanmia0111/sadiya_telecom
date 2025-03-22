const Expense = require('@root/models/expense');

const updateExpense = async (id, data) => {
    const expense = await Expense.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false }); 
    return expense;
};

module.exports = updateExpense;