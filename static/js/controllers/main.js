"use strict";

angular
  .module("standingListApp")
  .controller("mainCtrl", function(dataService, $scope, $location, $timeout) {
/*     
    dataService.getDrivers(function(response) {
      $scope.drivers = response.data;

      const randomIndex = Math.floor(Math.random() * $scope.drivers.length); 
      console.log(randomIndex);
      $scope.drivers[randomIndex].points = $scope.drivers[randomIndex].points +1
    }); 
*/

    $scope.drivers = dataService.getDrivers();
    dataService.startInterval(); 
 
    $scope.teams = dataService.getTeams();
/*     dataService.getTeams(function(response) {
      $scope.teams = response.data;
    }); */

    $scope.deleteDriver = function(driver) {
      dataService.deleteDriver(driver);
    };

    $scope.sumPoints = function() {
      let totalPoints = $scope.drivers.reduce(
        (accum, currentDriver) => accum + currentDriver.points,
        0
      );
      return totalPoints;
    };

    $scope.getTeam = function(teamId) {
      dataService.stopInterval()
      $location.url("/team/" + teamId);
    };

    $scope.getTeamName = function(teamID) {
      let team = $scope.teams.find(team => team.id === teamID);
      return team.team;
    };
  });
