angular
  .module("standingListApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/static/templates/standings.html",
        controller: "standingsCtrl",
        resolve: {
          fetchAllDrivers: function(dataService) {
            return dataService.initDrivers();
          },
          fetchAllTeams: function(dataService) {
            return dataService.initTeams();
          }
        } 
      })
      .when("/team/:id", {
        templateUrl: "/static/templates/team.html",
        controller: "teamMemberCtrl"
      })
      .otherwise({ redirectTo: "/" });

    $locationProvider.hashPrefix("").html5Mode(true);
  });