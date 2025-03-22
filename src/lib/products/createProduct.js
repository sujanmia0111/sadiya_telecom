const Product = require("@root/models/products");
const Accounts = require("@root/models/accounts");

const createProduct = async (product) => {
  const newProduct = await Product.create(product);
  const { paymentDetails } = product;
  const accounts = await Accounts.findOne({}).sort({ createdAt: -1 });
  if (paymentDetails) {
    const methods = Object.keys(paymentDetails);

    for (const method of methods) {
      const amount = paymentDetails[method];
      accounts[method] += amount;
      await accounts.save();
    }
  }
  return newProduct;
};

module.exports = createProduct;
