const Product = require('@root/models/products');

const getAllProduct = async () => {
    const products = await Product.find({});
    return products;
}

module.exports = getAllProduct;