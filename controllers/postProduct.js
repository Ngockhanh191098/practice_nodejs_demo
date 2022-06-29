const db = require('../models/db.model');
const ProductModel = db.Product;

const postProduct = async (req, res) => {
    const userId = req.params.userId;
    const categoryId = 3;
    const productName = req.body.productName;
    try {
        await ProductModel.create({
            productName: productName,
            userId: userId,
            categoryId: categoryId
        });

        return res.status(201).json({
            message: "add product successfully!",
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postProduct;