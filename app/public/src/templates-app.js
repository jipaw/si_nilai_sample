angular.module('templates-app', ['error/error.tpl.html', 'home/home.tpl.html', 'pages/about/about.tpl.html', 'pages/admin.tpl.html', 'pages/admin/peserta-didik/alamatPesertaDidik.tpl.html', 'pages/admin/peserta-didik/ayahPesertaDidik.tpl.html', 'pages/admin/peserta-didik/ibuPesertaDidik.tpl.html', 'pages/admin/peserta-didik/kesehatanPesertaDidik.tpl.html', 'pages/admin/peserta-didik/overview.tpl.html', 'pages/admin/peserta-didik/pribadiPesertaDidik.tpl.html', 'pages/admin/peserta-didik/viewPesertaDidik.tpl.html', 'pages/admin/peserta-didik/waliPesertaDidik.tpl.html', 'pages/admin/ptk/addPendidik.tpl.html', 'pages/admin/ptk/alamatPendidik.tpl.html', 'pages/admin/ptk/ayahPesertaDidik.tpl.html', 'pages/admin/ptk/ibuPesertaDidik.tpl.html', 'pages/admin/ptk/kesehatanPesertaDidik.tpl.html', 'pages/admin/ptk/overview.tpl.html', 'pages/admin/ptk/pendidikanPendidik.tpl.html', 'pages/admin/ptk/viewPesertaDidik.tpl.html', 'pages/admin/ptk/waliPesertaDidik.tpl.html', 'pages/user.tpl.html', 'register/register.tpl.html']);

