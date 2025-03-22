const userService = require('@root/lib/user');

const deleteEmployee = async (req, res, next) => {
    try {
        const employee = await userService.deleteUser(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteEmployee;