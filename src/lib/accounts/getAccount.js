const Accounts = require('@root/models/accounts');

const getAccount = async () => {
    const account = await Accounts.find({}).lean().exec();
    return account;
};

module.exports = getAccount;