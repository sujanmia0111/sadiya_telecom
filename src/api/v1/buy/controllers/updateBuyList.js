const buyService = require("@root/lib/buy");

const updateBuyList = async (req, res, next) => {
    try {
        const buyList = await buyService.updateBuyList(req.params.id, req.body);
        res.status(200).json(buyList);
    } catch (error) {
        next(error);
    }
};

module.exports = updateBuyList;