const expenseService = require('@root/lib/expenses');

const addExpense = async (req, res, next) => {
    try {
        const expense = await expenseService.addExpense({...req.body, expenseBy: req.user._id});
        res.status(200).json(expense);
    } catch (error) {
        next(error);
    }
}

module.exports = addExpense;