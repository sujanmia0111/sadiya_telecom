const sellService = require('@root/lib/sell');

const addSell = async (req, res, next) => {
    try {
        const {productId:product, quantity, price} = req.body;
        const sell = await sellService.addSell({
            product,
            quantity,
            price,
            soldBy: req.user._id
        });
        res.status(200).json(sell);
    } catch (error) {
        next(error);
    }
};

module.exports = addSell;