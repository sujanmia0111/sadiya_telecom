const dueService = require("@root/lib/due");

const getAllDue = async (req, res, next) => {
    try {
        const due = await dueService.getAllDue();
        res.status(200).json(due);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllDue;