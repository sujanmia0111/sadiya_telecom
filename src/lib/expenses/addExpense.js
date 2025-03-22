const Expense = require('@root/models/expense');

const addExpense = async (data) => {
    const expense = await Expense.create(data);
    return expense;
}

module.exports = addExpense;