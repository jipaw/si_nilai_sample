var users = require('../server/models/users');
var mhs = require('../server/models/mhs');
var dosen = require('../server/models/dosen');
var mataKuliah = require('../server/models/mataKuliah');
var kelas = require('../server/models/kelas');
var jurusan = require('../server/models/jurusan');
var semester = require('../server/models/semester');
var nilai = require('../server/models/nilai');
/*var secret = require('../server/config/secret');
var jwt = require('express-jwt');
var tokenManager = require('../server/config/token_manager');
var formDaftar = require('../server/reports/formDaftar');
var formNilai = require('../server/reports/formNilai');
var formAbsen = require('../server/reports/formAbsen');
var khsMhs = require('../server/reports/khsMhs');
var lapBulanan = require('../server/reports/lapBulanan');
var lapPesertaDidik = require('../server/reports/lapPesertaDidik');
var lapOrangtuaPesertaDidik = require('../server/reports/lapOrangtuaPesertaDidik');*/



module.exports = function(app) {

    app.post('/user', users.register);
    app.get('/user', users.getUser);
    app.post('/update', users.update);
    app.post('/reset', users.reset);
    //app.post('/registerUser', users.registerUser);
    //Login
    app.post('/login', users.login);
    //Logout
    app.get('/logout', users.logout);

    //Get all mahasiswa
    app.get('/admin/get/mahasiswa', mhs.getMahasiswa );
    app.get('/admin/get/mahasiswa/data', mhs.getDataMahasiswa );
    app.post('/admin/post/mahasiswa', mhs.addMahasiswa );

    //Get all dosen
    app.get('/admin/get/dosen', dosen.getDosen );
    app.post('/admin/post/dosen', dosen.addDosen );


    //Get all mataKuliah
    app.get('/admin/get/mataKuliah', mataKuliah.getMataKuliah );
    app.post('/admin/post/mataKuliah', mataKuliah.addMataKuliah );

    //Get all kelas
    app.get('/admin/get/kelas', kelas.getKelas );
    app.post('/admin/post/kelas', kelas.addKelas );

    //Get all jurusan
    app.get('/admin/get/jurusan', jurusan.getJurusan );
    app.post('/admin/post/jurusan', jurusan.addJurusan );

    //Get all semester
    app.get('/admin/get/semester', semester.getSemester );
    app.post('/admin/post/semester', semester.addSemester );

  //Get all nilai
  app.get('/admin/get/nilai', nilai.getNilai );
  app.post('/admin/post/nilai', nilai.addNilai );
  app.get('/admin/nilai/:semester_berjalan', nilai.getNilai1 );
  app.get('/admin/get/nilai/all', nilai.getAllNilai );
    // server routes ===========================================================
    // handle things like api calls authentication routes
    app.all('*', function(req, res, next) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.set('Access-Control-Allow-Credentials', true);
        res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
        if ('OPTIONS' == req.method) return res.send(200);
        next();
    });

    console.log('PAUDku API is starting on port 8080');

};



//Get all published post
//app.get('/post', routes.posts.list);

//Get all posts
//app.get('/post/all', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.listAll);

//Get the post id
//app.get('/post/:id', routes.posts.read);

//Like the post id
//app.post('/post/like', routes.posts.like);

//Unlike the post id
//app.post('/post/unlike', routes.posts.unlike);

//Get posts by tag
//app.get('/tag/:tagName', routes.posts.listByTag);

//Create a new post
//app.post('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken , routes.posts.create);

//Edit the post id
//app.put('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.update);

//Delete the post id
//app.delete('/post/:id', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.delete);
