const db = require('../models/db.model');
const UserModel = db.User;
const { PERMISSION_ADMIN, PERMISSION_MEMBER, PERMISSION_MODERATOR } = require('../config/permission.config');

const isAdmin = async (req, res, next) => {
    const user =  await UserModel.findOne({
        where: { username: req.username  }
    });
    if ( user.iam_role !== PERMISSION_ADMIN) {
        return res.status(401).json({message: "You don't permission!"})
    }
    
    next();

};

const isMember = async (req, res, next) => {
    const user =  await UserModel.findOne({
        where: { username: req.username  }
    });
    console.log(user);
    if ( user.iam_role !== PERMISSION_MEMBER) {
        return res.status(401).json({message: "You don't permission!"})
    }
    next();
}

const isModerator = async (req, res, next) => {
    const user =  await UserModel.findOne({
        where: { username: req.username }
    });

    if ( user.iam_role !== PERMISSION_MODERATOR) {
        return res.status(401).json({message: "You don't permission!"})
    }
    next();
}

module.exports = {
    isAdmin,
    isMember,
    isModerator
};