require('dotenv').config()
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    // if token not found
    if (!token) {
        return res.status(403).json({message: "Forbidden! Requires a token to access"});
    }

    // have token in headers -> verify token
    await jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Unauthorized!"});
        }
        req.username = decoded.username;
        next();
    })
}

module.exports = verifyToken;