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


exports.getKelas = function(req, res) {
    db.query('SELECT * from kelas' ,function (err, kelas) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        console.log(kelas);
        res.send(JSON.stringify(kelas));
    });
};


exports.addKelas = function(req, res) {
    var idKelas = req.body.id ;
    var nama = req.body.nama ;

    db.query('INSERT INTO kelas (idKelas, nama) VALUES ("'+idKelas+'", "'+nama+'")', function(err, mhs){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};
