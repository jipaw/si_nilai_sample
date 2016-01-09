## SI_Nilai
Program Administrasi Untuk Dataku

=====================
## Description

Project ini dibuat menggunakan repository
"https://github.com/mrgamer/angular-login-example.git"

Projek pembelajaran ini merupakan yang pertama bagi author menggunakan Mysql pada nodejs.
Front end pada aplikasi ini menggunakan angularjs dan backend menggunakan nodejs.
Masih ada banyak yang belum diimplementasikan dan perlu perlu banyak perbaikan.
API yang digunakan masih berantakan dan belum dilindungi dengan sistem authentikasi yang baik.
Author belum dapat mengimplentasikan fitur sekuritas pada API.
Mungkin ada yang berminat untuk memperbaiki ? :)

## Fitur
- [x] Sistem login menggunakan token
- [x] Generate report dari database
- [ ] Autentikasi pada API
- [ ] User management

# Playing around with project
Install `nodejs`
Install grunt dan bower yang dibutuhkan project dengan masuk ke dalam terminal:
```bash
$ npm install -g bower
$ npm install -g grunt-cli
```
Install `mysql` 
Buat database dengan nama `SI_Nilai`
Pada folder sql import query `si_nilai.sql` untuk membuat table data data awal kedalam database.

```bash
$ git clone https://github.com/fauzita/PAUDku.git
$ cd SI_Nilai
$ npm install && bower install && grunt

# Open browser on http://localhost:8080
```

Untuk masuk menu admin utama gunakan user `admin` dan password `admin`

# Known bugs
generate report kadang tidak muncul pada browser

link repository yang berguna

  [angular-client-side-auth]: https://github.com/fnakstad/angular-client-side-auth
  [fnakstad-blogpost]: http://www.frederiknakstad.com/authentication-in-single-page-applications-with-angular-js/
  [http-interceptor]: https://github.com/witoldsz/angular-http-auth
  [angular-http]: http://docs.angularjs.org/api/ng.$http
  [angular-promise]: http://docs.angularjs.org/api/ng.$q
  [angular-extend]: http://docs.angularjs.org/api/angular.extend
  [angular-ui-router-urlprovider]: https://github.com/angular-ui/ui-router/wiki/URL-Routing#urlrouterprovider
  [angular-ui-router-abstractstate]: https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#abstract-states
