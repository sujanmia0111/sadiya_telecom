const {Schema, model} = require('mongoose');

const accountsSchema = new Schema({
    cash: {
        type: Number,
        required: true
    },
    bank: {
        type: Number,
        required: true
    },
    nagad: {
        type: Number,
        required: true
    },
    bkash: {
        type: Number,
        required: true
    },
    dbbl: {
        type: Number,
        required: true
    }
}, { timestamps: true});

module.exports = model('Accounts', accountsSchema);