const Sell = require("@root/models/sell");

const updateSell = async (id, data) => {
  const updatedSell = await Sell.findByIdAndUpdate(id, data, {
    new: true,
  }).populate([{ path: "product" }, { path: "soldBy", select: "name" }]);
  return updatedSell;
};

module.exports = updateSell;
