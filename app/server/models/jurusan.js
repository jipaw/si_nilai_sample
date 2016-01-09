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


exports.getJurusan = function(req, res) {
    db.query('SELECT * from jurusan' ,function (err, jurusan) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        console.log(jurusan);
        res.send(JSON.stringify(jurusan));
    });
};

exports.addJurusan = function(req, res) {
    var idJurusan = req.body.id ;
    var nama = req.body.nama ;

    db.query('INSERT INTO jurusan (idJurusan, nama) VALUES ("'+idJurusan+'", "'+nama+'")', function(err, mhs){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};
