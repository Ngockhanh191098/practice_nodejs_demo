const md5 = require('md5');
const db = require('../models/db.model');
const UserModel = db.User;

const veryfiSignup = async (req, res, next) => {
    const { username, email } = req.body;
    try {
        const foundUser = await UserModel.findOne({
            where: {
                username,
                email,
            }
        });
    
        if (foundUser) {
            return res.status(400).json('User  or email is already exist!');
        }
    
        next();
    } catch (error) {
        return res.status(500).json('Server got error when create new user!')
    }
};

const veryfiSignin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const found = await UserModel.findOne({
            where: {
                username: username
            }
        });
        if (!found) {
            return res.status(404).json({message: "Not found user!"});
        }

        if( md5(password) !== found.hash_pwd) {
            return res.status(401).json({message: "Your password invalid!"});
        }

        next()
    } catch (error) {
        return res.status(500).json({message: "Server is error!"})
    }
}


module.exports = {
    veryfiSignup,
    veryfiSignin
}