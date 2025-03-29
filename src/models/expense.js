const {Schema, model} = require('mongoose');


const date = new Date();

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
        default: date.toISOString()
    },
    expenseBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true});

module.exports = model('Expense', expenseSchema);