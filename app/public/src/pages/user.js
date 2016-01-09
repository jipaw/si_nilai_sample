angular.module('PAUDku.user', [ 'PAUDku.grandfather', 'ui.bootstrap'])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.user', {
      url: '/user',
      templateUrl: 'pages/user/user.tpl.html',
      //controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.biodata', {
      url: '/biodata',
      templateUrl: "pages/user/user.biodata.tpl.html",
      //controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.akun', {
      url: '/akun',
      templateUrl: 'pages/user/user.akun.tpl.html',
      //controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.print', {
      url: '/print',
      templateUrl: 'pages/user/user.print.tpl.html',
      //controller: 'UserController',
      accessLevel: accessLevels.user
    });
})
  .controller('BiodataUserCtrl', function ($scope, $http ) {
    // ajax request to app
    $http.get('/admin/get/mahasiswa/data')
      .success(function (data ) {
        $scope.npm = data[0].NPM;
        $scope.nama = data[0].nama;
      });
  })
  .controller('AkunUserCtrl', function ($scope, $http, $state, $timeout) {
    //POST data
    $scope.xhr = false;
    $scope.redirect = false;
    $scope.submit = function (formInstance) {
      $scope.xhr = true;
      $http.post('/update', $scope.passwordObj)
        .success(function (data, status, headers, config) {
          console.info('post success - ', data);
          $scope.xhr = false;
          $scope.redirect = true;
          $timeout(function () {
            $state.go('app.user.biodata');
          }, 500);
        })
        .error(function (data, status, headers, config) {
          //data.errors.forEach(function (error, index, array) {
          //  formInstance[error.field].$error[error.name] = true;
          //});
          formInstance.$setPristine();
          //console.info('post error - ', data);
          $scope.xhr = false;
        });
    };
  });
