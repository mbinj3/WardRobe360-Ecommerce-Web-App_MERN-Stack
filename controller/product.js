const {Product, MenProduct, WomenProduct, BagsProduct, ShoesProduct, AccessoriesProduct, ChildrenProduct} = require('../model/product');


exports.createProduct = async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(400).json(err); 
    } 
}

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }catch(err){
        res.status(400).json(err)
    }
}

exports.getMenProducts = async (req, res) => {
    try{
        const menProducts = await MenProduct.find();
        res.status(201).json(menProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getWomenProducts = async (req, res) => {
    try{
        const womenProducts = await WomenProduct.find();
        res.status(201).json(womenProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getChildrenProducts = async (req, res) => {
    try{
        const childrenProducts = await ChildrenProduct.find();
        res.status(201).json(childrenProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getBagsProducts = async (req, res) => {
    try{
        const bagsProducts = await BagsProduct.find();
        res.status(201).json(bagsProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getShoesProducts = async (req, res) => {
    try{
        const shoesProducts = await ShoesProduct.find();
        res.status(201).json(shoesProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getAccessoriesProducts = async (req, res) => {
    try{
        const accessoriesProducts = await AccessoriesProduct.find();
        res.status(201).json(accessoriesProducts);
    }catch(err){
        res.status(400).json(err);
        console.log(err.message);
    }
}

exports.getProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(201).json(product);
    }catch(err){
        res.status(400).json(err)
    }
}

exports.replaceProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const replacedProduct = await Product.findOneAndReplace({_id:id}, req.body, {returnDocument: 'after'});
        res.status(201).json(replacedProduct)
    }catch(err){
        res.status(400).json(err);
    }
}

exports.updateProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedProduct = await Product.findOneAndUpdate({_id:id}, req.body, {returnDocument: 'after'});
        res.status(201).json(updatedProduct);

    }catch(err){
        res.status(400).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const deletedProduct = await Product.findOneAndDelete({_id:id});
        res.status(201).json(deletedProduct);
    }catch(err){
        res.status(400).json(err);
    }
}