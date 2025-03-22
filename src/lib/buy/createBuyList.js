const BuyFromCustomer = require('@root/models/buyFromCustomer');
const productService = require('@root/lib/products');
const Accounts = require('@root/models/accounts');

const createBuyList = async (data) => {
    const buyList = await BuyFromCustomer.create(data);

    if (!data) {
        throw new Error('Data is missing');
    }

    if (!data?.paymentDetails || typeof data.paymentDetails !== 'object') {
        throw new Error('Payment details are missing or invalid');
    }
    // console.log(typeof data);
    const { paymentDetails } = data;

    const productData = {
        productName: data.productDetails.productName,
        productType: data.productDetails.productType,
        quantity: data.quantity,
        rpPrice: data.price + 500,
        buyPrice: data.price,
        sellPrice: data.price + 1000,
        branch: data.branchDetails,
        createdBy: data.createdBy,
        estimatedProfit: (data.price + 500) - data.price,    
    }
    // console.log(typeof paymentDetails);
    const methods = Object.keys(paymentDetails);
    const accounts = await Accounts.findOne({}).sort({ createdAt: -1 });

    for (const method of methods) {
        const amount = paymentDetails[method];
        accounts[method] -= amount;
        await accounts.save();
    }
    

    await productService.createProduct(productData);



    return buyList;
}

module.exports = createBuyList;