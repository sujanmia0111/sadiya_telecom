const dusService = require('@root/lib/due');

const addAmount = async (req, res, next) => {
    try {
        const due = await dusService.addAmount(req.params.id, req.body);
        res.status(200).json(due);
    } catch (error) {
        next(error);
    }
};

module.exports = addAmount;