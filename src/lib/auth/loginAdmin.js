const { findUserByEmail } = require('../user/index');
const { hashedMatch } = require('../../utils/hashing')
const { badRequest, forbidden } = require('../../utils/error');
const { accessTokenGenerator } = require('../token');

const loginAdmin = async ({email,password}) =>{
    const admin = await findUserByEmail(email)
    if(!admin){
        throw badRequest('invalid credentials');
        // throw new Error('invalid credentials')
    };
    const matched = await hashedMatch(password,admin.password);
    if(!matched){
        throw badRequest('invalid request');
    };

    if(admin.role !== 'admin'){
        throw forbidden("access denied! you are....!!!")
    }

    const payload = {
        id: admin._id.toString(),
        name: admin.name,
    };


    const accessToken = accessTokenGenerator({payload})

    return {
        access_token: accessToken,
        user:{
            ...admin._doc, password: ""
        }
    }

}

module.exports = loginAdmin;