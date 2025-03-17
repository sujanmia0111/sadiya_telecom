const userService = require('@root/lib/user');

const updateEmployee = async ( req, res, next ) => {
    try {
        const employee = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

module.exports = updateEmployee;