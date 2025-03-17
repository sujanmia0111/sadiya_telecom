const Sell = require('@root/models/sell');

const getAllSell = async () => {
    const date = new Date();
    const today = date.toLocaleDateString();
    return Sell.find({date: today}).populate('product').populate({
        path: 'soldBy',
        select: 'name'
    }).sort({createdAt: -1});
};


module.exports = getAllSell;