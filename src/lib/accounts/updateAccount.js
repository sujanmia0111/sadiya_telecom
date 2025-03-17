const Accounts = require('@root/models/accounts');

const updateAccount = async (id, data) => {
    const account = await Accounts.findById(id);
    account.cash += data.cash;
    account.bank += data.bank;
    account.nagad += data.nagad;
    account.bkash += data.bkash;
    account.dbbl += data.dbbl;
    await account.save();
    return account;
}

module.exports = updateAccount