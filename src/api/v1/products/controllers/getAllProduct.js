const productService = require('@root/lib/products');

const getAllProduct = async (req, res,next) => {
    try {
        const products = await productService.getAllProduct();
        res.status(200).json(products);
    } catch (error) {
       next(error);
    }
};

module.exports = getAllProduct;