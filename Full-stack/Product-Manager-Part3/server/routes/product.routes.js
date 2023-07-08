const ProductController = require("../controllers/product.controller");
console.log("productcontroller is :",ProductController)

module.exports = (app) =>{
    app.get("/api/product",ProductController.readALL)
    app.post("/api/product/new",ProductController.createNew)
    app.put("/api/product/update/:id",ProductController.updateExisting)
    app.get("/api/product/:id",ProductController.findOneSingleProduct)
    app.delete("/api/product/delete/:id",ProductController.delete)
}