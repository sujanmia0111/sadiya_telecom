const BuyFromCustomer = require('@root/models/buyFromCustomer');

const deleteBuyList = async (id) => {
    const buyList = await BuyFromCustomer.findByIdAndDelete(id);
    return buyList;
}

module.exports = deleteBuyList;