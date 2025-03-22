const {Schema, model} = require('mongoose');


const date = new Date();

const customerSchema = new Schema({
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
})

const paymentDetailsSchema = new Schema({
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
    }
});



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
        type: customerSchema,
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
    paymentDetails: {
        type: paymentDetailsSchema,
        required: true
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


// name: {
//     type: String,
//     required: true
// },
// fatherName: {
//     type: String,
//     required: true
// },
// motherName: {
//     type: String,
//     required: true
// },
// address: {
//     type: String,
//     required: true
// },
// mobileNo: {
//     type: String,
//     required: true
// },
// email: {
//     type: String,
//     required: true
// },
// nidNo: {
//     type: String,
//     required: true
// },
// dateOfBirth: {
//     type: String,
//     required: true
// }