const jwt = require('jsonwebtoken');

const accessTokenGenerator = ({payload,algorithm='HS512',secret = process.env.JWT_ACCESS_TOKEN_SECRET,expiresIn = '7d'}) =>{
    console.log(secret);
    try {
        return jwt.sign(payload,secret,{algorithm,expiresIn})
    } catch (err) {
        console.log(err);
    };

};

const refreshTokenGenerator = (
    {
        payload,
        algorithm = 'HS256',
        secret = process.env.JWT_REFRESH__TOKEN_SECRET,
        expiresIn = '1d'
    }
)=>{
    try {
        return jwt.sign(payload,secret,{algorithm,expiresIn})
    } catch (err) {
        console.log(err.message)
    }
}

const decodeToken = ({token,algorithm='HS512'}) =>{
    try {
        console.log(token);
       return jwt.decode(token) 
    } catch (err) {
        console.log(err)
    }
}

const verifyToken = ({
    token,
    algorithm = 'HS512',
    secret = process.env.JWT_ACCESS_TOKEN_SECRET
}) =>{

    try {
        return jwt.verify(token,secret,{algorithms:[algorithm]})
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    accessTokenGenerator,
    refreshTokenGenerator,
    decodeToken,
    verifyToken
}

