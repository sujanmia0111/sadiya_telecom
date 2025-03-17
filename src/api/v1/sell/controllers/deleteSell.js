const sellService = require('@root/lib/sell');

const deleteSell = async (req, res, next) => {
    try {
        const sell = await sellService.deleteSell(req.params.id);
        res.status(200).json(sell);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteSell;