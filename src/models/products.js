const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String,
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
    // branch: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Branch',
    //     required: true
    // },
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