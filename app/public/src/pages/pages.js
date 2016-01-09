angular.module('PAUDku.pages', [ 'PAUDku.grandfather', 'ngTable', 'ui.bootstrap', 'appService'])
.config(function ($stateProvider) {
	$stateProvider
		.state('app.admin', {
			url: '/admin',
			templateUrl: 'pages/admin.tpl.html',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.overview', {
			url: '/overview',
			views: {
				'@app.admin' :{
					templateUrl: "pages/admin/overview.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.akun', {
			url: '/akun',
			views: {
				'@app.admin' :{
					templateUrl: "pages/admin/akun/akun.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.akun.overview', {
			url: '/overview',
			views: {
				'@app.admin.akun' :{
					templateUrl: "pages/admin/akun/akun.overview.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.akun.overview.password', {
			url: '/pass',
			views: {
				'@app.admin.akun.overview' :{
					templateUrl: "pages/admin/akun/akun.overview.pass.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.akun.user', {
			url: '/user',
			views: {
				'@app.admin.akun' :{
					templateUrl: "pages/admin/akun/akun.user.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master', {
			url: '/master',
			views: {
				'@app.admin' :{
					templateUrl: "pages/admin/master/master.tpl.html"
				},
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mahasiswa', {
			url: '/mahasiswa',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.mahasiswa.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mahasiswa.view', {
			url: '/view',
			views: {
				'@app.admin.master.mahasiswa' :{
					templateUrl: "pages/admin/master/master.mahasiswa.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mahasiswa.add', {
			url: '/add',
			views: {
				'@app.admin.master.mahasiswa' :{
					templateUrl: "pages/admin/master/master.mahasiswa.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.dosen', {
			url: '/dosen',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.dosen.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.dosen.view', {
			url: '/view',
			views: {
				'@app.admin.master.dosen' :{
					templateUrl: "pages/admin/master/master.dosen.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.dosen.add', {
			url: '/add',
			views: {
				'@app.admin.master.dosen' :{
					templateUrl: "pages/admin/master/master.dosen.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mataKuliah', {
			url: '/mataKuliah',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.mataKuliah.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mataKuliah.view', {
			url: '/view',
			views: {
				'@app.admin.master.mataKuliah' :{
					templateUrl: "pages/admin/master/master.mataKuliah.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.mataKuliah.add', {
			url: '/add',
			views: {
				'@app.admin.master.mataKuliah' :{
					templateUrl: "pages/admin/master/master.mataKuliah.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.kelas', {
			url: '/kelas',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.kelas.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.kelas.view', {
			url: '/view',
			views: {
				'@app.admin.master.kelas' :{
					templateUrl: "pages/admin/master/master.kelas.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.kelas.add', {
			url: '/add',
			views: {
				'@app.admin.master.kelas' :{
					templateUrl: "pages/admin/master/master.kelas.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.jurusan', {
			url: '/jurusan',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.jurusan.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.jurusan.view', {
			url: '/view',
			views: {
				'@app.admin.master.jurusan' :{
					templateUrl: "pages/admin/master/master.jurusan.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.jurusan.add', {
			url: '/add',
			views: {
				'@app.admin.master.jurusan' :{
					templateUrl: "pages/admin/master/master.jurusan.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.semester', {
			url: '/semester',
			views: {
				'@app.admin.master' :{
					templateUrl: "pages/admin/master/master.semester.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.semester.view', {
			url: '/view',
			views: {
				'@app.admin.master.semester' :{
					templateUrl: "pages/admin/master/master.semester.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.master.semester.add', {
			url: '/add',
			views: {
				'@app.admin.master.semester' :{
					templateUrl: "pages/admin/master/master.semester.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.nilai', {
			url: '/nilai',
			views: {
				'@app.admin' :{
					templateUrl: "pages/admin/nilai/nilai.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.nilai.search', {
			url: '/search',
			views: {
				'@app.admin.nilai' :{
					templateUrl: "pages/admin/nilai/nilai.search.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.nilai.add', {
			url: '/add',
			views: {
				'@app.admin.nilai' :{
					templateUrl: "pages/admin/nilai/nilai.add.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		})
		.state('app.admin.nilai.view', {
			url: '/view',
			views: {
				'@app.admin.nilai' :{
					templateUrl: "pages/admin/nilai/nilai.view.tpl.html"
				}
			},
			//controller: 'AdminController',
			accessLevel: accessLevels.admin
		});
})
.controller('AdminController' , function ($scope ) {
	$scope.navCollapsed = true;
})
  .controller('DataCtrl' , function ($scope, $http, $timeout, $state) {
    $scope.addData = function(url, state){
      //POST data
      $scope.xhr = false;
      $scope.redirect = false;
      $scope.submit = function (formInstance) {
        // xhr is departing
        $scope.xhr = true;
        $http.post(url, $scope.mahasiswaObj)
          .success(function (data, status, headers, config) {
            console.info('post success - ', data);
            $scope.xhr = false;
            $scope.redirect = true;
            $timeout(function () {
              $state.go(state);
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
    };
  })
.controller('MhsAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/mahasiswa', $scope.mahasiswaObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.mahasiswa.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('DosenAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/dosen', $scope.dosenObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.dosen.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('MataKuliahAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/mataKuliah', $scope.mataKuliahObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.mataKuliah.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('KelasAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/kelas', $scope.kelasObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.kelas.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('JurusanAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/jurusan', $scope.jurusanObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.jurusan.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('SemesterAddCtrl' , function ($scope, $http, $timeout, $state) {
	//POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/admin/post/semester', $scope.semesterObj)
		.success(function (data, status, headers, config) {
			console.info('post success - ', data);
			$scope.xhr = false;
			$scope.redirect = true;
			$timeout(function () {
				$state.go('app.admin.master.semester.view');
			}, 500);
		})
		.error(function (data, status, headers, config) {
			data.errors.forEach(function (error, index, array) {
				formInstance[error.field].$error[error.name] = true;
			});
			formInstance.$setPristine();
			//console.info('post error - ', data);
			$scope.xhr = false;
		});
	};
})
.controller('NilaiAddCtrl' , function ($scope, $http, $timeout, $state) {
    //POST data
    $scope.xhr = false;
    $scope.redirect = false;
    $scope.submit = function (formInstance) {
      // xhr is departing
      $scope.xhr = true;
      $http.post('/admin/post/nilai', $scope.nilaiObj)
        .success(function (data, status, headers, config) {
          console.info('post success - ', data);
          $scope.xhr = false;
          $scope.redirect = true;
          $timeout(function () {
            $state.go('app.admin.nilai.view');
          }, 500);
        })
        .error(function (data, status, headers, config) {
          data.errors.forEach(function (error, index, array) {
            formInstance[error.field].$error[error.name] = true;
          });
          formInstance.$setPristine();
          //console.info('post error - ', data);
          $scope.xhr = false;
        });
    };
})
  .controller('ngTableCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
    //ngTable section
    $scope.loadTable = function(url){
      var p_selected;
      $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
          name: 'asc'     // initial sorting
        }
      }, {
        total: 0,           // length of data
        getData: function($defer, params) {
          // ajax request to api
          $http.get(url)
            .success(function (data, status, headers, config) {
              //console.info('post success - ', data);
              $timeout(function () {
                total = data.length;
                // update table params
                //params.total(data.total);
                // set new data
                //$defer.resolve(data.result);
                // use build-in angular filter
                var filteredData = params.filter() ?
                  $filter('filter')(data, params.filter()) :
                  data;
                var orderedData = params.sorting() ?
                  $filter('orderBy')(filteredData, params.orderBy()) :
                  data;
                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }, 500);
            });
        }
      });
      $scope.changeSelection = function(pesertaDidik) {
        if (p_selected)
          p_selected.$selected=false;
        p_selected=pesertaDidik;
        $scope.deleteData = function() {
          console.info(p_selected);
          $scope.data = {
            noInduk : p_selected.no_induk
          };
          $http.post('/admin/post/deletePesertaDidik', $scope.data)
            .success(function () {
              $scope.remove.success = true;
              $timeout(function () {
                $scope.remove.success = false;
                $scope.tableParams.reload();
                //$state.go('app.admin.overview');
              }, 2000);
            });
        };
      };
    };
  })
.controller('ngTableMhsCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/mahasiswa')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableDosenCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/dosen')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableMataKuliahCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/mataKuliah')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableKelasCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/kelas')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableJurusanCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/jurusan')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableSemesterCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
	//ngTable section
	var p_selected;
	$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			sorting: {
					name: 'asc'     // initial sorting
			}
	}, {
			total: 0,           // length of data
			getData: function($defer, params) {
					// ajax request to api
				$http.get('/admin/get/semester')
				.success(function (data, status, headers, config) {
					//console.info('post success - ', data);
					$timeout(function () {
						total = data.length;
						// update table params
						//params.total(data.total);
						// set new data
						//$defer.resolve(data.result);
						// use build-in angular filter
						var filteredData = params.filter() ?
										$filter('filter')(data, params.filter()) :
										data;
						var orderedData = params.sorting() ?
										$filter('orderBy')(filteredData, params.orderBy()) :
										data;
						params.total(orderedData.length); // set total for recalc pagination
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}, 500);
				});
			}
	});
	$scope.changeSelection = function(pesertaDidik) {
		if (p_selected)
			p_selected.$selected=false;
			p_selected=pesertaDidik;
			$scope.deleteData = function() {
				console.info(p_selected);
				$scope.data = {
					noInduk : p_selected.no_induk
				};
				$http.post('/admin/post/deletePesertaDidik', $scope.data)
				.success(function () {
					$scope.remove.success = true;
					$timeout(function () {
						$scope.remove.success = false;
						$scope.tableParams.reload();
						//$state.go('app.admin.overview');
				}, 2000);
			});
		};
	};
})
.controller('ngTableNilaiCtrl' , function ($scope, $http, $state, $timeout, $filter, ngTableParams) {
    //ngTable section
    var p_selected;
    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {
        name: 'asc'     // initial sorting
      }
    }, {
      total: 0,           // length of data
      getData: function($defer, params) {
        // ajax request to api
        $http.get('/admin/get/nilai')
          .success(function (data, status, headers, config) {
            //console.info('post success - ', data);
            $timeout(function () {
              total = data.length;
              // update table params
              //params.total(data.total);
              // set new data
              //$defer.resolve(data.result);
              // use build-in angular filter
              var filteredData = params.filter() ?
                $filter('filter')(data, params.filter()) :
                data;
              var orderedData = params.sorting() ?
                $filter('orderBy')(filteredData, params.orderBy()) :
                data;
              params.total(orderedData.length); // set total for recalc pagination
              $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }, 500);
          });
      }
    });
    $scope.changeSelection = function(pesertaDidik) {
      if (p_selected)
        p_selected.$selected=false;
      p_selected=pesertaDidik;
      $scope.deleteData = function() {
        console.info(p_selected);
        $scope.data = {
          noInduk : p_selected.no_induk
        };
        $http.post('/admin/post/deletePesertaDidik', $scope.data)
          .success(function () {
            $scope.remove.success = true;
            $timeout(function () {
              $scope.remove.success = false;
              $scope.tableParams.reload();
              //$state.go('app.admin.overview');
            }, 2000);
          });
      };
    };
  })
.controller('akunUserCtrl' , function ($scope, $http, $timeout, $state ) {
 //POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/reset', $scope.userObj)
		.success(function (data, status, headers, config) {
			$scope.xhr = false;
			$timeout(function () {
				$state.go('app.admin.akun.overview');
			}, 2000);
		});
	};


})
.controller('akunOverviewCtrl' , function ($scope, $http ) {
		// ajax request to ap
	$http.get('/user')
	.success(function (data ) {
		//console.info('get success - ', data);
		$scope.user = data.name;
		$scope.role = data.userRole.title;
	});

})
.controller('akunOverviewPassCtrl' , function ($scope, $http, $timeout, $state ) {
 //POST data
	$scope.xhr = false;
	$scope.redirect = false;
	$scope.submit = function (formInstance) {
		// xhr is departing
		$scope.xhr = true;
		$http.post('/update', $scope.passwordObj)
		.success(function (data, status, headers, config) {
			$scope.xhr = false;
			$timeout(function () {
				$state.go('app.admin.akun.overview');
			}, 2000);
		});
	};

});
