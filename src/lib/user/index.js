const User = require("../../models/user");
const config = require("@root/config/config");
const { notFound } = require("@root/utils/error");
const getPagination = require("@root/utils/pagination");
const { generateHashed } = require('@root/utils/hashing')
const { accessTokenGenerator } = require('@root/lib/token');
// const affiliateService = require("@root/lib/affiliate");


// find All User
// const findAllUsers = async ({
//     page = config.page ,
//     limit = config.limit,
//     sortType = config.sort_type,
//     sortBy = config.sort_by,
//     search = config.search
// }) => {
    
//     // making sort string
//     const sortStr = `${sortType === "dsc" ? "-" : ""}${sortBy}`;

//     const pageNumber = parseInt(page, 10);
//     const limitNumber = parseInt(limit, 10);
//     const skip = (pageNumber - 1) * limitNumber;

//     // Create the query object
//     const query = {};
    
//     // If search is not empty, add the regex search condition
//     if (search) {
//         query.name = { $regex: search, $options: "i" };
//     }

//     // finding, sorting and skipping all users
//     const users = await User.find(query)
//         .select("-password")
//         .sort(sortStr)
//         .skip(skip)
//         .limit(limitNumber);

//    // Count total documents matching the query
//     const totalCount = await User.countDocuments(query);

//     // get pagination
//     const pagination = getPagination({
//         page: pageNumber,
//         limit: limitNumber,
//         totalItems: totalCount
//     });

    
        
//     return {
//         pagination,
//         users
//     };
// }

const findAllUsers = async () => {
    const users = await User.find({}).select("-password");
    return users;
}

/**
 * 
 * @param {string} id
 */

const findUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

/**
 * 
 * @param {object} user
 */

const updateUser = async (id,user) => {
    
    const userExist = await findUserById(id);
    if(!userExist){
        throw notFound("User not found");
    }
    const updatePassword = user.password ? await generateHashed(user.password) : userExist.password;
    user.password = updatePassword;
    const updatedUser = await User.findByIdAndUpdate(id, user, {new: true}).select("-password -__v");
    
    return {
        ...updatedUser._doc,
    };
}

/**
 * 
 * @param {param} email 
 * if user found, return user
 * @returns {user}
 * if user not found, return false
 * @returns {false}
 */
const findUserByEmail = async (email) =>{
    const user = await User.findOne({email});
    return user ? user : false;
};

const findUserByPhone = async (phone) =>{
    const user = await User.findOne({phone});
    return user ? user : false;
};

/**
 * 
 * @param {string} email 
 * If user exist, return true else return false
 * @returns { boolean } true or false
 */

const isUserExist = async (email) => {
	const user = await findUserByEmail(email);
	return user ? true : false;
};

const isUserExistByPhone = async (phone) => {
    const user = await findUserByPhone(phone);
    return user ? true : false;
};

/**
 * 
 * @param { object } user
 * @param { string } user.name
 * @param { string } name.email
 * @param { string } name.password
 * @returns { object } user
 * 
 */
const createUser = async({name, email,password,phone='', role = "employee"}) => {

    const hashedPassword = await generateHashed(password);

    const user = new User({name,email,password:hashedPassword,phone,role});
    await user.save();
    return {
        ...user._doc,
        password: ""
    }
}


// delete a user --admin
const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
}

module.exports = {
    findUserByEmail,
    isUserExist,
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser,
    findUserByPhone,
    isUserExistByPhone
}
