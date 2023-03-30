const Product = require("./../model/product.model");
const User = require("../model/user.model");
const fs = require("fs");

exports.getAll = (req, res, next) => {
    let productList = Product.getAll();
    res.status(200).json(productList);
}

exports.getOne = (req, res, next) => {
    try {
        let product = Product.getOne(Number.parseInt(req.params.id));
        if (product) {
            res.status(200).json(product);
        }
    } catch(error) {
        res.status(404).json({ message: "Produit non trouvé" });
    }
}

exports.addBasket = (req, res, next) => {
    try {
        let basket = User.addBasket(req.body.product,req.token.id);
        res.status(201).json(basket);
    } catch (error) {
        res.status(500).json(error.message);
    }

}