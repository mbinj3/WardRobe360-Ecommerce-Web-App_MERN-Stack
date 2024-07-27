const mongoose = require('../configuration/dbConfig');
const {Schema} = mongoose;


const productSchema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number, 
    stock: Number,
    thumbnail: String,
    images: [String]
})

const Product = mongoose.model('Product', productSchema, 'products');

const MenProduct = mongoose.model('MenProduct', productSchema, 'men');

const WomenProduct = mongoose.model('WomenProduct', productSchema, 'women');

const ChildrenProduct = mongoose.model('ChildrenProduct', productSchema, 'children');

const BagsProduct = mongoose.model('BagsProduct', productSchema, 'bags');

const ShoesProduct = mongoose.model('ShoesProduct', productSchema, 'shoes');

const AccessoriesProduct = mongoose.model('AccessoriesProduct', productSchema, 'accessories');

module.exports = {Product, MenProduct, WomenProduct, ChildrenProduct, BagsProduct, ShoesProduct, AccessoriesProduct};