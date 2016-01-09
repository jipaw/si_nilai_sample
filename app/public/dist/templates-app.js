angular.module('templates-app', ['error/error.tpl.html', 'home/home.tpl.html', 'pages/admin.tpl.html', 'pages/admin/akun/akun.overview.pass.tpl.html', 'pages/admin/akun/akun.overview.tpl.html', 'pages/admin/akun/akun.tpl.html', 'pages/admin/akun/akun.user.tpl.html', 'pages/admin/akun/overview.tpl.html', 'pages/admin/master/master.data.nilai.tpl.html', 'pages/admin/master/master.dosen.add.tpl.html', 'pages/admin/master/master.dosen.tpl.html', 'pages/admin/master/master.dosen.view.tpl.html', 'pages/admin/master/master.jurusan.add.tpl.html', 'pages/admin/master/master.jurusan.tpl.html', 'pages/admin/master/master.jurusan.view.tpl.html', 'pages/admin/master/master.kelas.add.tpl.html', 'pages/admin/master/master.kelas.tpl.html', 'pages/admin/master/master.kelas.view.tpl.html', 'pages/admin/master/master.mahasiswa.add.tpl.html', 'pages/admin/master/master.mahasiswa.tpl.html', 'pages/admin/master/master.mahasiswa.view.tpl.html', 'pages/admin/master/master.mataKuliah.add.tpl.html', 'pages/admin/master/master.mataKuliah.tpl.html', 'pages/admin/master/master.mataKuliah.view.tpl.html', 'pages/admin/master/master.semester.add.tpl.html', 'pages/admin/master/master.semester.tpl.html', 'pages/admin/master/master.semester.view.tpl.html', 'pages/admin/master/master.tpl.html', 'pages/admin/nilai/nilai.add.tpl.html', 'pages/admin/nilai/nilai.search.tpl.html', 'pages/admin/nilai/nilai.tpl.html', 'pages/admin/nilai/nilai.view.tpl.html', 'pages/admin/overview.tpl.html', 'pages/nilai/nilai.print.tpl.html', 'pages/nilai/nilai.tpl.html', 'pages/nilai/nilai.view.tpl.html', 'pages/user/user.akun.tpl.html', 'pages/user/user.biodata.tpl.html', 'pages/user/user.print.tpl.html', 'pages/user/user.tpl.html', 'register/register.tpl.html', 'register/registerUser.tpl.html', 'report/report.tpl.html']);

angular.module("error/error.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("error/error.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <div ng-switch=\"$stateParams.error\">\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"unauthorized\">Anda belum terauthentikasi pada sistem</p>\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"401\">Silahkan login untuk masuk sistem.</p>\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"502\">Silahkan login untuk masuk sistem.</p>\n" +
    "    <p class=\"text-danger\" ng-switch-default>Terjadi kesalahan</p>\n" +
    "  </div ng-switch>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "      <div class=\"home-heading\">\n" +
    "      <h1>SISTEM INFORMASI NILAI</h1>\n" +
    "      <p>Selamat Datang di Sistem Informasi Nilai</p>\n" +
    "    </div>\n" +
    "  <div class=\"row\">\n" +
    "        <!-- Boxes de Acoes -->\n" +
    "    <div class=\"col-xs-12 col-sm-12 col-lg-12\">\n" +
    "      <div class=\"box\">             \n" +
    "        <div class=\"icon\">\n" +
    "          <div class=\"image\"><i class=\"fa fa-flag\"></i></div>\n" +
    "          <div class=\"info\">\n" +
    "            <h3 class=\"title\">SI Nilai</h3>\n" +
    "              <p>\n" +
    "                Anda sekarang berada di sistem Informasi Nilai.\n" +
    "              Silahkan login untuk masuk ke menu administrasi data yang dibutuhkan. Bagi mahasiswa silahkan masukkan NPM dan password yang telah terdaftar. Bagi yang belum terdaftar silahkan klik pada menu register.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"space\"></div>\n" +
    "      </div> \n" +
    "    </div>       \n" +
    "    <!-- /Boxes de Acoes -->\n" +
    "  </div>\n" +
    "  <div class=\"info\">\n" +
    "    <div class=\"login-box\">\n" +
    "  <form class=\"form-horizontal \" role=\"login\" ng-submit=\"loginMe()\">\n" +
    "    <fieldset>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label for=\"inputUsername\" class=\"col-md-4 control-label\">NPM</label>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"inputUsername\" placeholder=\"NPM\" ng-model=\"login.username\">\n" +
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
    "            <button type=\"submit\" class=\"btn btn-default hidden-devices btn-outline\" ng-disabled=\"login.working\">Login <i class=\"fa\" ng-class=\"login.working ? 'fa-cog fa-spin' : 'fa-sign-in'\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </fieldset>\n" +
    "  </form>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("pages/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin.tpl.html",
    " <div class=\"container\" ng-controller=\"AdminController\">  \n" +
    "    <div class=\"row\" >\n" +
    "      <div class=\" col-sm-3 col-md-2\">\n" +
    "        <div class=\"sidebar-nav0\">\n" +
    "          <div class=\"navbar0 navbar-default\" role=\"navigation\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "              <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "              </button>\n" +
    "              <span class=\"visible-xs navbar-brand\">Sidebar Menu</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"navbar-collapse collapse sidebar-navbar-collapse\" ng-class=\"{'in':!navCollapsed}\">\n" +
    "              <div class='panel'>\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-bookmark\"></span><strong> QUICK MENU </strong></h3>\n" +
    "                </div>\n" +
    "                <div class=\"nav navbar-nav panel-body\">\n" +
    "                    <a ui-sref=\"app.admin.overview\" class=\"btn btn-danger btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-list-alt\"></span> <br/>Overview</a>\n" +
    "                    <a ui-sref=\"app.admin.master.mahasiswa.view\" class=\"btn btn-info btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-file\"></span> <br/>Master</a>\n" +
    "                    <a ui-sref=\"app.admin.nilai.view\" class=\"btn btn-info btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-file\"></span> <br/>Nilai</a>\n" +
    "                    <!--<a ui-sref=\"app.admin.laporan\" class=\"btn btn-primary btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-signal\"></span> <br/>Laporan</a>-->\n" +
    "                    <a ui-sref=\"app.admin.akun.overview\" class=\"btn btn-primary btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-tag\"></span> <br/>Akun</a>\n" +
    "                   <!-- \n" +
    "                   <a ui-sref=\"app.gallery\" class=\"btn btn-primary btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-picture\"></span> <br/>Galeri</a>\n" +
    "                    <a href=\"#\" class=\"btn btn-primary btn-xs btn-outline\" role=\"button\"><span class=\"glyphicon glyphicon-comment\"></span> <br/>Pesan</a> \n" +
    "                  -->\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "        <div class=\"col-sm-9 col-md-10\">\n" +
    "          <ui-view ></ui-view> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/akun/akun.overview.pass.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/akun/akun.overview.pass.tpl.html",
    "<div ng-controller=\"akunOverviewPassCtrl\">\n" +
    "	<form class=\"form-apps\" name=\"passwordForm\" role=\"registration\" ng-submit=\"submit(passwordForm)\">\n" +
    "		<div class=\"well well-sm\">\n" +
    "			<div class=\"alert alert-success\">\n" +
    "				<h5 class=\" text-center \"><i class=\"fa fa-user\"></i> Update Password</h5>\n" +
    "				<p class=\"text-center\"></p>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "			    <input type=\"password\" class=\"form-control password\" placeholder=\"Password\" name=\"password\" ng-model=\"passwordObj.password\" ng-minlength=\"4\" ng-maxlength=\"16\" ng-required=\"true\" password-match=\"passwordObj.password2\">\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "			    <input type=\"password\" class=\"form-control password2\" placeholder=\"Repeat Password\" name=\"password2\" ng-model=\"passwordObj.password2\">\n" +
    "			    <div class=\"errors\" ng-class=\"{ active: passwordForm.password.$invalid && passwordForm.password.$dirty }\">\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.match\">\n" +
    "			        <p>Password tidak cocok</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.minlength\">\n" +
    "			        <p>Password minimal 4 karakter</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.maxlength\">\n" +
    "			        <p>Password maksimal 16 karakter</p>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		  	<div class=\"row\">\n" +
    "			  	<button class=\"btn btn-lg btn-block\" type=\"submit\"\n" +
    "			    ng-class=\"{ 'btn-primary': passwordForm.$valid && passwordForm.$dirty, 'btn-success': redirect }\"\n" +
    "			    ng-disabled=\"passwordForm.$invalid || passwordForm.$pristine || xhr \">\n" +
    "			    <span >UPDATE <i class=\"fa fa-repeat fa-spin\" ng-show=\"xhr\"></i></span>\n" +
    "			  	</button>\n" +
    "		  	</div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>");
}]);

