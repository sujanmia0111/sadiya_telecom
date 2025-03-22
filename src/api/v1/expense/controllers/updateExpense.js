const expenseService = require('@root/lib/expenses');


const updateExpense = async (req, res, next) => {
    try {
        const expense = await expenseService.updateExpense(req.params.id, {...req.body});
        res.status(200).json(expense);
    } catch (error) {
        next(error);
    }
};

module.exports = updateExpense;