const Sell = require('@root/models/sell');

const deleteSell = (id) =>{
    return Sell.findByIdAndDelete(id);
};

module.exports = deleteSell;