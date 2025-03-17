const dueService = require("@root/lib/due");

const deleteDue = async (req, res, next) => {
    try {
        const { id } = req.params;
        const due = await dueService.deleteDue(id);
        res.status(200).json(due);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteDue;