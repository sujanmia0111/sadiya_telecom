const productService = require('@root/lib/products');

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.deleteProduct(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteProduct;