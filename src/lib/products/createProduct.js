const Product = require('@root/models/products');

const createProduct = async (product) => {
    const newProduct = await Product.create(product);
    return newProduct;
};

module.exports = createProduct;