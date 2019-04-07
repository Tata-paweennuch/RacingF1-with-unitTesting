angular
  .module("standingListApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/static/templates/drivers.html",
        controller: "mainCtrl",
        resolve: {
          loadData: function(dataService){
            // dataService.initDrivers();
            return dataService.loadData();
          }
        } 
      })
      .when("/team/:id", {
        templateUrl: "/static/templates/team.html",
        controller: "teamMemberCtrl"
/*         resolve: {
          driversList: function($http, dataService){
            dataService.initDrivers(); 
          }
        } */
      })
      .otherwise({ redirectTo: "/" });

    $locationProvider.hashPrefix("").html5Mode(true);
  });
/*   .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('//').endSymbol('//');
  });
 */
