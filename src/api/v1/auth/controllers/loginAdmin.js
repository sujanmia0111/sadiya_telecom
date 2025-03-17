const authService = require('@root/lib/auth');

const loginAdmin = async ( req, res, next ) => {
    const { email, password } = req.body;
    try {
        const data = await authService.loginAdmin({email,password});

        const response = {
            access_token: data.access_token,
            user: data.user
        };

        

        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}

module.exports = loginAdmin;