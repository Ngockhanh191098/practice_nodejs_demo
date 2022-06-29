const db = require('../models/db.model');
const ProductModel = db.Product;

const getProduct = async (req, res) => {
    const userId = req.param;
    try {
        const product = ProductModel.findOne({
            where: {
                userId: userId
            }
        });

        if (!product) {
            return res.status(404).json({message: "Not found product"})
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message: "Server is error"})
    }
}


module.exports = getProduct;