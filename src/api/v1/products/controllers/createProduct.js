const productService = require("@root/lib/products");

const createProduct = async (req, res, next) => {
  try {

    const { productName, quantity, rpPrice, buyPrice, sellPrice, branch } = req.body;

    const product = await productService.createProduct({
      productName,
      quantity,
      rpPrice,
      buyPrice,
      sellPrice,
      branch,
      estimatedProfit: rpPrice - buyPrice,
      createdBy: req.user._id
    });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = createProduct;
