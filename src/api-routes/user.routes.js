module.exports = app => {

    const user = require("../controllers/user.controller.js");

    app.get("/inscription", user.inscription);
    app.post("/inscription", user.createUser);

    app.get("/connection", user.connection);


}