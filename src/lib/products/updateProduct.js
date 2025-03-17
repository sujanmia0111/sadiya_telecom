const Product = require('@root/models/products');

const updateProduct = async (id, product) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
    return updatedProduct;
}   

module.exports = updateProduct;

