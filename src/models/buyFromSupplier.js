const {Schema, model} = require('mongoose');

const buyFromSupplierSchema = new Schema({
    branchDetails: {
        type: String,
        required: true
    },
    supplierDetails: {
        type: String,
        required: true
    },
    productDetails: {
        productType: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        imei: {
            type: String,
            required: true
        }
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    checkedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

module.exports = model('BuyFromSupplier', buyFromSupplierSchema);