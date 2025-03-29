const expenseService = require('@root/lib/expenses');

const getAllExpenses = async (req, res, next) => {
    try {
        let { filterDate, type } = req.query;
        const expenses = await expenseService.getAllExpenses(
            filterDate = filterDate? filterDate : null,
            type = type ? type : "today"
        );
        // console.log(expenses);
        res.status(200).json(expenses);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllExpenses;