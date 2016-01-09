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


exports.getMataKuliah = function(req, res) {
    db.query('SELECT * from mata_kuliah' ,function (err, mataKuliah) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        console.log(mataKuliah);
        res.send(JSON.stringify(mataKuliah));
    });
};

exports.addMataKuliah = function(req, res) {
    var idmata_kuliah = req.body.id ;
    var nama = req.body.nama ;
    var sks = req.body.sks ;

    db.query('INSERT INTO mata_kuliah (idmata_kuliah, nama, sks) VALUES ("'+idmata_kuliah+'", "'+nama+'", "'+sks+'")', function(err, data){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};