var mysql = require('mysql');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var userRoles = require('../config/routingConfig').userRoles;
var accesLevels = require('../config/routingConfig').accessLevels;

/* establish the database connection */
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'si_nilai'
});
 
db.connect();

db.query('USE si_nilai');


exports.getDosen = function(req, res) {
    db.query('SELECT * from dosen' ,function (err, dosen) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        // console.log(dosen);
        res.send(JSON.stringify(dosen));
    });
};

exports.addDosen = function(req, res) {
    var NIDN = req.body.nidn ;
    var nama = req.body.nama ;

    db.query('INSERT INTO dosen (NIDN, nama) VALUES ("'+NIDN+'", "'+nama+'")', function(err, mhs){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};
