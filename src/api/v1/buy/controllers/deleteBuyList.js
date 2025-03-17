const buyService = require("@root/lib/buy");

const deleteBuyList = async (req, res, next) => {
    try {
        const buyList = await buyService.deleteBuyList(req.params.id);
        res.status(200).json(buyList);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteBuyList;