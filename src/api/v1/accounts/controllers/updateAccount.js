const accountService = require('@root/lib/accounts');

const updateAccount = async (req, res, next) => {
    try {
        const account = await accountService.updateAccount(req.params.id, req.body);
        res.status(200).json(account);
    } catch (error) {
        next(error);
    }
}

module.exports = updateAccount;