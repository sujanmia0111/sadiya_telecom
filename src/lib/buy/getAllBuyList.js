const BuyFromCustomer = require('@root/models/buyFromCustomer');

const getAllBuyList = async () => {
    const date = new Date();
    const today = date.toLocaleDateString();
    const buyList = await BuyFromCustomer.find({date: today}).sort({ createdAt: -1 });
    return buyList;
}

module.exports = getAllBuyList;