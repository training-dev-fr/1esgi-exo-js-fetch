const userData = require("../data/user.json");
const productModel = require("../model/product.model");
const fs = require("fs");

/**
 * Create user and save it in json data file
 * @param {*} user the user to save
 */
exports.create = (user) => {
    user.id = ++userData.id;
    userData.list.push(user);
    fs.writeFileSync("data/user.json", JSON.stringify(userData, null, 4));
}

/**
 * Get one user by email
 * @param {String} email email of user to find
 * @returns the user if found, or error if it does not exist
 */
exports.getOne = (email) => {
    let user = userData.list.find(user => user.email === email);
    if (user) {
        return user;
    } else {
        throw new Error("Utilisateur non trouvé");
    }
}

/**
 * Add a product to user basket
 * @param {Object} product product to add
 * @returns full basket if product was added
 * @throws error if product was not found
 */
exports.addBasket = (product, userId) => {
    let user = userData.list.find(user => user.id === userId);
    if (user) {
        try {
            let p = productModel.getOne(product.id);
            Object.assign(product,p);
            if(p){
                user.basket.push(product);
                fs.writeFileSync("data/user.json", JSON.stringify(userData, null, 4));
                return user.basket;
            }
        }
        catch (error) {
            throw error;
        }
    } else {
        throw new Error("Utilisateur non trouvé");
    }
}
