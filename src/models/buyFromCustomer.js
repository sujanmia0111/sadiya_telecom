const {Schema, model} = require('mongoose');


const date = new Date();

const buyFromCustomerSchema = new Schema({
    branchDetails: {
        type: String,      
        required: true
    },
    reference: {
        type: String,        
        required: true
    },
    customerDetails: {
        name: {
            type: String,
            required: true
        },
        fatherName: {
            type: String,
            required: true
        },
        motherName: {
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
        nidNo: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: String,
            required: true
        }
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
    buyType: {
        type: String,
        enum: ['exchange', 'sale'],
    },
    // checkedBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    checkedBy: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: date.toLocaleDateString()
    }

},{ timestamps: true});

module.exports = model('BuyFromCustomer', buyFromCustomerSchema);