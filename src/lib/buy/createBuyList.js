const BuyFromCustomer = require('@root/models/buyFromCustomer');

const createBuyList = async (data) => {
    const buyList = await BuyFromCustomer.create(data);
    return buyList;
}

module.exports = createBuyList;