const ProductController = require("../controllers/product.controller");
console.log("productcontroller is :",ProductController)

module.exports = (app) =>{
    app.get("/api/product",ProductController.readALL)
    app.post("/api/product",ProductController.createNew)
    app.put("/api/product/:id",ProductController.updateExisting)
    app.get("/api/product/:id",ProductController.findOneSingleProduct)
    app.delete("/api/product/:id",ProductController.delete)
}