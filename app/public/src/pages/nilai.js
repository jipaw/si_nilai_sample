'use strict';
angular.module('PAUDku.nilai', [ 'PAUDku.grandfather','ui.bootstrap', 'appService' ])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.nilai', {
      url: '/nilai',
      templateUrl: 'pages/nilai/nilai.tpl.html',
      //controller: 'NilaiController',
      accessLevel: accessLevels.user
    })
    .state('app.nilai.view', {
      url: '/view',
      templateUrl: 'pages/nilai/nilai.view.tpl.html',
      //controller: 'NilaiController',
      accessLevel: accessLevels.user
    })
    .state('app.nilai.print', {
      url: '/print',
      templateUrl: 'pages/nilai/nilai.print.tpl.html',
      //controller: 'ModalInstanceCtrl',
      accessLevel: accessLevels.user
    });
})
.controller('NilaiCtrl', function ($scope, $http, nilai_angka) {
        $scope.loadData = function(url) {
          $http.get(url)
            .success(function (data) {
              $scope.nilai_total = 0;
              $scope.total_sks = 0;
              for (var i = 0; i < data.length; i++) {
                data[i].no = i + 1;
                data[i].nilai_angka = nilai_angka.set_nil(data[i].nilai_akhir);
                data[i].total_nilai = data[i].nilai_angka * data[i].sks;
                $scope.nilai_total = $scope.nilai_total + (data[i].nilai_angka * data[i].sks);
                $scope.total_sks = data[i].sks + $scope.total_sks;
              }
              if (data[0] != null) {
                $scope.nama_mhs = data[0].nama_mhs;
                $scope.NPM = data[0].NPM;
                $scope.semester_berjalan = data[0].semester_berjalan;
              }
              $scope.ip_semester = $scope.nilai_total / $scope.total_sks;
              $scope.datas = data;
            });
        };
          $scope.printTrigger = function(elementId) {
            var getMyFrame = document.getElementById(elementId);
            getMyFrame.focus();
            getMyFrame.contentWindow.print();
          };
  });
/*  .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function () {

      var modalInstance = $modal.open({
        backdrop: false,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $modalInstance, items) {

          $scope.items = items;
          $scope.selected = {
            item: $scope.items[0]
          };

          $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

     modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })*/

