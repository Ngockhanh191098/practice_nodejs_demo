
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            fullName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 3,
                    max: 25,
                }
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 3,
                    max: 12,
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            hash_pwd: {
                type: DataTypes.STRING,
                allowNull: false
            },
            iam_role: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamp: true,
        }
    );

    return User;
}