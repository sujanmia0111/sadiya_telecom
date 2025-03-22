const Accounts = require('@root/models/accounts');

const getAccount = async () => {
    const account = await Accounts.find({}).sort({ createdAt: -1 }).limit(1);
    return account;
};

module.exports = getAccount;