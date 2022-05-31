const sql = require("./db.js");

// constructor
const User = (user) => {
    this.email = user.email;
    this.name = user.name;
};