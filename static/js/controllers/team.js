"use strict";

angular
  .module("standingListApp")
  .controller("teamMemberCtrl", function(dataService, $scope, $location, $routeParams) {
        let teamId = $routeParams.id;       

        $scope.allDrivers = dataService.getDrivers();
        $scope.teamDrivers = $scope.allDrivers.filter(driver => driver.team === parseInt(teamId))
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

/*         $scope.getRacePosition = function(driverName) {
            let sortedDrivers = $scope.allDrivers.sort(function(a, b) { return b.points - a.points }).sort((a,b) => (a.driver > b.driver) ? 1 : ((b.driver > a.driver) ? -1 : 0));
            console.log(sortedDrivers);
            
            let driverIndex = sortedDrivers.findIndex(driver => driver.driver === driverName );
            console.log(driverIndex);
            
            return driverIndex +1;
        };
 */
        $scope.deleteDriver = function(driver) {
            dataService.deleteDriver(driver);
        };

        $scope.goBackToStandings = function() {
            $location.path("/");
            // window.history.back();
        }
        

      

  });