
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            productName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 3,
                    max: 100
                }
            },
        },
        {
            timestamp: true,
        }
    );

    return Product;
}