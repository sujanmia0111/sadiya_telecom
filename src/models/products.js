const {Schema, model} = require('mongoose');


const supplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        enum: ["mobile","accessories"],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    rpPrice: {
        type: Number,
        required: true
    },
    buyPrice: {
        type: Number,
        required: true
    },
    sellPrice: {
        type: Number,
        required: true
    },
    supplierDetails: {
        type: supplierSchema,
        default: null
    },
    branch:{
        type: String,
        required: true
    },
    estimatedProfit: {
        type: Number,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true});

module.exports = model('Product', productSchema);