const dueService = require("@root/lib/due");

const updateDue = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { amount, method } = req.body;
        const due = await dueService.updateDue(id, { amount, method });
        res.status(200).json(due);
    } catch (error) {
        next(error);
    }
};

module.exports = updateDue;