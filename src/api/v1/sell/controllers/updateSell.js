const sellService = require('@root/lib/sell');

const updateSell = async (req, res, next) => {
    try {
        const sell = await sellService.updateSell(req.params.id, req.body);
        res.status(200).json(sell);
    } catch (error) {
        next(error);
    }
};

module.exports = updateSell;