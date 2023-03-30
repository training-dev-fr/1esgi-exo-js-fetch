const productData = require("../data/product.json");
const fs = require("fs");

/**
 * Retreive all products in data file
 * @returns all products
 */
exports.getAll = () => {
    return productData.list;
}

/**
 * Get one product by name
 * @param {String} name the name of product to find
 * @returns the product if found, or error if it does not exist
 */
exports.getOne = (id) => {
    let product = productData.list.find(product => product.id === id);
    if (product) {
        return product;
    } else {
        throw new Error("Produit non trouvé");
    }
}
