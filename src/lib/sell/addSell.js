const Sell = require('@root/models/sell');

const addSell = async (data) => {
    const sell = new Sell(data);
    await sell.save(); // Save the document first

    // Populate the fields correctly
    await sell.populate([
        { path: 'product' },
        { path: 'soldBy', select: 'name' }
    ]);

    return sell;
};
module.exports = addSell;


