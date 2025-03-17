const Accounts = require('@root/models/accounts');

const addAccount = async (data) => {
    const account = await Accounts.create(data);
    return account;
}

module.exports = addAccount;
