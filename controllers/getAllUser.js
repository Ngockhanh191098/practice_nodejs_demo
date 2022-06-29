const db = require('../models/db.model');
const UserModel = db.User;

const getAllUser = async (req, res) => {
    try {
        const user = await UserModel.findAll();

        if (!user) {
            return res.status(404).json({message: "not found user!"});
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: "Server is error!"})
    }

}

module.exports = getAllUser;