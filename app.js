const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// css and js charge
app.use('/css', express.static(path.join(__dirname, 'addons/css')));
app.use('/js', express.static(path.join(__dirname, 'addons/js')));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static('public'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/api-routes/home.routes.js")(app);
require("./src/api-routes/user.routes.js")(app);

// database connection
const connection = require("./src/models/db");
connection.connect((err) => {
    if (err) throw err;
    console.log(`Database ${process.env.DB_NAME} : connecté !`);
});

// set port, listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server lancer sur le port : ${process.env.PORT}`);
});
