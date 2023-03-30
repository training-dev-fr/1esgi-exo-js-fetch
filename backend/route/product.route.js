const express = require("express");
const router = express.Router();
const productController = require("./../controller/product.controller");
const auth = require("./../middleware/auth");


router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/',auth, productController.addBasket);

module.exports = router;