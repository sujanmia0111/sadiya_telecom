const { isUserExist, createUser,isUserExistByPhone } = require('@root/lib/user/index');
const { badRequest } = require('@root/utils/error')
const { generateHashed } = require('@root/utils/hashing')
const { accessTokenGenerator } = require('@root/lib/token');
// const { generateUserId } = require('@root/utils/generateUniqueCode');
const register = async ({name,email,password,phone}) =>{
    const userExist = await isUserExist(email)
    const userExistByPhone = await isUserExistByPhone(phone);
    if(userExist || userExistByPhone){
        throw badRequest('user Already exist with this email or phone');
    }
    password = await generateHashed(password);
    const userId = await generateUserId(6);
    
    const user = await createUser({userId:userId,name,email,password,phone});
     
    // to generate access_token
    const payload = {
        id: user.id,
        name: user.name
    };

    const access_token = accessTokenGenerator({payload});

    return {
        access_token,
        data: {
            ...user._doc,
            password: ""
        }
    }
}

module.exports = register;