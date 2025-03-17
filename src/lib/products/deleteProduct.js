const Product = require('@root/models/products');

const deleteProduct = async (id) => {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
}

module.exports = deleteProduct;