const sellService = require('@root/lib/sell');

const getAllSell = async (req, res, next) => {
    try {
        const { date:filterDate } = req.query;
        const sells = await sellService.getAllSell(filterDate);
        res.status(200).json(sells);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllSell;