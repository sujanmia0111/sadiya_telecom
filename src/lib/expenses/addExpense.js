const Expense = require('@root/models/expense');

const addExpense = async (data) => {
    const expense = await Expense.create(data);
    await expense.populate({
        path: "expenseBy",
        select: "name",
    });
    return expense;
}

module.exports = addExpense;