angular.module("pages/admin/akun/akun.overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/akun/akun.overview.tpl.html",
    "<div ng-controller=\"akunOverviewCtrl\">\n" +
    "	<div class=\"col-xs12 col-md-6\">\n" +
    "		<p><strong>Overview</strong></p>\n" +
    "		<div>\n" +
    "			<h4><span class=\"glyphicon glyphicon-user\"></span> User <strong>{{user | uppercase}} </strong></h4>\n" +
    "			<h4><span class=\"glyphicon glyphicon-cog\"></span> Hak Akses <strong>{{role | uppercase}}</strong></h4>\n" +
    "		</div>\n" +
    "        <div>\n" +
    "        	<a ui-sref=\"app.admin.akun.overview.password\" class=\"btn\"><i class=\"fa fa-edit\"></i> Update Password</a>\n" +
    "        </div>\n" +
    "		<ui-view></ui-view>\n" +
    "</div>");
}]);

angular.module("pages/admin/akun/akun.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/akun/akun.tpl.html",
    "<div>\n" +
    "	<h2><i class=\"fa fa-key\"></i> AKUN</h2>\n" +
    "    <div>\n" +
    "      <a ui-sref=\"app.admin.akun.overview\" class=\"btn\"><i class=\"fa fa-edit\"></i> Overview</a>\n" +
    "      <a ui-sref=\"app.admin.akun.user\" class=\"btn\"><i class=\"fa fa-edit\"></i> User</a>\n" +
    "    </div>\n" +
    "    <ui-view></ui-view>\n" +
    "</div>");
}]);

