"use strict";

angular
  .module("standingListApp")
  .controller("mainCtrl", function(dataService, $scope, $location, $timeout) {
/*     dataService.getDrivers(function(response) {
      $scope.drivers = response.data;

      const randomIndex = Math.floor(Math.random() * $scope.drivers.length); 
      console.log(randomIndex);
      $scope.drivers[randomIndex].points = $scope.drivers[randomIndex].points +1
     
    }); */

    
    // dataService.initDrivers();    
    // console.log(dataService.getDrivers());

    // $scope.drivers = driversList;
    $scope.drivers = dataService.getDrivers();
    console.log($scope.drivers);
    // dataService.setInterval(); 

/*     $scope.setInterval1 = function() {
      $timeout(function() {
        $scope.drivers = dataService.getDrivers();
        dataService.setInterval();
        $scope.setInterval1();
      }, 1000)
    }
 */    // $scope.setInterval1();


    $scope.setInterval = function() {
      $timeout(function() {
        const randomIndex = Math.floor(Math.random() * $scope.drivers.length); 
        console.log(randomIndex);
        $scope.drivers[randomIndex].points = $scope.drivers[randomIndex].points +1
        $scope.setInterval();
      }, 1000)
    };

    // $scope.setInterval();

    dataService.getTeams(function(response) {
      $scope.teams = response.data;
    });

    $scope.deleteDriver = function(driver) {
      dataService.deleteDriver(driver);
      // const i = $scope.drivers.findIndex(driverItem => driverItem.driver === driver.driver);
      // $scope.drivers.splice(i, 1);
    };

    $scope.sumPoints = function() {
      let totalPoints = $scope.drivers.reduce(
        (accum, currentDriver) => accum + currentDriver.points,
        0
      );
      return totalPoints;
    };

    $scope.getTeam = function(team) {
      $scope.drivers = $scope.drivers.filter(driver => driver.team == team);
      $scope.teamNum = team;
      $scope.detail = true;
      dataService.getTeamDetail(team, function(response) {
        $scope.teamDetail = response.data;
      });
    };

    $scope.getTeamName = function(teamID) {
      let team = $scope.teams.find(team => team.id === teamID);
      return team.team;
    };
  });
