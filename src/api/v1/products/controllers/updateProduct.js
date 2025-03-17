const productService = require('@root/lib/products');

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.updateProduct(id, req.body);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

module.exports = updateProduct;