angular.module("pages/admin/akun/akun.user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/akun/akun.user.tpl.html",
    "<div ng-controller=\"akunUserCtrl\">\n" +
    "	<h5><i class=\"fa fa-user\"></i><strong> RESET PASSWORD</strong></h5>\n" +
    "\n" +
    "	<div class=\"col-xs-1- col-md-6\">\n" +
    "\n" +
    "		<form class=\"form-apps\" name=\"userForm\" role=\"registration\" ng-submit=\"submit(userForm)\">\n" +
    "			<div class=\"well well-sm\">\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    <h5 class=\" text-center \"><i class=\"fa fa-user\"></i> Reset User Password</h5>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "		  \n" +
    "		  <!--div class=\"form-group\">\n" +
    "		    <label for=\"username\" class=\"col-lg-2 control-label\">Email</label>\n" +
    "		    <div class=\"col-lg-10\">\n" +
    "		      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n" +
    "		    </div>\n" +
    "		  </div-->\n" +
    "		<div class=\"row\" >\n" +
    "		    <pre>ID Mahasiswa</pre>\n" +
    "		    <input type=\"text\" ng-model=\"userObj.username\" placeholder=\"Silahkan masukkan NPM\"  class=\"form-control\">\n" +
    "		    <i ng-show=\"loadPesertaDidik\" class=\"glyphicon glyphicon-refresh\"></i>\n" +
    "		</div>\n" +
    "		  <div class=\"row\">\n" +
    "		    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"userObj.password\" ng-required=\"true\">\n" +
    "		    <div class=\"errors\" ng-class=\"{ active: userForm.password.$invalid && userForm.password.$dirty }\">\n" +
    "		    </div>\n" +
    "		  </div>\n" +
    "		  <div class=\"row\">\n" +
    "			  <button class=\"btn btn-lg btn-block\" type=\"submit\"\n" +
    "			    ng-class=\"{ 'btn-primary': userForm.$valid && userForm.$dirty, 'btn-success': redirect }\"\n" +
    "			    ng-disabled=\"userForm.$invalid || userForm.$pristine || xhr \">\n" +
    "			    <span ng-hide=\"redirect\">Reset <i class=\"fa fa-repeat fa-spin\" ng-show=\"xhr\"></i></span>\n" +
    "			  </button>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/akun/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/akun/overview.tpl.html",
    "<div class=\"container\">\n" +
    "    <div>\n" +
    "    	<h4 class=\"text-success\"><strong>SISTEM INFORMASI PENDATAAN</strong></h4>\n" +
    "    	<h3 class=\"text-success\"><strong>PAUD USWATUN HASANAH</strong></h3>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">\n" +
    "                        <span class=\"glyphicon glyphicon-bookmark\"></span> Quick Shortcuts</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                  <p class=\"text-center\">Selamat datang di aplikasi sistem pendataan </p>\n" +
    "                  <p class=\"text-justify\">Aplikasi ini menggunakan nodejs sebagai back end dan angularjs sebagai front end. Bootstrap 3 digunakan sebagai tema dan report menggunakan pdfmake. Mongodb digunakan sebagai basis data. Untuk pengalaman terbaik disarankan untuk menggunakan browser google-chrome terbaru. Fitur report yang digunakan belum bisa berjalan dengan baik menggunakan browser selain google-chrome </p>\n" +
    "                  <p class=\"text-justify\">Fasilitas yang disediakan masih terbatas pada pendataan data pendidik dan peserta didik. Fungsionalitas lain yang dibutuhkan akan ditambahkan secara bertahap. Enjoy :D </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"display:inline-block; min-height:290px;\" class=\"pull-left\">\n" +
    "            <datepicker ng-model=\"dt\" min-date=\"minDate\" show-weeks=\"true\" class=\"well well-sm\"></datepicker>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.data.nilai.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.data.nilai.tpl.html",
    "<form class=\"form-apps\" name=\"nilaiPesertaDidikForm\" role=\"administration\" ng-submit=\"submit(nilaiPesertaDidikForm)\" ng-controller=\"nilaiPesertaDidikCtrl\">\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "		<legend>ID</legend>\n" +
    "\n" +
    "		<div class=\"row\" >\n" +
    "	    <pre>ID Peserta Didik</pre>\n" +
    "	    <input type=\"text\" ng-model=\"pesertaDidikObj.noInduk\" placeholder=\"Silahkan masukkan No Induk Peserta Didik\" typeahead=\"no_induk for no_induk in getPesertaDidik($viewValue)\" typeahead-loading=\"loadPesertaDidik\" class=\"form-control\">\n" +
    "	    <i ng-show=\"loadPesertaDidik\" class=\"glyphicon glyphicon-refresh\"></i>\n" +
    "		</div>\n" +
    "\n" +
    "		<legend>NILAI</legend>\n" +
    "		\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\">\n" +
    "			<label class=\"col-xs-4 \" for=\"jenisKegiatan\">Jenis Kegiatan</label>  \n" +
    "			<div class=\"col-xs-4\">\n" +
    "			<input  name=\"jenisKegiatan\" ng-model=\"pesertaDidikObj.jenisKegiatan\" type=\"text\" placeholder=\"Jenis Kegiatan\" class=\"form-control input-xs input-sm\">\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\">\n" +
    "				<label class=\"col-xs-4 \" for=\"tanggalKegiatan\">Tanggal Kegiatan</label>  \n" +
    "				<div class=\"col-md-6\">\n" +
    "						<p class=\"input-group\">\n" +
    "							<input type=\"text\" name=\"tanggalKegiatan\" class=\"form-control input-sm\" datepicker-popup=\"{{format}}\" ng-model=\"pesertaDidikObj.tanggalKegiatan\" is-open=\"opened\" min-date=\"minDate\" max-date=\"'2015-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "							<span class=\"input-group-btn\">\n" +
    "								<button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "							</span>\n" +
    "						</p>\n" +
    "				</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\">\n" +
    "			<label class=\"col-xs-4 \" for=\"aspek\">Aspek Penilaian</label>  \n" +
    "			<div class=\"col-xs-5\">\n" +
    "			<input  name=\"aspek\" ng-model=\"pesertaDidikObj.aspek\" type=\"text\" placeholder=\"Aspek Penilaian\" class=\"form-control input-xs input-sm\">\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Textarea -->\n" +
    "		<div class=\"row\">\n" +
    "			<label class=\"col-xs-4 \" for=\"textarea\">Penilaian</label>\n" +
    "			<div class=\"col-xs-8\">                     \n" +
    "				<textarea class=\"form-control input-xs input-sm\" name=\"penilaian\" ng-model=\"pesertaDidikObj.penilaian\"> </textarea>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Textarea -->\n" +
    "		<div class=\"row\">\n" +
    "			<label class=\"col-xs-4 \" for=\"textarea\">Saran</label>\n" +
    "			<div class=\"col-xs-8\">                     \n" +
    "				<textarea class=\"form-control input-xs input-sm\" name=\"saran\" ng-model=\"pesertaDidikObj.saran\"> </textarea>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<label class=\"col-md-3 \" for=\"button1id\"></label>\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<button name=\"button1id\" class=\"btn btn-success\">Submit</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.dosen.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.dosen.add.tpl.html",
    "<form name=\"dosenForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(dosenForm)\" ng-controller=\"DosenAddCtrl\" novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">DOSEN</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : dosenForm.nidn.$invalid && !dosenForm.nidn.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">NIDN </label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"NIDN\" ng-model=\"dosenObj.nidn\" type=\"text\" placeholder=\"NIDN\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"dosenForm.nidn.$invalid && !dosenForm.nidn.$pristine\" class=\"help-block\">nidn dosen harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : dosenForm.nama.$invalid && !dosenForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Nama Dosen</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"nama\" ng-model=\"dosenObj.nama\" type=\"text\" placeholder=\"Nama Dosen\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"dosenForm.nama.$invalid && !dosenForm.nama.$pristine\" class=\"help-block\">Nama dosen harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\" \n" +
    "					ng-disabled=\"dosenForm.$invalid || dosenForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.dosen.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.dosen.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.dosen.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.dosen.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/master/master.dosen.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.dosen.view.tpl.html",
    "<div ng-controller=\"ngTableDosenCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"dosen in $data\" ng-click='dosen.$selected = !dosen.$selected; changeSelection(dosen)' ng-class=\"{'active': dosen.$selected}\">\n" +
    "            <td data-title=\"'NIDN'\" sortable=\"'NIDN'\">\n" +
    "                {{dosen.NIDN}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Nama Dosen'\">\n" +
    "                {{dosen.nama}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.jurusan.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.jurusan.add.tpl.html",
    "<form name=\"jurusanForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(jurusanForm)\" ng-controller=\"JurusanAddCtrl\" novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">JURUSAN</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : jurusanForm.id.$invalid && !jurusanForm.id.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">ID </label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"id\" ng-model=\"jurusanObj.id\" type=\"text\" placeholder=\"Kode Jurusan\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"jurusanForm.id.$invalid && !jurusanForm.id.$pristine\" class=\"help-block\">id kelas harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : jurusanForm.nama.$invalid && !jurusanForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Nama kelas</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"nama\" ng-model=\"jurusanObj.nama\" type=\"text\" placeholder=\"Nama Jurusan\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"jurusanForm.nama.$invalid && !jurusanForm.nama.$pristine\" class=\"help-block\">Nama kelas harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\" \n" +
    "					ng-disabled=\"jurusanForm.$invalid || jurusanForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.jurusan.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.jurusan.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.jurusan.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.jurusan.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/master/master.jurusan.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.jurusan.view.tpl.html",
    "<div ng-controller=\"ngTableJurusanCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"jurusan in $data\" ng-click='jurusan.$selected = !jurusan.$selected; changeSelection(jurusan)' ng-class=\"{'active': jurusan.$selected}\">\n" +
    "            <td data-title=\"'ID'\" sortable=\"'idJurusan'\">\n" +
    "                {{jurusan.idJurusan}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Jurusan'\">\n" +
    "                {{jurusan.nama}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.kelas.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.kelas.add.tpl.html",
    "<form name=\"kelasForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(kelasForm)\" ng-controller=\"KelasAddCtrl\" novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">KELAS</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : kelasForm.id.$invalid && !kelasForm.id.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">ID </label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"id\" ng-model=\"kelasObj.id\" type=\"text\" placeholder=\"Kode Kelas\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"kelasForm.id.$invalid && !kelasForm.id.$pristine\" class=\"help-block\">id kelas harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : kelasForm.nama.$invalid && !kelasForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Nama kelas</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"nama\" ng-model=\"kelasObj.nama\" type=\"text\" placeholder=\"Nama Kelas\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"kelasForm.nama.$invalid && !kelasForm.nama.$pristine\" class=\"help-block\">Nama kelas harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\" \n" +
    "					ng-disabled=\"kelasForm.$invalid || kelasForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.kelas.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.kelas.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.kelas.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.kelas.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/master/master.kelas.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.kelas.view.tpl.html",
    "<div ng-controller=\"ngTableKelasCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"kelas in $data\" ng-click='kelas.$selected = !kelas.$selected; changeSelection(kelas)' ng-class=\"{'active': kelas.$selected}\">\n" +
    "            <td data-title=\"'ID'\" sortable=\"'idKelas'\">\n" +
    "                {{kelas.idKelas}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Kelas'\">\n" +
    "                {{kelas.nama}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/admin/master/master.mahasiswa.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mahasiswa.add.tpl.html",
    "<form name=\"mahasiswaForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(mahasiswaForm)\" ng-controller=\"MhsAddCtrl\"  novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">MAHASISWA</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : mahasiswaForm.npm.$invalid && !mahasiswaForm.npm.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">NPM</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"npm\" ng-model=\"mahasiswaObj.npm\" type=\"text\" placeholder=\"NPM\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"mahasiswaForm.npm.$invalid && !mahasiswaForm.npm.$pristine\" class=\"help-block\">NPM harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : mahasiswaForm.nama.$invalid && !mahasiswaForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Nama mahasiswa</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"nama\" ng-model=\"mahasiswaObj.nama\" type=\"text\" placeholder=\"Nama Mahasiswa\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"mahasiswaForm.nama.$invalid && !mahasiswaForm.nama.$pristine\" class=\"help-block\">Nama mahasiswa harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\"\n" +
    "					ng-disabled=\"mahasiswaForm.$invalid || mahasiswaForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.mahasiswa.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mahasiswa.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.mahasiswa.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.mahasiswa.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("pages/admin/master/master.mahasiswa.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mahasiswa.view.tpl.html",
    "<div ng-controller=\"ngTableMhsCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"mahasiswa in $data\" ng-click='mahasiswa.$selected = !mahasiswa.$selected; changeSelection(mahasiswa)' ng-class=\"{'active': mahasiswa.$selected}\">\n" +
    "            <td data-title=\"'NPM'\" sortable=\"'NPM'\">\n" +
    "                {{mahasiswa.NPM}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Nama'\">\n" +
    "                {{mahasiswa.nama}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Jenis Kelamin'\">\n" +
    "                {{mahasiswa.jk}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Tempat Lahir'\">\n" +
    "                {{mahasiswa.tmpt_lahir}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Tanggal Lahir'\">\n" +
    "                {{mahasiswa.tgl_lahir | date : dd-MM-yyyy}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Agama'\">\n" +
    "                {{mahasiswa.agama}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Keterangan'\">\n" +
    "                {{mahasiswa.keterangan}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.mataKuliah.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mataKuliah.add.tpl.html",
    "<form name=\"mataKuliahForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(mataKuliahForm)\" ng-controller=\"MataKuliahAddCtrl\" novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">MATA KULIAH</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : mataKuliahForm.id.$invalid && !mataKuliahForm.id.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">ID </label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"id\" ng-model=\"mataKuliahObj.id\" type=\"text\" placeholder=\"Kode Mata Kuliah\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"mataKuliahForm.id.$invalid && !mataKuliahForm.id.$pristine\" class=\"help-block\">Kode Mata Kuliah harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : mataKuliahForm.nama.$invalid && !mataKuliahForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Mata Kuliah</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"nama\" ng-model=\"mataKuliahObj.nama\" type=\"text\" placeholder=\"Nama Mata Kuliah\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"mataKuliahForm.nama.$invalid && !mataKuliahForm.nama.$pristine\" class=\"help-block\">Nama Mata Kuliah harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : mataKuliahForm.sks.$invalid && !mataKuliahForm.sks.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Jumlah SKS</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"sks\" ng-model=\"mataKuliahObj.sks\" type=\"number\" placeholder=\"Jumlah SKS\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"mataKuliahForm.sks.$invalid && !mataKuliahForm.sks.$pristine\" class=\"help-block\">SKS harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\" \n" +
    "					ng-disabled=\"mataKuliahForm.$invalid || mataKuliahForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>");
}]);

