//js
const User = require("../models/user.model");

// GET /connexion
const formConnexion = (req, res) => {
    res.render('pages/connexion', {
        data : {title: "Connexion", state: "Vous n'êtes pas connecté"}
    });
}

// POST /connexion
const connexion = (req, res) => {
    // check if the body is empty or not
    if (!req.body) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide !"
        });
    }
    User.tryConnect([req.body.email, req.body.mdp], (err) => {
        if(err) {
            res.render('pages/connexion', {
                data : {title: "Connexion", state: "Vous êtes connecté"}
            });
        } else {
            res.render('pages/connexion', {
                data : {title: "Connexion", state: "Erreur pendant la connexion"}
            });
        }
    });
}

// GET /inscription
const formInscription = (req, res) => {
    res.render('pages/inscription', {
        data : {title: "Inscription", description: "Inscription au service"}
    });
}

// POST /inscription
const inscription = (req, res) => {
    // check if the body is empty or not
    if (!req.body) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide !"
        });
    }
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        mdp: req.body.mdp
    })
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
    return;
}


module.exports = {
    formConnexion,
    connexion,
    formInscription,
    inscription,
};