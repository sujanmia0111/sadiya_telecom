const accountService = require('@root/lib/accounts');

const getAccount = async (req, res, next) => {
    try {
        const account = await accountService.getAccount();
        res.status(200).json(account);
    } catch (error) {
        next(error);
    }
};

module.exports = getAccount;