const Accounts = require('@root/models/accounts');

const updateAccount = async (id, data) => {
    const account = await Accounts.findByIdAndUpdate(id, data, {new:true});
   
    // await account.save();
    return account;
}

module.exports = updateAccount