const Sell = require('@root/models/sell');

const updateSell = async (id, data) => {
    const updatedSell = await Sell.findByIdAndUpdate(id, data, {new: true})
    return updatedSell;
}

module.exports = updateSell;