angular.module("error/error.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("error/error.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Error</h1>\n" +
    "  <div ng-switch=\"$stateParams.error\">\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"unauthorized\">You are not authorized</p>\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"401\">You are not authorized</p>\n" +
    "    <p class=\"text-danger\" ng-switch-default>Some error has occurred</p>\n" +
    "  </div ng-switch>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "      <div class=\"home-heading\">\n" +
    "      <h1>PAUDku</h1>\n" +
    "      <p>Selamat Datang di Program Aplikasi Untuk Dataku PAUD Uswatun Hasanah</p>\n" +
    "    </div>\n" +
    "  <div class=\"row\">\n" +
    "        <!-- Boxes de Acoes -->\n" +
    "      <div class=\"col-xs-12 col-sm-6 col-lg-6\">\n" +
    "      <div class=\"box\">             \n" +
    "        <div class=\"icon\">\n" +
    "          <div class=\"image\"><i class=\"fa fa-thumbs-o-up\"></i></div>\n" +
    "          <div class=\"info\">\n" +
    "            <h3 class=\"title\">Made with Passion</h3>\n" +
    "            <p>\n" +
    "              Aplikasi ini dirancang untuk memenuhi kebutuhan internal pendataan di PAUD Uswatun Hasanah. Melalui Aplikasi ini Orangtua dan para pendidik dapat memantau perkembangan peserta didik dan data-data yang dibutuhkan untuk perkembangan peserta didik\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"space\"></div>\n" +
    "      </div> \n" +
    "    </div>\n" +
    "      \n" +
    "        <div class=\"col-xs-12 col-sm-6 col-lg-6\">\n" +
    "      <div class=\"box\">             \n" +
    "        <div class=\"icon\">\n" +
    "          <div class=\"image\"><i class=\"fa fa-flag\"></i></div>\n" +
    "          <div class=\"info\">\n" +
    "            <h3 class=\"title\">Modern Interface</h3>\n" +
    "              <p>\n" +
    "              Silahkan login untuk masuk ke menu administrasi data yang dibutuhkan. Bagi Peserta didik silahkan masukkan Nama dan No Induk yang telah terdaftar dan bagi Pendidik dan Staff Administrasi gunakan username dan password yang telah diberikan oleh administrator.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"space\"></div>\n" +
    "      </div> \n" +
    "    </div>       \n" +
    "    <!-- /Boxes de Acoes -->\n" +
    "  </div>\n" +
    "  <div class=\"info\">\n" +
    "  <form class=\"form-horizontal\" role=\"login\" ng-submit=\"loginMe()\">\n" +
    "    <fieldset>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label for=\"inputUsername\" class=\"col-md-4 control-label\">Username</label>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\" ng-model=\"login.username\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label for=\"inputPassword\" class=\"col-md-4 control-label\">Password</label>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" ng-model=\"login.password\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div class=\"col-sm-offset-4 col-md-10\">\n" +
    "            <button type=\"submit\" class=\"btn btn-default hidden-devices\" ng-disabled=\"login.working\">Login <i class=\"fa\" ng-class=\"login.working ? 'fa-cog fa-spin' : 'fa-sign-in'\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </fieldset>\n" +
    "  </form>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("pages/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/about/about.tpl.html",
    "<div class=\"jumbotron jumbotron-sm\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12 col-lg-12\">\n" +
    "                <h1 class=\"h1\">\n" +
    "                    Hubungi Kami<small> Ingin tahu lebih dekat ..</small></h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"well well-sm\">\n" +
    "                <form>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"name\">\n" +
    "                                Nama</label>\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Masukkan Nama\" required=\"required\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"email\">\n" +
    "                                Email</label>\n" +
    "                            <div class=\"input-group\">\n" +
    "                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span>\n" +
    "                                </span>\n" +
    "                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Masukkan Email\" required=\"required\" /></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"name\">\n" +
    "                                Pesan</label>\n" +
    "                            <textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\"\n" +
    "                                placeholder=\"Isi Pesan\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"btnContactUs\">\n" +
    "                            Kirim Pesan</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <form>\n" +
    "            <legend><span class=\"glyphicon glyphicon-globe\"></span> Lokasi Kami</legend>\n" +
    "            <address>\n" +
    "                <strong>PAUD Uswatun Hasanah</strong><br>\n" +
    "                Jl Raya Timur No. 540<br>\n" +
    "                Ds. Margaasih Kec. Cicalengka<br>\n" +
    "                Bandung - Jawa Barat 40395<br>\n" +
    "                <abbr title=\"Phone\">\n" +
    "                    Telp</abbr>\n" +
    "                081322164275\n" +
    "            </address>\n" +
    "            <address>\n" +
    "                <strong>Email</strong><br>\n" +
    "                <a href=\"mailto:#\">paud_uswatun_hasanah@yahoo.com</a>\n" +
    "            </address>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin.tpl.html",
    "<div class=\"row affix-row\" >\n" +
    "    <div class=\"col-sm-3 col-md-2 affix-sidebar\">\n" +
    "    <div class=\"sidebar-nav\">\n" +
    "  <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\"  ng-click=\"isCollapsed= !isCollapsed\"class=\"navbar-toggle\" data-toggle=\"collapse\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <span class=\"visible-xs navbar-brand\">Sidebar menu</span>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse\" collapsed=\"isCollapsed\">\n" +
    "      <ul class=\"nav navbar-nav\" id=\"sidenav01\">\n" +
    "        <li class=\"active\">\n" +
    "          <a href=\"#\" collapsed=\"isCollapsed\" >\n" +
    "          <h4>\n" +
    "            DASHBOARD \n" +
    "          <br>\n" +
    "          <small>PAUDku<span class=\"caret\"></span></small>\n" +
    "          </h4>\n" +
    "          </a>\n" +
    "          <li ng-class=\"{ active: $state.includes('app.admin.overview') }\"><a ui-sref=\"app.admin.overview\"><span class=\"glyphicon glyphicon-calendar\"></span> Overview </a></li>\n" +
    "  <accordion close-others=\"oneAtATime\">\n" +
    "    <accordion-group heading=\"Peserta Didik\">\n" +
    "      <ul class=\"nav nav-list\">\n" +
    "        <li><a ui-sref=\"app.admin.viewPesertaDidik\"><span class=\"glyphicon glyphicon-cog\"></span> View Data</a></li>\n" +
    "        <li><a ui-sref=\"app.admin.insertPesertaDidik\"><span class=\"glyphicon glyphicon-cog\"></span> Insert Data</a></li>\n" +
    "        <li><a ui-sref=\"app.admin.updatePesertaDidik\"><span class=\"glyphicon glyphicon-cog\"></span> Update Data</a></li>\n" +
    "      </ul>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Pendidik\">\n" +
    "      <ul class=\"nav nav-list\">\n" +
    "        <li><a ui-sref=\"app.admin.viewPendidik\"><span class=\"glyphicon glyphicon-cog\"></span> View Data</a></li>\n" +
    "        <li><a ui-sref=\"app.admin.insertPendidik\"><span class=\"glyphicon glyphicon-cog\"></span> Insert Data</a></li>\n" +
    "        <li><a ui-sref=\"app.admin.updatePendidik\"><span class=\"glyphicon glyphicon-cog\"></span> Update Data</a></li>\n" +
    "      </ul>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Account\">\n" +
    "      <ul class=\"nav nav-pull-left\">\n" +
    "        <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Manage Account</a></li>\n" +
    "        <li><a href=\"#\" ng-click=\"logoutMe()\" >Logout <span class=\"glyphicon glyphicon-cog\"></span> </a></li>\n" +
    "      </ul>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "          <li><a href=\"\"><span class=\"glyphicon glyphicon-lock\"></span> Help</a></li>\n" +
    "      </ul>\n" +
    "      </div><!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-9 col-md-10 affix-content\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"page-header\">\n" +
    "          <h3><span class=\"glyphicon glyphicon-th-list\"></span> Navigation</h3>\n" +
    "        </div>            \n" +
    "          <div ui-view=\"pendidik\"></div>\n" +
    "          <form name=\"pesertaDidikForm\" role=\"administration\" ng-submit=\"submit(pesertaDidikForm)\" ng-controller=\"PesertaDidikController\">\n" +
    "          <div id=\"form-views\" ui-view></div>\n" +
    "        </form>\n" +
    "          <div ui-view=\"pesertaDidik\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("pages/admin/peserta-didik/alamatPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/alamatPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Tempat Tinggal</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtAlamat\">Alamat*</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input  name=\"kampung\" ng-model=\"pesertaDidikObj.kampung\" type=\"text\" placeholder=\"Kp\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"desa\">Desa/ Kelurahan</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input  name=\"desa\" ng-model=\"pesertaDidikObj.desa\" type=\"text\" placeholder=\"Desa\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKecamatan\">Kecamatan</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"kecamatan\" ng-model=\"pesertaDidikObj.kecamatan\" type=\"text\" placeholder=\"Kecamatan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kabupaten\">Kabupaten</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"kabupaten\" ng-model=\"pesertaDidikObj.kabupaten\" type=\"text\" placeholder=\"Kabupaten\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kodePos\">Kode Pos</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"kodePos\" ng-model=\"pesertaDidikObj.kodePos\" type=\"text\" placeholder=\"Kode Pos\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"telepon\">No Telp</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"telepon\" ng-model=\"pesertaDidikObj.telepon\" type=\"text\" placeholder=\"Telp\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik3\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/peserta-didik/ayahPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/ayahPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Ayah</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"namaAyah\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"namaAyah\" ng-model=\"pesertaDidikObj.namaAyah\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tempatLahirAyah\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"tempatLahirAyah\" ng-model=\"pesertaDidikObj.tempatLahirAyah\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahirAyah\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tanggalLahirAyah\" ng-model=\"pesertaDidikObj.tanggalLahirAyah\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agamaAyah\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"agamaAyah\" ng-model=\"pesertaDidikObj.agamaAyah\" class=\"form-control\">\n" +
    "      <option value=\"Islam\">Islam</option>\n" +
    "      <option value=\"Kristen\">Kristen</option>\n" +
    "      <option value=\"Hindu\">Hindu</option>\n" +
    "      <option value=\"Budha\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kewarganegaraanAyah\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"kewarganegaraanAyah\" ng-model=\"pesertaDidikObj.kewarganegaraanAyah\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pendidikanAyah\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pendidikanAyah\" ng-model=\"pesertaDidikObj.pendidikanAyah\" class=\"form-control\">\n" +
    "      <option value=\"SD\">SD</option>\n" +
    "      <option value=\"SLTP\">SLTP</option>\n" +
    "      <option value=\"SLTA\">SLTA</option>\n" +
    "      <option value=\"Diploma\">Diploma</option>\n" +
    "      <option value=\"Sarjana\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pekerjaanAyah\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pekerjaanAyah\" ng-model=\"pesertaDidikObj.pekerjaanAyah\" class=\"form-control\">\n" +
    "      <option value=\"Buruh\">Buruh / Tani</option>\n" +
    "      <option value=\"Ibu Rumah Tangga\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"Karyawan\">Karyawan</option>\n" +
    "      <option value=\"Wiraswasta\">Wiraswasta</option>\n" +
    "      <option value=\"PNS\">PNS</option>\n" +
    "      <option value=\"TNI\">TNI / POLRI</option>\n" +
    "      <option value=\"Lain-lain\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenghasilan\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"penghasilanAyah\" ng-model=\"pesertaDidikObj.penghasilanAyah\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik5\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/peserta-didik/ibuPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/ibuPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Ibu</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"namaIbu\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"namaIbu\" ng-model=\"pesertaDidikObj.namaIbu\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tempatLahirIbu\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"tempatLahirIbu\" ng-model=\"pesertaDidikObj.tempatLahirIbu\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahirIbu\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tanggalLahirIbu\" ng-model=\"pesertaDidikObj.tanggalLahirIbu\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agamaIbu\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"agamaIbu\" ng-model=\"pesertaDidikObj.agamaIbu\" class=\"form-control\">\n" +
    "      <option value=\"Islam\">Islam</option>\n" +
    "      <option value=\"Kristen\">Kristen</option>\n" +
    "      <option value=\"Hindu\">Hindu</option>\n" +
    "      <option value=\"Budha\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kewarganegaraanIbu\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"kewarganegaraanIbu\" ng-model=\"pesertaDidikObj.kewarganegaraanIbu\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pendidikanIbu\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pendidikanIbu\" ng-model=\"pesertaDidikObj.pendidikanIbu\" class=\"form-control\">\n" +
    "      <option value=\"SD\">SD</option>\n" +
    "      <option value=\"SLTP\">SLTP</option>\n" +
    "      <option value=\"SLTA\">SLTA</option>\n" +
    "      <option value=\"Diploma\">Diploma</option>\n" +
    "      <option value=\"Sarjana\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pekerjaanIbu\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pekerjaanIbu\" ng-model=\"pesertaDidikObj.pekerjaanIbu\" class=\"form-control\">\n" +
    "      <option value=\"Buruh\">Buruh / Tani</option>\n" +
    "      <option value=\"Ibu Rumah Tangga\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"Karyawan\">Karyawan</option>\n" +
    "      <option value=\"Wiraswasta\">Wiraswasta</option>\n" +
    "      <option value=\"PNS\">PNS</option>\n" +
    "      <option value=\"TNI\">TNI / POLRI</option>\n" +
    "      <option value=\"Lain-lain\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenghasilan\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"penghasilanIbu\" ng-model=\"pesertaDidikObj.penghasilanIbu\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik6\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/peserta-didik/kesehatanPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/kesehatanPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Kesehatan</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"berat\">Berat Badan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"berat\" ng-model=\"pesertaDidikObj.berat\" type=\"text\" placeholder=\"Berat Badan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tinggi\">Tinggi Badan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tinggi\" ng-model=\"pesertaDidikObj.tinggi\" type=\"text\" placeholder=\"Tinggi Badan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Multiple Radios (inline) -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"golonganDarah\">Golongan Darah</label>\n" +
    "  <div class=\"col-xs-4\"> \n" +
    "    <label class=\"radio-inline\" for=\"golonganDarah-0\">\n" +
    "      <input type=\"radio\" name=\"golonganDarah\" ng-model=\"pesertaDidikObj.golonganDarah\" value=\"A\" checked=\"checked\">\n" +
    "      A\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"golonganDarah-1\">\n" +
    "      <input type=\"radio\" name=\"golonganDarah\" ng-model=\"pesertaDidikObj.golonganDarahgolonganDarahgolonganDarah\" value=\"B\">\n" +
    "      B\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"golonganDarah-2\">\n" +
    "      <input type=\"radio\" name=\"golonganDarah\" ng-model=\"pesertaDidikObj.golonganDarahgolonganDarah\" value=\"O\">\n" +
    "      O\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"golonganDarah-3\">\n" +
    "      <input type=\"radio\" name=\"golonganDarah\" ng-model=\"pesertaDidikObj.golonganDarah\" value=\"AB\">\n" +
    "      AB\n" +
    "    </label>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"penyakit\">Penyakit yang pernah diderita</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"penyakit\" ng-model=\"pesertaDidikObj.penyakit\" type=\"text\" placeholder=\"Riwayat Penyakit\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"imunisasi\">Imunisasi yang pernah diterima</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"imunisasi\" ng-model=\"pesertaDidikObj.imunisasi\" type=\"text\" placeholder=\"Riwayat Imunisasi\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row row\">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik4\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/peserta-didik/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/overview.tpl.html",
    "<h2>\n" +
    "OVERVIEW PENDIDIK\n" +
    "</h2>");
}]);

