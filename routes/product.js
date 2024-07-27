const express = require('express');
const productController = require('../controller/product');

const router = express.Router();


router.post('/products', productController.createProduct)

.get('/products', productController.getAllProducts)

.get('/categories/men',
productController.getMenProducts)

.get('/categories/women', productController.getWomenProducts)

.get('/categories/children', productController.getChildrenProducts)

.get('/categories/bags', productController.getBagsProducts)

.get('/categories/shoes', productController.getShoesProducts)

.get('/categories/accessories', productController.getAccessoriesProducts)

.get('/products/:id', productController.getProduct)

.put('/products/:id', productController.replaceProduct)

.patch('/products/:id', productController.updateProduct)

.delete('/products/:id', productController.deleteProduct)

exports.router = router