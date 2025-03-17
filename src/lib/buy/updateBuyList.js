const BuyFromCustomer = require('@root/models/buyFromCustomer');

const updateBuyList = async (id, data) => {
    const buyList = await BuyFromCustomer.findByIdAndUpdate(id, data, {new: true})
    return buyList;
}

module.exports = updateBuyList;