angular.module("pages/admin/peserta-didik/pribadiPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/pribadiPesertaDidik.tpl.html",
    "\n" +
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>PesertaDidik</legend>\n" +
    "\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"noInduk\">No Induk</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input name=\"noInduk\" ng-model=\"pesertaDidikObj.noInduk\" type=\"text\" placeholder=\"No Induk\" class=\"form-control input-xs\" required=\"\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNamaLengkap\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input name=\"namaLengkap\" ng-model=\"pesertaDidikObj.namaLengkap\" type=\"text\" placeholder=\"Nama Lengkap\" class=\"form-control input-xs\" required=\"\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNamaPanggilan\">Nama Panggilan</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"namaPanggilan\" ng-model=\"pesertaDidikObj.namaPanggilan\" type=\"text\" placeholder=\"Nama Panggilan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Multiple Radios -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"rdJenisKelamin\">Jenis Kelamin</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-0\">\n" +
    "      <input type=\"radio\" name=\"jenisKelamin\" ng-model=\"pesertaDidikObj.jenisKelamin\"  value=\"laki-laki\" checked=\"checked\">\n" +
    "      Laki-laki\n" +
    "    </label>\n" +
    "	</div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-1\">\n" +
    "      <input type=\"radio\" name=\"jenisKelamin\" ng-model=\"pesertaDidikObj.jenisKelamin\" value=\"perempuan\">\n" +
    "      Perempuan\n" +
    "    </label>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"tempatLahir\" ng-model=\"pesertaDidikObj.tempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tanggalLahir\" ng-model=\"pesertaDidikObj.tanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"agama\" ng-model=\"pesertaDidikObj.agama\" class=\"form-control\">\n" +
    "      <option value=\"islam\">Islam</option>\n" +
    "      <option value=\"kristen\">Kristen</option>\n" +
    "      <option value=\"hindu\">Hindu</option>\n" +
    "      <option value=\"budha\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kewarganegaraan\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"kewarganegaraan\" ng-model=\"pesertaDidikObj.kewarganegaraan\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"anakKe\">Anak Ke</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input name=\"anakKe\" ng-model=\"pesertaDidikObj.anakKe\" type=\"text\" placeholder=\"Anak Ke\" class=\"form-control input-xs\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"jmlSdrKandung\">Jml_Sdr_Kandung</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select  name=\"jmlSdrKandung\" ng-model=\"pesertaDidikObj.jmlSdrKandung\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"jmlSdrTiri\">Jml_Sdr_Tiri</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select  name=\"jmlSdrTiri\" ng-model=\"pesertaDidikObj.jmlSdrTiri\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"jmlSdrAngkat\">Jml_Sdr_Angkat</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select  name=\"jmlSdrAngkat\" ng-model=\"pesertaDidikObj.jmlSdrAngkat\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik2\" class=\"btn btn-block btn-info \">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/peserta-didik/viewPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/viewPesertaDidik.tpl.html",
    "<h2>\n" +
    "	VIEW PESERTA DIDIK\n" +
    "</h2>");
}]);

