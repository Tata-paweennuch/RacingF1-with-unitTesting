angular
  .module("standingListApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/static/templates/drivers.html",
        resolve: {
          driversList: function($http, dataService){
            dataService.initDrivers(); 
          }
        }
      })
      .when("/team", {
        templateUrl: "/static/templates/team.html"
      })
      .when("/team/:id", {
        templateUrl: "/static/templates/team.html"
      })
      .otherwise({ redirectTo: "/" });

    $locationProvider.hashPrefix("").html5Mode(true);
  });
/*   .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('//').endSymbol('//');
  });
 */
