const buyService = require("@root/lib/buy");

const getAllBuyList = async (req, res, next) => {
    try {
        const buyList = await buyService.getAllBuyList();
        res.status(200).json(buyList);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllBuyList;