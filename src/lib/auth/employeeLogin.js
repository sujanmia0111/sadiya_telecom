const userService = require('@root/lib/user');

const { findUserByEmail } = require('../user/index');
const { hashedMatch } = require('../../utils/hashing')
const { badRequest, forbidden } = require('../../utils/error');
const { accessTokenGenerator } = require('../token');

const employeeLogin = async ({email,password}) =>{
    const user = await findUserByEmail(email)
    if(!user){
        throw badRequest('invalid credentials');
        // throw new Error('invalid credentials')
    };
    const matched = await hashedMatch(password,user.password);
    if(!matched){
        throw badRequest('invalid request');
    };

    if(user.role !== 'employee'){
        throw forbidden("access denied! you are....!!!")
    }

    const payload = {
        id: user._id.toString(),
        name: user.name,
    };


    const accessToken = accessTokenGenerator({payload})

    return {
        access_token: accessToken,
        user:{
            ...user._doc, password: ""
        }
    }

}

module.exports = employeeLogin;