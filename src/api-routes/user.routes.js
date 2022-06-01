const user = require("../controllers/user.controller.js");

module.exports = app => {
    // ok
    app.get("/connexion", user.formConnexion);
    app.post("/connexion", user.connexion);

    // en cours
    app.get("/inscription", user.formInscription);
    app.post("/inscription", user.inscription);
}