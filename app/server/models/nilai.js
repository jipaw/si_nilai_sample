var mysql = require('mysql');
var userRoles = require('../config/routingConfig').userRoles;
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');

/* establish the database connection */
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'si_nilai'
});

db.connect();

db.query('USE si_nilai');


exports.getNilai = function(req, res) {
  db.query('SELECT * from nilai' ,function (err, nilai) {
    if (err) {
      console.log(err);
      return res.send(401);
    }
    //console.log(nilai);
    res.send(JSON.stringify(nilai));
  });
};

exports.getNilai1 = function(req, res) {
  var token = req.headers['x-token'];
  if(token) {
    jwt.verify(token, secret.secretToken , function(err, data) {
      if (err) {
        console.log(err);
        res.send(502);
      } else {
        console.log(data.id);
        db.query('SELECT * from nilaiSemester WHERE NPM="'+data.id+'" AND semester_berjalan = "'+req.params.semester_berjalan+'"' ,function (err, nilai) {
          if (err) {
            console.log(err);
            return res.send(401);
          }
          //console.log(nilai);
          res.send(nilai);
        });
      }

    });
  }
};

exports.getAllNilai = function(req, res) {
  var token = req.headers['x-token'];
  if(token) {
    jwt.verify(token, secret.secretToken , function(err, data) {
      if (err) {
        console.log(err);
        res.send(502);
      } else {
        console.log(data.id);
        db.query('SELECT * from nilaiSemester WHERE NPM="'+data.id+'" ORDER BY semester_berjalan ', function (err, nilai) {
          if (err) {
            console.log(err);
            return res.send(401);
          }
          //console.log(nilai);
          res.send(nilai);
        });
      }

    });
  }
};

exports.addNilai = function(req, res) {
  var NPM = req.body.npm ;
  var idmata_kuliah = req.body.idmata_kuliah;
  var idSemester = req.body.idSemester ;
  var semester_berjalan = req.body.semester_berjalan;
  var kehadiran = req.body.kehadiran ;
  var tugas = req.body.tugas ;
  var uts = req.body.uts ;
  var uas = req.body.uas ;
  var nilai_akhir = req.body.nilaiAkhir;
  db.query('INSERT INTO nilai (NPM, idmata_kuliah, idSemester, semester_berjalan, kehadiran, tugas, uts, uas, nilai_akhir) VALUES ("'+NPM+'", "'+idmata_kuliah+'",  "'+idSemester+'",  "'+semester_berjalan+'", "'+kehadiran+'", "'+tugas+'", "'+uts+'", "'+uas+'", "'+nilai_akhir+'")', function(err, data){
    if (err) {
      console.log(err);
      return res.send(500);
    }
    else {
      return res.send(200);
    }
  });
};
