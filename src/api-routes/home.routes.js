module.exports = app => {

    const basic = require("../controllers/home.controller.js");

    app.get("/", basic.home);

}