angular.module("pages/admin/master/master.mataKuliah.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mataKuliah.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.mataKuliah.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.mataKuliah.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/master/master.mataKuliah.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.mataKuliah.view.tpl.html",
    "<div ng-controller=\"ngTableMataKuliahCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"mataKuliah in $data\" ng-click='mataKuliah.$selected = !mataKuliah.$selected; changeSelection(mataKuliah)' ng-class=\"{'active': mataKuliah.$selected}\">\n" +
    "            <td data-title=\"'ID'\" sortable=\"'idmata_kuliah'\">\n" +
    "                {{mataKuliah.idmata_kuliah}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Mata Kuliah'\">\n" +
    "                {{mataKuliah.nama}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'SKS'\">\n" +
    "                {{mataKuliah.sks}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.semester.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.semester.add.tpl.html",
    "<form name=\"semesterForm\"  class=\"form-apps\" role=\"administration\" ng-controller=\"SemesterAddCtrl\" ng-submit=\"submit(semesterForm)\"  novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">SEMESTER</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : semesterForm.id.$invalid && !semesterForm.id.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">ID </label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"id\" ng-model=\"semesterObj.id\" type=\"text\" placeholder=\"Kode Semester\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"semesterForm.id.$invalid && !semesterForm.id.$pristine\" class=\"help-block\">id semester harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Select Basic -->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : semesterForm.nama.$invalid && !semesterForm.nama.$pristine }\">\n" +
    "			<label class=\"col-xs-4 \" >Semester</label>\n" +
    "			<div class=\"col-xs-7\">\n" +
    "				<select  name=\"semester\" ng-model=\"semesterObj.nama\" class=\"form-control input-sm\">\n" +
    "					<option value=\"Ganjil\">Ganjil</option>\n" +
    "					<option value=\"Genap\">Genap</option>\n" +
    "				</select>\n" +
    "				<p ng-show=\"semesterForm.nama.$invalid && !semesterForm.nama.$pristine\" class=\"help-block\">Semester harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : semesterForm.tahunAjaran.$invalid && !semesterForm.tahunAjaran.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Tahun Ajaran</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"tahunAjaran\" ng-model=\"semesterObj.tahunAjaran\" type=\"text\" placeholder=\"Tahun Ajaran\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"semesterForm.tahunAjaran.$invalid && !semesterForm.tahunAjaran.$pristine\" class=\"help-block\">Tahun Ajaran harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\"\n" +
    "					ng-disabled=\"semesterForm.$invalid || semesterForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/master/master.semester.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.semester.tpl.html",
    "<div>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.semester.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "        <a ui-sref=\"app.admin.master.semester.add\" class=\"btn\"><i class=\"\"> </i> Add</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/master/master.semester.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.semester.view.tpl.html",
    "<div ng-controller=\"ngTableSemesterCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"semester in $data\" ng-click='semester.$selected = !semester.$selected; changeSelection(semester)' ng-class=\"{'active': semester.$selected}\">\n" +
    "            <td data-title=\"'ID'\" sortable=\"'idSemester'\">\n" +
    "                {{semester.idSemester}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Semester'\">\n" +
    "                {{semester.semester}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Tahun Ajaran'\">\n" +
    "                {{semester.tahun_ajaran}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "                <!--<a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a>-->\n" +
    "                <!--<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/admin/master/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/master/master.tpl.html",
    "<div>\n" +
    "    <h2 class=\"text-center\"><i class=\"glyphicon glyphicon-briefcase\"></i> MASTER DATA</h2>\n" +
    "<hr/>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.master.mahasiswa.view\" class=\"btn\"><i class=\"\"> Mahasiswa</i></a>\n" +
    "        <a ui-sref=\"app.admin.master.dosen.view\" class=\"btn\"><i class=\"\"> Dosen</i></a>\n" +
    "        <a ui-sref=\"app.admin.master.mataKuliah.view\" class=\"btn\"><i class=\"\"> Mata Kuliah</i></a>\n" +
    "        <a ui-sref=\"app.admin.master.kelas.view\" class=\"btn\"><i class=\"\"> Kelas</i></a>\n" +
    "        <a ui-sref=\"app.admin.master.jurusan.view\" class=\"btn\"><i class=\"\"> Jurusan</i></a>\n" +
    "        <a ui-sref=\"app.admin.master.semester.view\" class=\"btn\"><i class=\"\"> Semester</i></a>\n" +
    "    </div>\n" +
    "<hr/>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/nilai/nilai.add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/nilai/nilai.add.tpl.html",
    "<form name=\"nilaiForm\"  class=\"form-apps\" role=\"administration\" ng-submit=\"submit(nilaiForm)\" ng-controller=\"NilaiAddCtrl\" novalidate>\n" +
    "	<div class=\"well well-sm\">\n" +
    "		<!-- Form Name -->\n" +
    "\n" +
    "		  <div class=\"alert alert-success\">\n" +
    "		    		<legend class=\"text-center\">NILAI</legend>\n" +
    "		    <p class=\"text-center\"></p>\n" +
    "		  </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.npm.$invalid && !nilaiForm.npm.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">NPM</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"npm\" ng-model=\"nilaiObj.npm\" type=\"text\" placeholder=\"NPM\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"nilaiForm.npm.$invalid && !nilaiForm.npm.$pristine\" class=\"help-block\">NPM harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.idmata_kuliah.$invalid && !nilaiForm.idmata_kuliah.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Kode Mata Kuliah </label>\n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"idmata_kuliah\" ng-model=\"nilaiObj.idmata_kuliah\" type=\"text\" placeholder=\"Kode Mata Kuliah\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"nilaiForm.idmata_kuliah.$invalid && !nilaiForm.idmata_kuliah.$pristine\" class=\"help-block\">Kode harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.idSemester.$invalid && !nilaiForm.idSemester.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Kode Semester</label>\n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"idSemester\" ng-model=\"nilaiObj.idSemester\" type=\"text\" placeholder=\"Kode Semester\" class=\"form-control input-xs input-sm\" required>\n" +
    "				<p ng-show=\"nilaiForm.idSemester.$invalid && !nilaiForm.idSemester.$pristine\" class=\"help-block\">Kode Semester harus diisi</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "    <!-- Select Basic -->\n" +
    "    <div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.semester_berjalan.$invalid }\">\n" +
    "      <label class=\"col-xs-4 \" >Semester</label>\n" +
    "      <div class=\"col-xs-7\">\n" +
    "        <select  name=\"semester_berjalan\" ng-model=\"nilaiObj.semester_berjalan\" class=\"form-control input-sm\">\n" +
    "          <option value=\"I\">I</option>\n" +
    "          <option value=\"II\">II</option>\n" +
    "          <option value=\"III\">III</option>\n" +
    "          <option value=\"IV\">IV</option>\n" +
    "          <option value=\"V\">V</option>\n" +
    "          <option value=\"VI\">VI</option>\n" +
    "          <option value=\"VII\">VII</option>\n" +
    "          <option value=\"VIII\">VIII</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.kehadiran.$invalid && !nilaiForm.kehadiran.$pristine }\">\n" +
    "			<label class=\"col-xs-4\">Kehadiran</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"kehadiran\" ng-model=\"nilaiObj.kehadiran\" type=\"number\" placeholder=\"Nilai Kehadiran\" class=\"form-control input-xs input-sm\" >\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.tugas.$invalid  }\">\n" +
    "			<label class=\"col-xs-4\">Tugas</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"tugas\" ng-model=\"nilaiObj.tugas\" type=\"number\" placeholder=\"Nilai Tugas\" class=\"form-control input-xs input-sm\" >\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.uts.$invalid}\">\n" +
    "			<label class=\"col-xs-4\">UTS</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"uts\" ng-model=\"nilaiObj.uts\" type=\"number\" placeholder=\"Nilai UTS\" class=\"form-control input-xs input-sm\" >\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Text input-->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.uas.$invalid }\">\n" +
    "			<label class=\"col-xs-4\">UAS</label>  \n" +
    "			<div class=\"col-xs-7\" >\n" +
    "			<input name=\"uas\" ng-model=\"nilaiObj.uas\" type=\"number\" placeholder=\"Nilai UAS\" class=\"form-control input-xs input-sm\" >\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Select Basic -->\n" +
    "		<div class=\"row\" ng-class=\"{ 'has-error' : nilaiForm.nilaiAkhir.$invalid }\">\n" +
    "			<label class=\"col-xs-4 \" >Nilai Akhir</label>\n" +
    "			<div class=\"col-xs-7\">\n" +
    "				<select  name=\"nilaiAkhir\" ng-model=\"nilaiObj.nilaiAkhir\" class=\"form-control input-sm\">\n" +
    "					<option value=\"A\">A</option>\n" +
    "					<option value=\"B\">B</option>\n" +
    "					<option value=\"C\">C</option>\n" +
    "					<option value=\"D\">D</option>\n" +
    "					<option value=\"E\">E</option>\n" +
    "				</select>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"btn btn-lg btn-block btn-success\" type=\"submit\"\n" +
    "					ng-disabled=\"nilaiForm.$invalid || nilaiForm.$pristine\"> Input\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("pages/admin/nilai/nilai.search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/nilai/nilai.search.tpl.html",
    "<div>\n" +
    "    <h4><i class=\"glyphicon glyphicon-briefcase\"></i> Detail Peserta Didik</h4>\n" +
    "    <div class=\"pull left\">\n" +
    "        <a ui-sref=\"app.admin.overviewPesertaDidik.detail.alamat\" class=\"btn\"><i class=\"fa fa-pencil\"></i> Alamat</a>\n" +
    "        <a ui-sref=\"app.admin.overviewPesertaDidik.detail.kesehatan\" class=\"btn\"><i class=\"fa fa-edit\"> Kesehatan</i></a>\n" +
    "        <a ui-sref=\"app.admin.overviewPesertaDidik.detail.orangtua\" class=\"btn\"><i class=\"fa fa-edit\"> Orang Tua</i></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/nilai/nilai.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/nilai/nilai.tpl.html",
    "<div>\n" +
    "    <h2 class=\"text-center\"><i class=\"glyphicon glyphicon-briefcase\"></i> DATA NILAI</h2>\n" +
    "    <hr/>\n" +
    "    <div class=\"pull left\">\n" +
    "        <!--<a ui-sref=\"app.admin.nilai.search\" class=\"btn\"><i class=\"\"></i> Search</a>-->\n" +
    "        <a ui-sref=\"app.admin.nilai.add\" class=\"btn\"><i class=\"\"></i> Add</a>\n" +
    "        <a ui-sref=\"app.admin.nilai.view\" class=\"btn\"><i class=\"\"></i> View</a>\n" +
    "    </div>\n" +
    "    <hr/>\n" +
    "</div>\n" +
    "<ui-view></ui-view>\n" +
    "");
}]);

