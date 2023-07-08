const Product = require("../models/product.model");
console.log(Product)


//Read All

module.exports.readALL = (req, res) => {
    Product.find()
        .then((allDaProduct) => {
            res.json(allDaProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


//Create

module.exports.createNew = (req, res) => {
    Product.create(req.body)
        .then(newlyCreated => {
            res.json({ Product: newlyCreated })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

//Update

module.exports.updateExisting = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true })
        .then(updatedProduct => {
            res.json({ Product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


//Read One
           
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ Product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



//Delete
module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}
           