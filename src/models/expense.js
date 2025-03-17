const {Schema, model} = require('mongoose');

const expenseSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
}, { timestamps: true});

module.exports = model('Expense', expenseSchema);