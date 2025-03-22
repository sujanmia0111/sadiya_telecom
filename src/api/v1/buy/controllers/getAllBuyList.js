const buyService = require("@root/lib/buy");

const getAllBuyList = async (req, res, next) => {
    try {
        const { date: filterDate } = req.query;
        console.log(filterDate);
        const buyList = await buyService.getAllBuyList(filterDate);
        res.status(200).json(buyList);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllBuyList;