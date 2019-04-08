"use strict";

angular
  .module("standingListApp")
  .controller("mainCtrl", function(dataService, $scope, $location, $timeout, $q) {

    $scope.drivers = dataService.getDrivers();
    dataService.startInterval(); 
 
    $scope.teams = dataService.getTeams();

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
      if(!team) {
        return "This team does not exist"
      }
      return team.team; 
    };
  });

