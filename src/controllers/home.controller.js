
exports.home = (req, res) => {
    res.render('pages/index', {data : {title: "Accueil", description: "Accueil du site internet"}});
}
