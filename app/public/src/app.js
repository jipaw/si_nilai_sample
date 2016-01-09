angular.module('PAUDku', [
  // login service
  'loginService',
  'appService',
  //'PAUDku.mock',
  'PAUDku.directives',
  // different app sections
  'PAUDku.home',
  'PAUDku.pages',
  'PAUDku.register',
  'PAUDku.user',
  'PAUDku.nilai',
  'PAUDku.error',
  'PAUDku.reports',
  // components
  'ui.bootstrap',
  'ngAnimate',
  'ngTable',
])

.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})
.run(function ($rootScope) {
  /**
   * $rootScope.doingResolve is a flag useful to display a spinner on changing states.
   * Some states may require remote data so it will take awhile to load.
   */
  var resolveDone = function () { $rootScope.doingResolve = false; };
  $rootScope.doingResolve = false;

  $rootScope.$on('$stateChangeStart', function () {
    $rootScope.doingResolve = true;
  });
  $rootScope.$on('$stateChangeSuccess', resolveDone);
  $rootScope.$on('$stateChangeError', resolveDone);
  $rootScope.$on('$statePermissionError', resolveDone);
})
.controller('BodyController', function ($scope, $state, $stateParams, loginService, $http, $timeout) {
  // Expose $state and $stateParams to the <body> tag
  $scope.navCollapsed = true;

  $scope.$state = $state;
  $scope.$stateParams = $stateParams;

  $scope.add = {
    success : false,
    failed : false
  };
  $scope.remove = {
    success : false,
    failed : false
  };
  // loginService exposed and a new Object containing login user/pwd
  $scope.ls = loginService;
  $scope.login = {
    working: false,
    wrong: false
  };

  $scope.loginMe = function () {
    // setup promise, and 'working' flag
    var loginPromise = $http.post('/login', $scope.login);
    $scope.login.working = true;
    $scope.login.wrong = false;

    loginService.loginUser(loginPromise);

    loginPromise.error(function () {
      $scope.login.wrong = true;
      $timeout(function () { $scope.login.wrong = false; }, 2000);
    });
    loginPromise.finally(function () {
      $scope.login.working = false;
    });
  };
  $scope.logoutMe = function () {
    loginService.logoutUser($http.get('/logout'));
  };
});
