require('dotenv').config()
const db = require('../models/db.model');
const UserModel = db.User;
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { fullName, username, password, email, iam_role } = req.body;

    try {
        const newUser = await UserModel.create({
            fullName,
            username,
            email,
            iam_role,
            hash_pwd: md5(password)
        });

        delete newUser.hash_pwd;

        res.status(201).json(newUser)
    } catch (error) {
        
    }
};

const signin = async (req, res) => {
    const {username} = req.body;
    const token = jwt.sign({username:username }, process.env.SECRET_KEY, {
        expiresIn: 86400,
    });
    const foundUser = await UserModel.findOne({
        where: {
            username: username
        }
    })
    res.status(200).json({
        username: foundUser.username,
        email: foundUser.email,
        access_token: token
    })
}


module.exports = {
    signup,
    signin
};