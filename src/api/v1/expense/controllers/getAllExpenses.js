const expenseService = require('@root/lib/expenses');

const getAllExpenses = async (req, res, next) => {
    try {
        const expenses = await expenseService.getAllExpenses();
        console.log(expenses);
        res.status(200).json(expenses);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllExpenses;