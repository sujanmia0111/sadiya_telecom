const buyService = require("@root/lib/buy");

const createBuyList = async (req, res, next) => {
    try {
        const buyList = await buyService.createBuyList(req.body);
        res.status(200).json(buyList);
    } catch (error) {
        next(error);
    }
};

module.exports = createBuyList;