const productService = require("@root/lib/products");

const createProduct = async (req, res, next) => {
  try {

    const { productName,productType, quantity, rpPrice, buyPrice, sellPrice, branch, supplierDetails } = req.body;

    const product = await productService.createProduct({
      productName,
      productType,
      quantity,
      rpPrice,
      buyPrice,
      sellPrice,
      supplierDetails: supplierDetails?.name !== "" ? supplierDetails : null,
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
