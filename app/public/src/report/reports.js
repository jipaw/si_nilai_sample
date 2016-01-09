angular.module('PAUDku.reports', [ 'PAUDku.grandfather', 'ui.bootstrap' ])
.config(function ($stateProvider) {
  $stateProvider
	.state('app.admin.laporan', {
	  url: '/laporan',
	  views: {
		'@app.admin' :{
		  templateUrl: "report/report.tpl.html"
		}
	  },
	  //controller: 'ReportController',
	  accessLevel: accessLevels.admin
	});
});