angular.module("pages/admin/nilai/nilai.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/nilai/nilai.view.tpl.html",
    "<div ng-controller=\"ngTableNilaiCtrl\">\n" +
    "    <table ng-table=\"tableParams\" class=\"table ng-table-responsive ng-table-rowselected \">\n" +
    "        <tr ng-repeat=\"nilai in $data\" ng-click='nilai.$selected = !nilai.$selected; changeSelection(nilai)' ng-class=\"{'active': nilai.$selected}\">\n" +
    "            <td data-title=\"'NPM'\" sortable=\"'no_induk'\"> {{nilai.NPM}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Nama'\"> {{nilai.nama}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Mata Kuliah'\"> {{nilai.idmata_kuliah}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'SKS'\"> {{nilai.sks}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Kehadiran'\"> {{nilai.kehadiran}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Tugas'\"> {{nilai.tugas}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'UTS'\"> {{nilai.uts}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'UAS'\"> {{nilai.uas}}\n" +
    "            </td>\n" +
    "            <td data-title=\"'Nilai Akhir'\"> {{nilai.nilai_akhir}}\n" +
    "            </td>\n" +
    "            <!--<td data-title=\"''\">-->\n" +
    "               <!--&lt;!&ndash; <a href=\"#\" class=\"btn\"><i class=\"fa fa-edit\"></i></a> &ndash;&gt;-->\n" +
    "                <!--&lt;!&ndash;<a class=\"btn\" ng-click=\"deleteData()\"><i class=\"fa fa-trash-o\"></i></a>&ndash;&gt;-->\n" +
    "            <!--</td>-->\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/admin/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/admin/overview.tpl.html",
    "<div class=\"container\">\n" +
    "    <div>\n" +
    "    	<h4 class=\"text-success\"><strong>SISTEM INFORMASI NILAI</strong></h4>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">\n" +
    "                        <span class=\"glyphicon glyphicon-bookmark\"></span> Quick Overview</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                  <p class=\"text-center\">Selamat datang di Aplikasi Sistem Informasi Nilai</p>\n" +
    "                  <p class=\"text-justify\">Aplikasi ini menggunakan nodejs sebagai back end dan angularjs sebagai front end. Bootstrap 3 digunakan sebagai styling tema dan report menggunakan pdfmake. Basis data yang digunakan ialah Mysql. Untuk pengalaman terbaik disarankan untuk menggunakan browser google-chrome terbaru. Fitur report yang digunakan belum bisa berjalan dengan baik menggunakan browser selain google-chrome </p>\n" +
    "                  <p class=\"text-justify\">Melalui aplikasi ini diharapkan efisiensi kegiatan belajar mengajar dapat meningkat dan kegiatan administrasi data dapat lebih teratur. Fungsionalitas yang disediakan masih terbatas, namun seiring waktu akan terus dilakukan perbaikan demi meningkatkan kualitas pelayanan. :)</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"display:inline-block; min-height:290px;\" class=\"pull-left\">\n" +
    "            <datepicker ng-model=\"dt\" min-date=\"minDate\" show-weeks=\"true\" class=\"well well-sm\"></datepicker>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/nilai/nilai.print.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/nilai/nilai.print.tpl.html",
    "<div ng-controller=\"NilaiCtrl\">\n" +
    "  <div class=\"container\">\n" +
    "    <iframe id=\"khs1\" src=\"/report/khs1.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\"  ng-click=\"printTrigger('khs1'); \">Semester 1</button>\n" +
    "    <iframe id=\"khs2\" src=\"/report/khs2.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs2');\">Semester 2</button>\n" +
    "    <iframe id=\"khs3\" src=\"/report/khs3.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs3');\">Semester 3</button>\n" +
    "    <iframe id=\"khs4\" src=\"/report/khs4.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs4');\">Semester 4</button>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <iframe id=\"khs5\" src=\"/report/khs5.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs5');\">Semester 5</button>\n" +
    "    <iframe id=\"khs6\" src=\"/report/khs6.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs6');\">Semester 6</button>\n" +
    "    <iframe id=\"khs7\" src=\"/report/khs7.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs7');\">Semester 7</button>\n" +
    "    <iframe id=\"khs8\" src=\"/report/khs8.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-primary\"  value=\"Print\" ng-click=\"printTrigger('khs8');\">Semester 8</button>\n" +
    "  </div>\n" +
    "   <br>\n" +
    "  <div class=\"container\">\n" +
    "    <iframe id=\"transkrip\" src=\"/report/transkrip.html\"  style=\"display:none;\" ></iframe>\n" +
    "    <button class=\"btn btn-success\"  value=\"Print\" ng-click=\"printTrigger('transkrip');\">Transkrip</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/nilai/nilai.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/nilai/nilai.tpl.html",
    "\n" +
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "          <div class=\"col-xs-12\"><h3>BERANDA</h3></div>\n" +
    "        </div>    \n" +
    "    <div class=\"row\" >\n" +
    "          <div class=\"col-sm-3\">\n" +
    "            <div class=\"sidebar-nav0\">\n" +
    "              <div class=\"navbar0 navbar-default\" role=\"navigation\">\n" +
    "                <div class=\"navbar-header\">\n" +
    "                  <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                  </button>\n" +
    "                  <span class=\"visible-xs navbar-brand\">Sidebar Menu</span>\n" +
    "                </div>\n" +
    "                <div class=\"navbar-collapse collapse sidebar-navbar-collapse\" ng-class=\"{'in':!navCollapsed}\">\n" +
    "                  <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a ui-sref=\"app.nilai.view\"><span class=\"glyphicon glyphicon-user\"></span> <strong> View Nilai</strong></a></li>\n" +
    "                    <li><a ui-sref=\"app.nilai.print\"><span class=\"glyphicon glyphicon-print\"></span> Cetak Nilai</a></li>\n" +
    "                  </ul>\n" +
    "                </div><!--/.nav-collapse -->\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <ui-view ></ui-view>   \n" +
    "          </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/nilai/nilai.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/nilai/nilai.view.tpl.html",
    "\n" +
    "<div ng-controller=\"NilaiCtrl\" >\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-xs-12 text-center\"><h3>NILAI AKADEMIK MAHASISWA</h3></div>\n" +
    "		</br>\n" +
    "	</div>\n" +
    "	<div class=\"row\" >\n" +
    "		<div class=\"col-xs-12 text-center\"><h4>{{nama_mhs}} / {{NPM}}</h4></div>\n" +
    "	</div>    \n" +
    "	<div class=\"row\" >\n" +
    "		<hr />\n" +
    "		<tabset>\n" +
    "		    <tab heading=\"Semester 1\"  ng-click=\"loadData('/admin/nilai/I')\" ng-init=\"loadData('/admin/nilai/I')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "          <tr>\n" +
    "            <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "          </tr>\n" +
    "          <tr data-ng-repeat=\"data in datas\">\n" +
    "            <td>{{data.no}}</td>\n" +
    "            <td>{{data.nama}}</td>\n" +
    "            <td>{{data.sks}}</td>\n" +
    "            <td>{{data.uts}}</td>\n" +
    "            <td>{{data.uas}}</td>\n" +
    "            <td>{{data.nilai_akhir}}</td>\n" +
    "          </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "        </tab>\n" +
    "		    <tab heading=\"Semester 2\" ng-click=\"loadData('/admin/nilai/II')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas \">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "              </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 3\" ng-click=\"loadData('/admin/nilai/III')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 4\" ng-click=\"loadData('/admin/nilai/IV')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 5\" ng-click=\"loadData('/admin/nilai/V')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 6\" ng-click=\"loadData('/admin/nilai/VI')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 7\" ng-click=\"loadData('/admin/nilai/VII')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <tab heading=\"Semester 8\" ng-click=\"loadData('/admin/nilai/VIII')\">\n" +
    "          <table class=\"table table-striped table-bordered table-hover table-condensed\">\n" +
    "            <tr>\n" +
    "              <th>No</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai UTS</th><th>Nilai UAS</th><th>Nilai Akhir</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"data in datas\">\n" +
    "              <td>{{data.no}}</td>\n" +
    "              <td>{{data.nama}}</td>\n" +
    "              <td>{{data.sks}}</td>\n" +
    "              <td>{{data.uts}}</td>\n" +
    "              <td>{{data.uas}}</td>\n" +
    "              <td>{{data.nilai_akhir}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td colspan=\"5\">INDEKS PRESTASI SEMESTER</td>\n" +
    "              <td>{{ip_semester | number : 2}}</td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "		    </tab>\n" +
    "		    <!--<tab ng-repeat=\"tab in tabs\" heading=\"{{tab.title}}\" active=\"tab.active\" disabled=\"tab.disabled\">-->\n" +
    "		      <!--{{tab.content}}-->\n" +
    "		    <!--</tab>-->\n" +
    "	  	</tabset>\n" +
    "	  	<hr />\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/user/user.akun.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/user/user.akun.tpl.html",
    "\n" +
    "<div ng-controller=\"AkunUserCtrl\">\n" +
    "	<h3 class=\"text-center\"><i class=\"fa fa-key\"></i> UPDATE PASSWORD</h3>\n" +
    "    <form class=\"form-apps\" style=\"max-width: 350px\" name=\"passwordForm\" role=\"registration\" ng-submit=\"submit(passwordForm)\">\n" +
    "		<div class=\"well well-sm\">\n" +
    "			<div class=\"alert alert-success\">\n" +
    "				<h5 class=\" text-center \"><i class=\"fa fa-user\"></i> Update Password</h5>\n" +
    "				<p class=\"text-center\"></p>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "			    <input type=\"password\" class=\"form-control password\" placeholder=\"Password\" name=\"password\" ng-model=\"passwordObj.password\" ng-minlength=\"4\" ng-maxlength=\"16\" ng-required=\"true\" password-match=\"passwordObj.password2\">\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "			    <input type=\"password\" class=\"form-control password2\" placeholder=\"Repeat Password\" name=\"password2\" ng-model=\"passwordObj.password2\">\n" +
    "			    <div class=\"errors\" ng-class=\"{ active: passwordForm.password.$invalid && passwordForm.password.$dirty }\">\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.match\">\n" +
    "			        <p>Password tidak cocok</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.minlength\">\n" +
    "			        <p>Password minimal 4 karakter</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"error ng-hide\" ng-show=\"passwordForm.password.$error.maxlength\">\n" +
    "			        <p>Password maksimal 16 karakter</p>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		  	<div class=\"row\">\n" +
    "			  	<button class=\"btn btn-lg btn-block\" type=\"submit\"\n" +
    "			    ng-class=\"{ 'btn-primary': passwordForm.$valid && passwordForm.$dirty, 'btn-success': redirect }\"\n" +
    "			    ng-disabled=\"passwordForm.$invalid || passwordForm.$pristine || xhr \">\n" +
    "			    <span >UPDATE <i class=\"fa fa-repeat fa-spin\" ng-show=\"xhr\"></i></span>\n" +
    "			  	</button>\n" +
    "		  	</div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/user/user.biodata.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/user/user.biodata.tpl.html",
    "\n" +
    "<div ng-controller=\"BiodataUserCtrl\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12  col-md-8\">\n" +
    "            <div class=\"well well-sm\">\n" +
    "                <div class=\"row\">\n" +
    "                	<div class=\"col-xs-12\">\n" +
    "                      <h4 class=\"text-center\"><strong>DATA MAHASISWA</strong></h4>\n" +
    "                    <hr/>\n" +
    "                	</div>\n" +
    "                  <hr/>\n" +
    "                    <div class=\" col-md-4\">\n" +
    "                      <div >\n" +
    "                        <img src=\"/img/photo.png\" alt=\"\" class=\"img-rounded img-responsive\" />\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\" col-md-8\">\n" +
    "                      <table class=\"table table-condensed\">\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-user\"></i> Nama  </p></td>\n" +
    "                          <td><p> {{nama}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td> <p><i class=\"glyphicon glyphicon-gift\"></i> Tempat tgl Lahir </p></td>\n" +
    "                          <td><p> {{tgl_lahir}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-calendar\"></i> Jenis Kelamin </p></td>\n" +
    "                          <td><p> {{jk}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-calendar\"></i> Agama </p></td>\n" +
    "                          <td><p> {{agama}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-map-marker\"></i> Alamat </p></td>\n" +
    "                          <td><p> {{alamat}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-earphone\"></i> Telepon/ Hp</p></td>\n" +
    "                          <td><p> {{telepon}}</p></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><p><i class=\"glyphicon glyphicon-envelope\"></i> Email </p></td>\n" +
    "                          <td><p> {{email}}</p></td>\n" +
    "                        </tr>\n" +
    "                      </table>\n" +
    "                        <!-- Split button --> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" >  \n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/user/user.print.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/user/user.print.tpl.html",
    "\n" +
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "          <div class=\"col-xs-12\"><h3>CETAK DATA</h3></div>\n" +
    "        </div>    \n" +
    "    <div class=\"row\" >\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("pages/user/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/user/user.tpl.html",
    "\n" +
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "          <div class=\"col-xs-12\"><h3>BERANDA</h3></div>\n" +
    "        </div>    \n" +
    "    <div class=\"row\" >\n" +
    "          <div class=\"col-sm-3\">\n" +
    "            <div class=\"sidebar-nav0\">\n" +
    "              <div class=\"navbar0 navbar-default\" role=\"navigation\">\n" +
    "                <div class=\"navbar-header\">\n" +
    "                  <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                  </button>\n" +
    "                  <span class=\"visible-xs navbar-brand\">Sidebar Menu</span>\n" +
    "                </div>\n" +
    "                <div class=\"navbar-collapse collapse sidebar-navbar-collapse\" ng-class=\"{'in':!navCollapsed}\">\n" +
    "                  <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a ui-sref=\"app.user.biodata\"><span class=\"glyphicon glyphicon-user\"></span> <strong> Biodata</strong></a></li>\n" +
    "                    <!--<li><a ui-sref=\"app.user.print\"><span class=\"glyphicon glyphicon-print\"></span> Cetak Data</a></li>-->\n" +
    "                    <li><a ui-sref=\"app.user.akun\"><span class=\"glyphicon glyphicon-lock\"></span> Akun</a></li>\n" +
    "\n" +
    "                  </ul>\n" +
    "                </div><!--/.nav-collapse -->\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <ui-view ></ui-view>   \n" +
    "          </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/register.tpl.html",
    "<form class=\"form-signin\" name=\"registerForm\" role=\"registration\" ng-submit=\"submit(registerForm)\">\n" +
    "  <div class=\"alert alert-warning\">\n" +
    "    <p class=\"text-center\"><strong>Register</strong></p>\n" +
    "    <p class=\"text-center\"></p>\n" +
    "  </div>\n" +
    "  <h2 class=\"form-signin-heading\"><i class=\"fa fa-user\"></i> Registrasi Mahasiswa</h2>\n" +
    "  <!--div class=\"form-group\">\n" +
    "    <label for=\"username\" class=\"col-lg-2 control-label\">Email</label>\n" +
    "    <div class=\"col-lg-10\">\n" +
    "      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n" +
    "    </div>\n" +
    "  </div-->\n" +
    "  <div class=\"form-input username\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"NPM\" name=\"username\" ng-model=\"registerObj.username\" autofocus=\"true\"\n" +
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
    "  <div class=\"form-input password\">\n" +
    "    <input type=\"password\" class=\"form-control password\" placeholder=\"Password\" name=\"password\" ng-model=\"registerObj.password\" ng-minlength=\"4\" ng-maxlength=\"16\" ng-required=\"true\" password-match=\"registerObj.password2\">\n" +
    "    <input type=\"password\" class=\"form-control password2\" placeholder=\"Repeat Password\" name=\"password2\" ng-model=\"registerObj.password2\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.password.$invalid && registerForm.password.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.match\">\n" +
    "        <p>Password tidak cocok.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.minlength\">\n" +
    "        <p>Silahkan gunakan password lebih dari 4 karakter.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.password.$error.maxlength\">\n" +
    "        <p>Password tidak boleh lebih dari 16 karakter</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-input email\">\n" +
    "    <input type=\"email\" class=\"form-control email\" placeholder=\"E-Mail\" name=\"email\" ng-model=\"registerObj.email\" ng-required=\"true\" remote-validated=\"used\">\n" +
    "    <div class=\"errors\" ng-class=\"{ active: registerForm.email.$invalid && registerForm.email.$dirty }\">\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.email.$error.email\">\n" +
    "        <p>E-Mail tidak valid.</p>\n" +
    "      </div>\n" +
    "      <div class=\"error ng-hide\" ng-show=\"registerForm.email.$error.used\">\n" +
    "        <p>E-Mail sudah digunakan.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <button class=\"btn btn-lg btn-block\" type=\"submit\"\n" +
    "    ng-class=\"{ 'btn-primary': registerForm.$valid && registerForm.$dirty, 'btn-success': redirect }\"\n" +
    "    ng-disabled=\"registerForm.$invalid || registerForm.$pristine || xhr || redirect\">\n" +
    "    <span ng-hide=\"redirect\">Register <i class=\"fa fa-repeat fa-spin\" ng-show=\"xhr\"></i></span>\n" +
    "    <span ng-show=\"redirect\">Redirecting... <i class=\"fa fa-repeat fa-spin\"></i></span>\n" +
    "  </button>\n" +
    "</form>");
}]);