angular.module("pages/admin/peserta-didik/waliPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/peserta-didik/waliPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Wali</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"namaWali\" ng-model=\"pesertaDidikObj.namaWali\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tempatLahirWali\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"tempatLahirWali\" ng-model=\"pesertaDidikObj.tempatLahirWali\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahirWali\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tanggalLahirWali\" ng-model=\"pesertaDidikObj.tanggalLahirWali\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agamaWali\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"agamaWali\" ng-model=\"pesertaDidikObj.\" class=\"form-control\">\n" +
    "      <option value=\"Islam\">Islam</option>\n" +
    "      <option value=\"kristen\">Kristen</option>\n" +
    "      <option value=\"hindu\">Hindu</option>\n" +
    "      <option value=\"budha\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"kewarganegaraanWali\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"kewarganegaraanWali\" ng-model=\"pesertaDidikObj.kewarganegaraanWali\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pendidikanWali\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pendidikanWali\" ng-model=\"pesertaDidikObj.pendidikanWali\" class=\"form-control\">\n" +
    "      <option value=\"SD\">SD</option>\n" +
    "      <option value=\"SLTP\">SLTP</option>\n" +
    "      <option value=\"SLTA\">SLTA</option>\n" +
    "      <option value=\"Diploma\">Diploma</option>\n" +
    "      <option value=\"Sarjana\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pekerjaanWali\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pekerjaanWali\" ng-model=\"pesertaDidikObj.pekerjaanWali\" class=\"form-control\">\n" +
    "      <option value=\"Buruh\">Buruh / Tani</option>\n" +
    "      <option value=\"Ibu Rumah Tangga\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"Karyawan\">Karyawan</option>\n" +
    "      <option value=\"Wiraswasta\">Wiraswasta</option>\n" +
    "      <option value=\"PNS\">PNS</option>\n" +
    "      <option value=\"TNI\">TNI / POLRI</option>\n" +
    "      <option value=\"Lain-lain\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"penghasilanWali\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"penghasilanWali\" ng-model=\"pesertaDidikObj.pengjasilanWali\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"hubunganWali\">Hubungan Keluarga</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input  name=\"hubunganWali\" ng-model=\"pesertaDidikObj.hubunganWali\" type=\"text\" placeholder=\"Hubungan \" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-3 col-xs-offset-3\">\n" +
    "  <button class=\"btn btn-lg btn-block\" type=\"submit\"><span class=\"glyphicon glyphicon-circle-arrow-up\">SUBMIT</span>\n" +
    "  </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/ptk/addPendidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/addPendidik.tpl.html",
    "<form name=\"pendidikForm\" role=\"administration\" ng-submit=\"submit(pendidikForm)\" ng-controller=\"PendidikController\">\n" +
    "<!-- Form Name -->\n" +
    "<legend>PTK</legend>\n" +
    "\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">NIP </label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"nip\" ng-model=\"pendidikObj.nip\" type=\"text\" placeholder=\"NIP \" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">Nama </label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"nama\" ng-model=\"pendidikObj.nama\" type=\"text\" placeholder=\"Nama \" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtJabatan\">Jabatan</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"jabatan\" ng-model=\"pendidikObj.jabatan\" type=\"text\" placeholder=\"Jabatan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Multiple Radios -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"rdJenisKelamin\">Jenis Kelamin</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-0\">\n" +
    "      <input type=\"radio\" name=\"jenisKelamin\" ng-model=\"pendidikObj.jenisKelamin\"  value=\"laki-laki\" checked=\"checked\">\n" +
    "      Laki-laki\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-1\">\n" +
    "      <input type=\"radio\" name=\"jenisKelamin\" ng-model=\"pendidikObj.jenisKelamin\"  value=\"perempuan\">\n" +
    "      Perempuan\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"tempatLahir\" ng-model=\"pendidikObj.tempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tanggalLahir\" ng-model=\"pendidikObj.tanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"agama\" ng-model=\"pendidikObj.agama\" class=\"form-control\">\n" +
    "      <option value=\"islam\">Islam</option>\n" +
    "      <option value=\"kristen\">Kristen</option>\n" +
    "      <option value=\"hindu\">Hindu</option>\n" +
    "      <option value=\"budha\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"alamat\">Alamat</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input  name=\"alamat\" ng-model=\"pendidikObj.alamat\" type=\"text\" placeholder=\"Alamat\" class=\"form-control input-xs\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtAlamat\">Alamat*</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input id=\"txtAlamat\" name=\"txtAlamat\" type=\"text\" placeholder=\"Kp\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtDesa\">Desa/ Kelurahan</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input id=\"txtDesa\" name=\"txtDesa\" type=\"text\" placeholder=\"Desa\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKecamatan\">Kecamatan</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtKecamatan\" name=\"txtKecamatan\" type=\"text\" placeholder=\"Kecamatan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKabupaten\">Kabupaten</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtKabupaten\" name=\"txtKabupaten\" type=\"text\" placeholder=\"Kabupaten\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKodePos\">Kode Pos</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtKodePos\" name=\"txtKodePos\" type=\"text\" placeholder=\"Kode Pos\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTelepon\">No Telp</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTelepon\" name=\"txtTelepon\" type=\"text\" placeholder=\"Telp\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"pendidikan\">pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select  name=\"pendidikan\" ng-model=\"pendidikObj.pendidikan\" class=\"form-control\">\n" +
    "      <option value=\"SLTP\">SLTP</option>\n" +
    "      <option value=\"SLTA\">SLTA</option>\n" +
    "      <option value=\"D3\">D3</option>\n" +
    "      <option value=\"S1\">S1</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"jurusan\">Status</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"jurusan\" ng-model=\"pendidikObj.status\" type=\"text\" placeholder=\"Jurusan\" class=\"form-control input-xs\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tahunLulus\">Status</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input  name=\"tahunLulus\" ng-model=\"pendidikObj.tahunLulus\" type=\"text\" placeholder=\"Tahun\" class=\"form-control input-xs\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Textarea -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"textarea\">Keterangan</label>\n" +
    "  <div class=\"col-xs-8\">                     \n" +
    "    <textarea class=\"form-control input-xs\" name=\"textarea\" ng-model=\"pendidikObj.keterangan\"> </textarea>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "    <div>\n" +
    "  <button class=\"btn btn-lg btn-block\" type=\"submit\">SUBMIT\n" +
    "  </button>\n" +
    "    </div>\n" +
    "  </form> \n" +
    "");
}]);

