module.exports = function(app){
    var restorationLocalController = require("./controller/restorationLocalController");
    var orderController = require("./controller/orderController");
    var userController = require("./controller/userController");
    var waiterController = require("./controller/waiterController");
    var productController = require("./controller/productController");
    var tableController = require("./controller/tableController");
    var ratingController = require("./controller/ratingController");

    //API routes

    //locals
    app.get("/locals", restorationLocalController.getAllLocals);
    app.get("/locals/:id", restorationLocalController.getLocalById);
    app.post("/locals", restorationLocalController.addRestorationLocal);
    app.put("/locals/:id", restorationLocalController.updateRestorationLocal);
    app.delete("/locals/:id", restorationLocalController.removeRestorationLocal);


    //orders
    app.get("/orders", orderController.getAllOrders);
    app.get("/orders/table/:tableId", orderController.getOrderByTable);
    app.get("/orders/time/:before", orderController.getOrderBetweenDates)
    app.get("/orders/:id", orderController.getOrderById);
    app.post("/orders", orderController.addOrder);
    app.put("/orders/:id", orderController.updateOrder);
    app.delete("/orders/:id", orderController.removeOrder);


    //users
    app.get("/users", userController.getAllUsers);
    app.get("/users/:id", userController.getUserById);
    app.post("/users", userController.addUser);
    app.put("/users/:id", userController.updateUser);
    app.delete("/users/:id", userController.deleteUser);

    //products
    app.get("/products", productController.getAllProducts);
    app.get("/products/:id", productController.getProductById);
    app.post("/products", productController.addProduct);
    app.put("/products/:id", productController.updateProduct);
    app.delete("/products/:id", productController.removeProduct);

    //tables
    app.get("/tables", tableController.getAllTables);
    app.get("/tables/:id", tableController.getTableById);
    app.get("/tables/waiter/:waiterId", tableController.getTablesByWaiter);
    app.post("/tables", tableController.addTable);
    app.put("/tables/:id", tableController.updateTable);
    app.delete("/tables/:id", tableController.removeTable);

    //waiter
    app.get("/waiters", waiterController.getAllWaiters);
    app.get("/waiters/:id", waiterController.getWaiterById);
    app.post("/waiters", waiterController.addWaiter);
    app.delete("/waiters/:id", waiterController.removeWaiter);

    //rating
    app.get("/ratings", ratingController.getAllRatings);
    app.get("/ratings/:id", ratingController.getRatingById);
    app.get("/ratings/user/:userId", ratingController.getRatingsByUserId);
    app.get("/ratings/local/:localId", ratingController.getRatingsByLocalId);
    app.get("/ratings/order/:orderId", ratingController.getRatingsByOrderId);
    app.post("/ratings", ratingController.addRating);  
    app.put("/ratings/:id", ratingController.updateRating);
    app.delete("/ratings/:id", ratingController.removeRating);

}