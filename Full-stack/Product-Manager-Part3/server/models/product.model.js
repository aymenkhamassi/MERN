const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"{PATH} is required"],
        minlength: [2,"{PATH} must be at least 2 chars"]
    },
    price: {
        type: String,
        required :[true,"{PATH} is required"],
    },
    description: {
        type: String,
        required :[true,"{PATH} is required"]
    }

},{timestamps:true});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;