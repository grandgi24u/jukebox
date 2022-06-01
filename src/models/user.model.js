const sql = require("./db.js");

// constructor
const User = function(user) {
    this.id = user.id;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.email = user.email;
    this.mdp = user.mdp;
};

// create new User
User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

User.getAll = (result) => {
    let query = "SELECT * FROM user";
    sql.query(query, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        "UPDATE user SET nom = ?, prenom = ?, email = ? WHERE id = ?",
        [user.nom, user.prenom, user.email, id],
        (err, res) => {
            if (err) {
                result(null, err);
                return;
            }
            if (res.affectedRows === 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...tutorial });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        if (res.affectedRows === 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM user", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};

User.tryConnect = (values, callback) => {
    sql.query("Select * from user WHERE email = ? and mdp = ?", values, (err, res) => {
        console.log(res.length)
        if(res.length === 0) {
            callback(false);
        }
        callback(true);
    });
};

module.exports = User;