angular.module("register/registerUser.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/registerUser.tpl.html",
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
    "\n" +
    "");
}]);

angular.module("report/report.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("report/report.tpl.html",
    "<div  class=\"container\" >\n" +
    "	<h2> LAPORAN </h2>\n" +
    "	<div class=\"col-xs-6\">\n" +
    "		<p><strong> REPORT </strong> </p>\n" +
    "		<ul>\n" +
    "			<li><a href=\"/admin/get/lap/pesertaDidik\" target=\"_blank\"><button class=\"btn btn-primary btn-sm btn-outline\"><span class=\"glyphicon glyphicon-print\"></span></button> Data Peserta Didik</a></li>\n" +
    "			<li><a href=\"/admin/get/lap/orangtuaPesertaDidik\" target=\"_blank\"><button  class=\"btn btn-primary btn-sm btn-outline\"><span class=\"glyphicon glyphicon-print\"></span></button> Orang Tua Peserta Didik</a></li>\n" +
    "			<li><a href=\"/admin/get/lap/pendidik\" target=\"_blank\"><button class=\"btn btn-primary btn-sm btn-outline\"><span class=\"glyphicon glyphicon-print\"></span></button> Data Pendidik</a></li>\n" +
    "			<!--<li><button ng-click=\"printDataPendidikanPendidik()\" class=\"btn btn-primary btn-sm btn-outline\"><span class=\"glyphicon glyphicon-print\"></span></button> Riwayat Kependidikan</li>-->\n" +
    "			<li><a href=\"/admin/get/lap/bulanan\" target=\"_blank\"><button  class=\"btn btn-primary btn-sm btn-outline\"><span class=\"glyphicon glyphicon-print\"></span></button> Laporan Bulanan</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-xs-6\">\n" +
    "	<p><strong> Format Administrasi</strong> </p>\n" +
    "		<ul class=\"fa-ul\">\n" +
    "			<li><a href=\"/admin/get/form/daftar\" target=\"_blank\"><i class=\"fa-li fa fa-circle-o-notch\"></i> <button  class=\"btn btn-info btn-sm btn-outline\"><span class=\"glyphicon glyphicon-download\"></span></button> Form Pendaftaran</a></li>\n" +
    "			<li><a href=\"/admin/get/form/nilai\" target=\"_blank\"><button class=\"btn btn-info btn-sm btn-outline\" ><span class=\"glyphicon glyphicon-download\"></span></button> Form Penilaian</b></a></li>\n" +
    "			<li><a href=\"/admin/get/form/absen\" target=\"_blank\"><button class=\"btn btn-info btn-sm btn-outline\" ><span class=\"glyphicon glyphicon-download\"></span></button> Form Absen</b> </a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
