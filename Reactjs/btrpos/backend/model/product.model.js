const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname: {type: String, required: true },
    description: {type: String, required: true },
    quantity: {type: Number, required: true },
    price: {type: Number, required: true },   
    cost: {type: Number, required: true},
    productcode: {type: String, required: true },    
}, {
    timestamp: true,
}); 


const product = mongoose.model('Product', productSchema);

module.exports = product; 
