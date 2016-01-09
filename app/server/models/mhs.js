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


exports.getMahasiswa = function(req, res) {
    db.query('SELECT * from mahasiswa ' ,function (err, mhs) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
      // console.log(mhs);
      res.send(JSON.stringify(mhs));
    });
};


exports.getDataMahasiswa = function(req, res) {
  var token = req.headers['x-token'];
  if (token) {
    jwt.verify(token, secret.secretToken, function(err, data){
      if (err) {
        console.log(err);
        res.send(502);
      } else
      //console.log(data);
        db.query('SELECT * from mahasiswa where NPM = "'+data.id+'" ' ,function (err, mhs) {
          if (err) {
            console.log(err);
            return res.send(401);
          }
          // console.log(mhs);
          res.send(JSON.stringify(mhs));
        });
    });
  }
};


exports.addMahasiswa = function(req, res) {
    var NPM = req.body.npm ;
    var nama = req.body.nama ;

    db.query('INSERT INTO mahasiswa (NPM, nama) VALUES ("'+NPM+'", "'+nama+'")', function(err, mhs){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};
