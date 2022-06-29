const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = require('./product.model') (sequelize, DataTypes);
db.User = require('./user.model') (sequelize, DataTypes);
db.Category = require('./category.model') (sequelize, DataTypes);

db.User.hasMany(db.Product, {
    foreignKey: {
        name: "userId",
    },
    as: "products"
});
db.Product.belongsTo(db.User, {
    foreignKey: {
        name: "userId",
    },
    as: "user"
});

db.Category.hasMany(db.Product, {
    foreignKey: {
        name: "categoryId",
    },
    as: "products"
});
db.Product.belongsTo(db.Category, {
    foreignKey: {
        name: "categoryId",
    },
    as: "category"
})


db.User.sync();
db.Category.sync();
db.Product.sync();

module.exports = db;