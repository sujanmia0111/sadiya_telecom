const {Schema, model} = require('mongoose');

const date = new Date();

const sellSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // branch: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Branch',
    //     required: true
    // },
    // customer: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Customer',
    //     required: true
    // },
    date: {
        type: Date,
        default: date.toLocaleDateString()
    },
    soldBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    //soldBy: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true});

module.exports = model('Sell', sellSchema);