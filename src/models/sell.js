const {Schema, model} = require('mongoose');

const date = new Date();

const sellSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    imei: {
        type: String,
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
    paymentDetails: {
        bkash: {
            type: Number,
            default: 0
        },
        nagad: {
            type: Number,
            default: 0
        },
        cash: {
            type: Number,
            default: 0
        },
        dbbl: {
            type: Number,
            default: 0
        },
        bank: {
            type: Number,
            default: 0
        }
    },
    customerDetails: {
        customerName: {
            type: String,
            required: true
        },
        mobileNo: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
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