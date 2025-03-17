const sellService = require('@root/lib/sell');

const getAllSell = async (req, res, next) => {
    try {
        const sells = await sellService.getAllSell();
        res.status(200).json(sells);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllSell;