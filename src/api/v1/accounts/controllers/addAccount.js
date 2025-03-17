const accountService = require('@root/lib/accounts');

const addAccount = async (req, res, next) => {
    try {
        const account = await accountService.addAccount(req.body);
        res.status(200).json(account);
    } catch (error) {
        next(error);
    }
}

module.exports = addAccount;