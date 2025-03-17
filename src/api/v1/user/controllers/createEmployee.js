const userService = require('@root/lib/user');

const createEmployee = async (req, res, next) => {
    try {
        const employee = await userService.createUser(req.body,role="employee");
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

module.exports = createEmployee;