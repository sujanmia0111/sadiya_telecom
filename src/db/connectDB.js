const mongoose = require('mongoose');
const {createOrReplaceAdmin} = require('@root/lib/auth/createOrReplaceAdmin');


let connectionURI = process.env.DB_URI;

// replace the
// connectionURI = connectionURI.replace('<username>', process.env.DB_USERNAME);
// connectionURI = connectionURI.replace('<password>', process.env.DB_PASSWORD);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectionURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

       
        // const admin = await createOrReplaceAdmin({
        //     name: 'Morad Hosen Polash',
        //     email: 'polash0111@gmail.com',
        //     password: 'polash0111@',
        //     phone: "01714-791102"
        // });

        // console.log(admin.message);

    } catch (error) {    
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;