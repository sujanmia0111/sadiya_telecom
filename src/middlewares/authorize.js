
const authorize = (roles = []) => (req, res, next) => {

    if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied: you are not authorized' });
    };
    next();
    
};

module.exports = {authorize};