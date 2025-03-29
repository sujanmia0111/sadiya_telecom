const Sell = require('@root/models/sell');
const Accounts = require('@root/models/accounts');
const Products = require('@root/models/products');
const Due = require('@root/models/due');

const addSell = async (data) => {
    const sell = new Sell(data);
    await sell.save(); // Save the document first

    // console.log(data);

    // Populate the fields correctly
    await sell.populate([
        { path: 'product' },
        { path: 'soldBy', select: 'name' }
    ]);

    const { paymentDetails } = data;
    const accounts = await Accounts.findOne({}).sort({ createdAt: -1 });
    const methods = Object.keys(paymentDetails);

    for (const method of methods) {
        const amount = paymentDetails[method];
        accounts[method] += amount;
        await accounts.save();

        if(method === "due" && amount > 0) {
            await Due.create({
                customerName: data.customerDetails.customerName,
                dueType: "customer",
                totalAmount: amount,
                paidAmount: 0,
                dueAmount: amount,
                mobileNo: data.customerDetails.mobileNo,
                paidDate: data.dueDate,
            })
        }
    }

    const product = await Products.findById(data.product);
    product.quantity -= data.quantity;
    await product.save();


    return sell;
};
module.exports = addSell;