angular.module("pages/admin/ptk/alamatPendidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/alamatPendidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Tempat Tinggal</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtAlamat\">Alamat*</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input id=\"txtAlamat\" name=\"txtAlamat\" type=\"text\" placeholder=\"Kp\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtDesa\">Desa/ Kelurahan</label>  \n" +
    "  <div class=\"col-xs-6\">\n" +
    "  <input id=\"txtDesa\" name=\"txtDesa\" type=\"text\" placeholder=\"Desa\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKecamatan\">Kecamatan</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtKecamatan\" name=\"txtKecamatan\" type=\"text\" placeholder=\"Kecamatan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKabupaten\">Kabupaten</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtKabupaten\" name=\"txtKabupaten\" type=\"text\" placeholder=\"Kabupaten\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKodePos\">Kode Pos</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtKodePos\" name=\"txtKodePos\" type=\"text\" placeholder=\"Kode Pos\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTelepon\">No Telp</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTelepon\" name=\"txtTelepon\" type=\"text\" placeholder=\"Telp\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik3\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/ptk/ayahPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/ayahPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Ayah</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtNama\" name=\"txtNama\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtTempatLahir\" name=\"txtTempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTanggalLahir\" name=\"txtTanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbAgama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbAgama\" name=\"sctbAgama\" class=\"form-control\">\n" +
    "      <option value=\"1\">Islam</option>\n" +
    "      <option value=\"2\">Kristen</option>\n" +
    "      <option value=\"3\">Hindu</option>\n" +
    "      <option value=\"4\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKewarganegaraan\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtKewarganegaraan\" name=\"txtKewarganegaraan\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPendidikan\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPendidikan\" name=\"sctbPendidikan\" class=\"form-control\">\n" +
    "      <option value=\"1\">SD</option>\n" +
    "      <option value=\"2\">SLTP</option>\n" +
    "      <option value=\"3\">SLTA</option>\n" +
    "      <option value=\"4\">Diploma</option>\n" +
    "      <option value=\"5\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPekerjaan\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPekerjaan\" name=\"sctbPekerjaan\" class=\"form-control\">\n" +
    "      <option value=\"1\">Buruh / Tani</option>\n" +
    "      <option value=\"2\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"3\">Karyawan</option>\n" +
    "      <option value=\"4\">Wiraswasta</option>\n" +
    "      <option value=\"5\">PNS</option>\n" +
    "      <option value=\"6\">TNI / POLRI</option>\n" +
    "      <option value=\"7\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenghasilan\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtPenghasilan\" name=\"txtPenghasilan\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik5\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/ptk/ibuPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/ibuPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Ibu</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtNama\" name=\"txtNama\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtTempatLahir\" name=\"txtTempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTanggalLahir\" name=\"txtTanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbAgama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbAgama\" name=\"sctbAgama\" class=\"form-control\">\n" +
    "      <option value=\"1\">Islam</option>\n" +
    "      <option value=\"2\">Kristen</option>\n" +
    "      <option value=\"3\">Hindu</option>\n" +
    "      <option value=\"4\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKewarganegaraan\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtKewarganegaraan\" name=\"txtKewarganegaraan\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPendidikan\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPendidikan\" name=\"sctbPendidikan\" class=\"form-control\">\n" +
    "      <option value=\"1\">SD</option>\n" +
    "      <option value=\"2\">SLTP</option>\n" +
    "      <option value=\"3\">SLTA</option>\n" +
    "      <option value=\"4\">Diploma</option>\n" +
    "      <option value=\"5\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPekerjaan\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPekerjaan\" name=\"sctbPekerjaan\" class=\"form-control\">\n" +
    "      <option value=\"1\">Buruh / Tani</option>\n" +
    "      <option value=\"2\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"3\">Karyawan</option>\n" +
    "      <option value=\"4\">Wiraswasta</option>\n" +
    "      <option value=\"5\">PNS</option>\n" +
    "      <option value=\"6\">TNI / POLRI</option>\n" +
    "      <option value=\"7\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenghasilan\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtPenghasilan\" name=\"txtPenghasilan\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik6\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/ptk/kesehatanPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/kesehatanPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Kesehatan</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtBerat\">Berat Badan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtBerat\" name=\"txtBerat\" type=\"text\" placeholder=\"Berat Badan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTinggi\">Tinggi Badan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTinggi\" name=\"txtTinggi\" type=\"text\" placeholder=\"Tinggi Badan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Multiple Radios (inline) -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"rd2GolonganDarah\">Golongan Darah</label>\n" +
    "  <div class=\"col-xs-4\"> \n" +
    "    <label class=\"radio-inline\" for=\"rd2GolonganDarah-0\">\n" +
    "      <input type=\"radio\" name=\"rd2GolonganDarah\" id=\"rd2GolonganDarah-0\" value=\"1\" checked=\"checked\">\n" +
    "      A\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"rd2GolonganDarah-1\">\n" +
    "      <input type=\"radio\" name=\"rd2GolonganDarah\" id=\"rd2GolonganDarah-1\" value=\"2\">\n" +
    "      B\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"rd2GolonganDarah-2\">\n" +
    "      <input type=\"radio\" name=\"rd2GolonganDarah\" id=\"rd2GolonganDarah-2\" value=\"3\">\n" +
    "      O\n" +
    "    </label> \n" +
    "    <label class=\"radio-inline\" for=\"rd2GolonganDarah-3\">\n" +
    "      <input type=\"radio\" name=\"rd2GolonganDarah\" id=\"rd2GolonganDarah-3\" value=\"4\">\n" +
    "      AB\n" +
    "    </label>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenyakit\">Penyakit yang pernah diderita</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtPenyakit\" name=\"txtPenyakit\" type=\"text\" placeholder=\"Riwayat Penyakit\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtImunisasi\">Imunisasi yang pernah diterima</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtImunisasi\" name=\"txtImunisasi\" type=\"text\" placeholder=\"Riwayat Imunisasi\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row row\">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik4\" class=\"btn btn-block btn-info\">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/admin/ptk/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/overview.tpl.html",
    "<h2>\n" +
    "OVERVIEW PENDIDIK\n" +
    "</h2>");
}]);

