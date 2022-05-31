

exports.inscription = (req, res) => {
    res.render('pages/inscription', {data : {title: "Inscription", description: "Inscription au service"}})
}

exports.createUser = (req, res) => {

}

exports.connection = (req, res) => {
    res.render('pages/connection', {data : {title: "Connection", description: "Page de connection"}})
}