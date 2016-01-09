// modules =================================================
var express        = require('express');
var app            = express();
var morgan         = require('morgan');
var bodyParser     = require('body-parser');


// configuration ===========================================

// config files
//var db = require('./app/server/libs/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(morgan());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(express.static(__dirname + '/app/public'));  // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/server/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
// console.log('Magic happens on port ' + port);            // shoutout to the user
exports = module.exports = app;                         // expose app
