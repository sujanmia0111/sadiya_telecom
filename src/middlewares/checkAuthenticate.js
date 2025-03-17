const tokenService = require('@root/lib/token');
const userService = require('@root/lib/user');
const { authenticationError, badRequest } = require('@root/utils/error');

const checkAuthenticate = async (req, _res, next) => {
    try {
        if (!req.headers || !req.headers.authorization) {
            throw badRequest('Authorization header is missing');
        }
        
        const parts = req.headers.authorization.split(' ');
        
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            throw badRequest('Invalid authorization format. Expected format: Bearer <token>');
        }
        
        const token = parts[1];
        // console.log(token);
        // console.log(tokenService.decodeToken({token}));
        const decoded = tokenService.verifyToken({ token });

        
        const user = await userService.findUserById(decoded.id);
        
        if (!user) {
            return next(authenticationError('User authentication failed, login required'));
        }
        
        req.user = { ...user._doc, id: user._id, password: "" };
        next();
    } catch (err) {
        next(authenticationError(err.message || "User authentication failed, login required"));
    }
};

module.exports = { checkAuthenticate };






