angular.module("pages/admin/ptk/pendidikanPendidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/pendidikanPendidik.tpl.html",
    "<!-- Form Name -->\n" +
    "<legend>PTK</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNamaLengkap\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input id=\"txtNamaLengkap\" name=\"txtNamaLengkap\" type=\"text\" placeholder=\"Nama Lengkap\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNamaPanggilan\">Nama Panggilan</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input id=\"txtNamaPanggilan\" name=\"txtNamaPanggilan\" type=\"text\" placeholder=\"Nama Panggilan\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Multiple Radios -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"rdJenisKelamin\">Jenis Kelamin</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-0\">\n" +
    "      <input type=\"radio\" name=\"rdJenisKelamin\" id=\"rdJenisKelamin-0\" value=\"1\" checked=\"checked\">\n" +
    "      Laki-laki\n" +
    "    </label>\n" +
    "	</div>\n" +
    "  <div class=\"radio\">\n" +
    "    <label for=\"rdJenisKelamin-1\">\n" +
    "      <input type=\"radio\" name=\"rdJenisKelamin\" id=\"rdJenisKelamin-1\" value=\"2\">\n" +
    "      Perempuan\n" +
    "    </label>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input id=\"txtTempatLahir\" name=\"txtTempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"tanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"tanggalLahir\" name=\"tanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"agama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"agama\" name=\"agama\" class=\"form-control\">\n" +
    "      <option value=\"1\">Islam</option>\n" +
    "      <option value=\"2\">Kristen</option>\n" +
    "      <option value=\"3\">Hindu</option>\n" +
    "      <option value=\"4\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKewarganegaraan\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-7\">\n" +
    "  <input id=\"txtKewarganegaraan\" name=\"txtKewarganegaraan\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtAnakKe\">Anak Ke</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtAnakKe\" name=\"txtAnakKe\" type=\"text\" placeholder=\"Anak Ke\" class=\"form-control input-xs\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbJmlSdrKandung\">Jml_Sdr_Kandung</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select id=\"sctbJmlSdrKandung\" name=\"sctbJmlSdrKandung\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbJmlSdrTiri\">Jml_Sdr_Tiri</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select id=\"sctbJmlSdrTiri\" name=\"sctbJmlSdrTiri\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbJmlSdrAngkat\">Jml_Sdr_Angkat</label>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <select id=\"sctbJmlSdrAngkat\" name=\"sctbJmlSdrAngkat\" class=\"form-control\">\n" +
    "      <option value=\"0\">0</option>\n" +
    "      <option value=\"1\">1</option>\n" +
    "      <option value=\"2\">2</option>\n" +
    "      <option value=\"3\">3</option>\n" +
    "      <option value=\"4\">4</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"6\">6</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"8\">8</option>\n" +
    "      <option value=\"7\">7</option>\n" +
    "      <option value=\"10\">10</option>\n" +
    "      <option value=\"11\">11</option>\n" +
    "      <option value=\"12\">12</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik2\" class=\"btn btn-block btn-info \">\n" +
    "    Next Section <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/ptk/viewPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/viewPesertaDidik.tpl.html",
    "<h2>\n" +
    "	VIEW DATA PENDIDIK\n" +
    "</h2>");
}]);

