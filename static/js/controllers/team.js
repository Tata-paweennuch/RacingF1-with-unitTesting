"use strict";

angular
  .module("standingListApp")
  .controller("teamMemberCtrl", function(dataService, $scope, $location, $routeParams, $filter) {
        let teamId = $routeParams.id; 

        $scope.allDrivers = dataService.getDrivers();
        let sortedAllDrivers = $scope.allDrivers.sort((a, b) => {
            if(a.points > b.points) return -1;
            if(a.points < b.points) return 1;
            if(a.driver > b.driver) return 1;
            if(a.driver < b.driver) return -1;
        });

        let filteredDriversInTeam = $filter('filter')(sortedAllDrivers, function (driverObj) {
            if(driverObj.team == teamId)
            return driverObj;
        });
        // $scope.teamDrivers = $scope.allDrivers.filter(driver => driver.team === parseInt(teamId))

        $scope.teamDrivers = filteredDriversInTeam;
        console.log($scope.teamDrivers);        

        dataService.getTeamDetail(teamId, function(response) {
            $scope.teamDetail = response.data;
        });

        $scope.sumPoints = function() {
            let totalPoints = $scope.teamDrivers.reduce(
            (accum, currentDriver) => accum + currentDriver.points,
                0
            );
            return totalPoints;
        };

        $scope.getRacePosition = function(driverName) {            
            let driverIndex = sortedAllDrivers.findIndex(driver => driver.driver === driverName );            
            return driverIndex +1; 
        };
 
        $scope.deleteDriver = function(driver) {
            dataService.deleteDriver(driver);
        };

        $scope.goBackToStandings = function() {
            $location.path("/");
        }
  });