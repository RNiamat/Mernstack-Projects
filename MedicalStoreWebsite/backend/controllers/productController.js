const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const addProduct = async (req, res) => {
    const { name, price, stock, category, description } = req.body;
    const newProduct = new Product({ name, price, stock, category, description });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
};

module.exports = { getAllProducts, addProduct };
