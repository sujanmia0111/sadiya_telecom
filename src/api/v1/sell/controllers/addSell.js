const sellService = require('@root/lib/sell');

const addSell = async (req, res, next) => {
    try {
        const {productId:product, imei, quantity, price, paymentDetails, customerDetails, dueDate} = req.body;
        const sell = await sellService.addSell({
            product,
            imei,
            quantity,
            price,
            paymentDetails,
            customerDetails,
            dueDate,
            soldBy: req.user._id
        });
        res.status(200).json(sell);
    } catch (error) {
        next(error);
    }
};

module.exports = addSell;