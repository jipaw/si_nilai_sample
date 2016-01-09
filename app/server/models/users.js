"use strict";

var mysql = require('mysql');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var userRoles = require('../config/routingConfig').userRoles;
//var accesLevels = require('../config/routingConfig').accessLevels;

/* establish the database connection */
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'si_nilai'
});

db.connect();

db.query('USE si_nilai');

function encryptPassword(plainText) {
return crypto.createHash('sha256').update(plainText).digest('hex');
}

exports.getUser = function(req, res) {
    var token = req.headers['x-token'];
    if(token) {
        jwt.verify(token, secret.secretToken , function(err, data) {
            if (err) {
                console.log(err);
                res.send(502);
            } else {
              console.log(data.id);
              db.query('SELECT * FROM users WHERE username ="' + data.id + '"', function (err, user) {
                console.log(user);
                var userRole = null;
                if (user[0].role == "admin") {
                  userRole = userRoles.admin;
                } else {

                  userRole = userRoles.user;
                }
                return res.json({token: token, name: user[0].username, userRole: userRole});
              });
            }

        });
    }
};

exports.login = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    if (username == '' || password == '') { 
        return res.send(401);
    }
    var compare = encryptPassword(password);
    db.query('SELECT * from users WHERE username ="'+username+'"' ,function (err, user) {
        if (err) {
            console.log(err);
            return res.send(401);
        }

        if (user ==  undefined || user[0].password !== compare ) {
            console.log("Attempt failed to login with " + user[0].username);
            return res.send(401);
        }
            else {
                var userRole = null;
                if (user[0].role == "admin") {
                    userRole = userRoles.admin;
                } else {
                    userRole = userRoles.user;
                }
                console.log(user);
                var newToken = jwt.sign({id: user[0].username}, secret.secretToken, { expiresInMinutes: 3600*60 });
                return res.json({ token:newToken, name: user[0].username, userRole:userRole});
            }

    });
};

exports.register = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';
    var password2 = req.body.password2 || '';
    var email =  req.body.email || '';
    var name = req.body.name || '';
    var role = req.body.role || '';

    if (username == '' || password == '' || password != password2) {
        return res.send(400);
    }
    var dbpassword = encryptPassword(password);

    db.query('INSERT INTO users (username, password, email, name, role) VALUES ("'+username+'", "'+dbpassword+'","'+email+'","'+name+'","'+role+'")', function(err ){
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};

exports.logout = function(req, res) {
    if (req.user) {
        //tokenManager.expireToken(req.headers);
        delete req.user;
        return res.send(200);
    }
    else {
        return res.send(401);
    }
};

exports.update = function(req, res) {
  var token = req.headers['x-token'];
  if(token) {
    jwt.verify(token, secret.secretToken , function(err, data) {
      if (err) {
        console.log(err);
        res.send(502);
      } else {
        //console.log(data.id);
        var password = req.body.password;
        // UPDATE `si_nilai`.`users` SET `name`='fauzi' WHERE `_id`='16';
        db.query('UPDATE users SET password = "' + encryptPassword(password) + '" WHERE username = "' + data.id + '"', function (err ) {
          if (err) {
            console.log(err);
            return res.send(500);
          }
          else {
            return res.send(200);
          }
        });
      }
    });
  }
};

exports.reset = function(req, res) {
  var token = req.headers['x-token'];
  if(token) {
    jwt.verify(token, secret.secretToken , function(err, data) {
      if (err) {
        console.log(err);
        res.send(502);
      } else {
        //console.log(data.id);
        var username = req.body.username;
        var password = req.body.password;
        // UPDATE `si_nilai`.`users` SET `name`='fauzi' WHERE `_id`='16';
        db.query('UPDATE users SET password = "' + encryptPassword(password) + '" WHERE username = "' + username+ '"', function (err ) {
          if (err) {
            console.log(err);
            return res.send(500);
          }
          else {
            return res.send(200);
          }
        });
      }
    });
  }
};
