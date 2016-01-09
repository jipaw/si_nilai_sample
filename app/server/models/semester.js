var mysql = require('mysql');
var userRoles = require('../config/routingConfig').userRoles;

/* establish the database connection */
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'si_nilai'
});

db.connect();

db.query('USE si_nilai');


exports.getSemester = function(req, res) {
    db.query('SELECT * from semester' ,function (err, semester) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
        console.log(semester);
        res.send(JSON.stringify(semester));
    });
};

exports.addSemester = function(req, res) {
  var idSemester = req.body.id ;
  var semester = req.body.nama ;
  var tahun_ajaran = req.body.tahunAjaran ;

  db.query('INSERT INTO semester (idSemester, semester, tahun_ajaran) VALUES ("'+idSemester+'", "'+semester+'", "'+tahun_ajaran+'")', function(err, data){
    if (err) {
      console.log(err);
      return res.send(500);
    }
    else {
      return res.send(200);
    }
  });
};
