const { findUserByPhone } = require('../user/index');
const { hashedMatch } = require('../../utils/hashing')
const { badRequest } = require('../../utils/error');
const { accessTokenGenerator } = require('../token');

const login = async ({phone,password}) =>{
    const user = await findUserByPhone(phone)
    if(!user){
        throw badRequest('invalid credentials');
        // throw new Error('invalid credentials')
    };
    const matched = await hashedMatch(password,user.password);
    if(!matched){
        throw badRequest('invalid request');
    };

    const payload = {
        id: user.id,
        name: user.name,
    };

    const accessToken = accessTokenGenerator({payload});

    return {
        access_token: accessToken,
        data: {
            ...user._doc, password: ""
        }
    }

}

module.exports = login;