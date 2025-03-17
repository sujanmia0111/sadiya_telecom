const userService = require('@root/lib/user');

const getEmployees = async (req, res, next) => {
    try {
        const employees = await userService.findAllUsers();
        res.status(200).json(employees);
    } catch (error) {
        next(error);
    }
};

module.exports = getEmployees;