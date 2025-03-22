const Expense = require('@root/models/expense');

const getAllExpenses = async () => {
    const date = new Date();
    const today = date.toLocaleDateString();
    const expenses = await Expense.find({date: today}).populate({
        path: 'expenseBy',
        select: 'name'
    }).sort({createdAt: -1});
    console.log(expenses);
    return expenses;
};

module.exports = getAllExpenses;