angular.module("pages/admin/ptk/waliPesertaDidik.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/ptk/waliPesertaDidik.tpl.html",
    "\n" +
    "<!-- Form Name -->\n" +
    "<legend>Wali</legend>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtNama\">Nama Lengkap</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtNama\" name=\"txtNama\" type=\"text\" placeholder=\"Nama\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTempatLahir\">Tempat Lahir</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtTempatLahir\" name=\"txtTempatLahir\" type=\"text\" placeholder=\"Tempat Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtTanggalLahir\">Tanggal Lahir</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtTanggalLahir\" name=\"txtTanggalLahir\" type=\"text\" placeholder=\"Tanggal Lahir\" class=\"form-control input-xs\" required=\"\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbAgama\">Agama</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbAgama\" name=\"sctbAgama\" class=\"form-control\">\n" +
    "      <option value=\"1\">Islam</option>\n" +
    "      <option value=\"2\">Kristen</option>\n" +
    "      <option value=\"3\">Hindu</option>\n" +
    "      <option value=\"4\">Budha</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtKewarganegaraan\">Kewarganegaraan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtKewarganegaraan\" name=\"txtKewarganegaraan\" type=\"text\" placeholder=\"Kewarganegaraan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPendidikan\">Pendidikan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPendidikan\" name=\"sctbPendidikan\" class=\"form-control\">\n" +
    "      <option value=\"1\">SD</option>\n" +
    "      <option value=\"2\">SLTP</option>\n" +
    "      <option value=\"3\">SLTA</option>\n" +
    "      <option value=\"4\">Diploma</option>\n" +
    "      <option value=\"5\">Sarjana</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Select Basic -->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"sctbPekerjaan\">Pekerjaan</label>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <select id=\"sctbPekerjaan\" name=\"sctbPekerjaan\" class=\"form-control\">\n" +
    "      <option value=\"1\">Buruh / Tani</option>\n" +
    "      <option value=\"2\">Ibu Rumah Tangga</option>\n" +
    "      <option value=\"3\">Karyawan</option>\n" +
    "      <option value=\"4\">Wiraswasta</option>\n" +
    "      <option value=\"5\">PNS</option>\n" +
    "      <option value=\"6\">TNI / POLRI</option>\n" +
    "      <option value=\"7\">Lain-lain</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtPenghasilan\">Penghasilan per Bulan</label>  \n" +
    "  <div class=\"col-xs-4\">\n" +
    "  <input id=\"txtPenghasilan\" name=\"txtPenghasilan\" type=\"text\" placeholder=\"Penghasilan\" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Text input-->\n" +
    "<div class=\"row\">\n" +
    "  <label class=\"col-xs-4 control-label\" for=\"txtHubungan\">Hubungan Keluarga</label>  \n" +
    "  <div class=\"col-xs-5\">\n" +
    "  <input id=\"txtHubungan\" name=\"txtHubungan\" type=\"text\" placeholder=\"Hubungan \" class=\"form-control input-xs\">\n" +
    "    \n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row \">\n" +
    "<div class=\"col-xs-3 col-xs-offset-3\">\n" +
    "    <a ui-sref=\"app.admin.insertPesertaDidik5\" class=\"btn btn-block btn-info\">\n" +
    "    Submit <span class=\"glyphicon glyphicon-circle-arrow-up\"></span>\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("pages/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/user.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "<div ng-controller=\"UserController\">\n" +
    "  <accordion close-others=\"oneAtATime\">\n" +
    "    <accordion-group heading=\"Peserta Didik\">\n" +
    "	    <ul class=\"nav nav-list\">\n" +
    "	      <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> View Data</a></li>\n" +
    "	      <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Insert Data</a></li>\n" +
    "	      <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Update Data</a></li>\n" +
    "	    </ul>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Pendidik\">\n" +
    "      <ul class=\"nav nav-list\">\n" +
    "        <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> View Data</a></li>\n" +
    "        <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Insert Data</a></li>\n" +
    "        <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Update Data</a></li>\n" +
    "      </ul>\n" +
    "    </accordion-group>\n" +
    "    <accordion-group heading=\"Account\">\n" +
    "      <ul class=\"nav nav-pull-left\">\n" +
    "        <li><a href=\"#\"><span class=\"glyphicon glyphicon-cog\"></span> Manage Account</a></li>\n" +
    "        <li><a href=\"#\" ng-click=\"logoutMe()\" ><span class=\"glyphicon glyphicon-cog\"></span> Logout</a></li>\n" +
    "      </ul>\n" +
    "    </accordion-group>\n" +
    "  </accordion>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/register.tpl.html",
    "<form class=\"form-signin\" name=\"registerForm\" role=\"registration\" ng-submit=\"submit(registerForm)\">\n" +
    "  <div class=\"alert alert-warning\">\n" +
    "    <p class=\"text-center\"><strong>Register</strong></p>\n" +
    "    <p class=\"text-center\"></p>\n" +
    "  </div>\n" +
    "  <h2 class=\"form-signin-heading\"><i class=\"fa fa-user\"></i> New User</h2>\n" +
    "  <!--div class=\"form-group\">\n" +
    "    <label for=\"username\" class=\"col-lg-2 control-label\">Email</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n" +
    "    </div>\n" +
    "  </div-->\n" +
    "  <div class=\"form-input username\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" ng-model=\"registerObj.username\" autofocus=\"true\"\n" +
    "      ng-minlength=\"4\" ng-maxlength=\"16\" ng-required=\"true\" remote-validated=\"used\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.username.$invalid && registerForm.username.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.username.$error.minlength\">\n" +
    "        <p>Username is too short!</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.username.$error.maxlength\">\n" +
    "        <p>Max username length is 16, please shorten it.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.username.$error.used\">\n" +
    "        <p>Username is already taken.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-input name\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Real Name\" name=\"name\" ng-model=\"registerObj.name\" ng-minlength=\"4\" ng-maxlength=\"32\" ng-required=\"true\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.name.$invalid && registerForm.name.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.name.$error.minlength\">\n" +
    "        <p>Provided name is too short!</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.name.$error.maxlength\">\n" +
    "        <p>Max name length is 32, please shorten it.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-input password\">\n" +
    "    <input type=\"password\" class=\"form-control password\" placeholder=\"Password\" name=\"password\" ng-model=\"registerObj.password\" ng-minlength=\"4\" ng-maxlength=\"16\" ng-required=\"true\" password-match=\"registerObj.password2\">\n" +
    "    <input type=\"password\" class=\"form-control password2\" placeholder=\"Repeat Password\" name=\"password2\" ng-model=\"registerObj.password2\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.password.$invalid && registerForm.password.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.match\">\n" +
    "        <p>Passwords do not match.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.minlength\">\n" +
    "        <p>For your own safety, use a password longer than 4 characters.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.maxlength\">\n" +
    "        <p>For your own <b>SANITY</b>, use a password shorter than 16 characters.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-input email\">\n" +
    "    <input type=\"email\" class=\"form-control email\" placeholder=\"E-Mail\" name=\"email\" ng-model=\"registerObj.email\" ng-required=\"true\" remote-validated=\"used\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.email.$invalid && registerForm.email.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.email.$error.email\">\n" +
    "        <p>E-Mail seems invalid.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.email.$error.used\">\n" +
    "        <p>E-Mail is already taken.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-input role\">\n" +
    "    <select class=\"form-control\" name=\"role\" ng-model=\"registerObj.role\">\n" +
    "      <option value=\"user\" selected>User</option>\n" +
    "      <option value=\"admin\">Administrator</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <button class=\"btn btn-lg btn-block\" type=\"submit\"\n" +
    "    ng-class=\"{ 'btn-primary': registerForm.$valid && registerForm.$dirty, 'btn-success': redirect }\"\n" +
    "    ng-disabled=\"registerForm.$invalid || registerForm.$pristine || xhr || redirect\">\n" +
    "    <span ng-hide=\"redirect\">Register <i class=\"fa fa-repeat fa-spin\" ng-show=\"xhr\"></i></span>\n" +
    "    <span ng-show=\"redirect\">Redirecting... <i class=\"fa fa-repeat fa-spin\"></i></span>\n" +
    "  </button>\n" +
    "</form>\n" +
    "");
}]);
