
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            cataegoryName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 3,
                    max: 50,
                }
            },
        },
        {
            timestamp: true,
        }
    );

    return Category;
}