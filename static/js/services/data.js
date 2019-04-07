"use strict";

angular.module("standingListApp").service("dataService", function($q, $http, $timeout, $interval) {
  var drivers = [];
  var teams = [];

  var interval;

  var defer = false;

  this.initDrivers = function() {
    if(!defer){
      defer = $q.defer();
      $http.get("/api/standings.json").success(function(data) {
          drivers = data;
          console.log(drivers);
          defer.resolve();
      });
    }
    return defer.promise;
  };  

/*   this.fetchData = function() {
      return $http({method:"GET", url:"/api/standings.json"}).then(function(result){
          drivers = result.data
          // console.log(drivers);   Work!!!
          return result.data;
      })      
  }; */

  this.getDrivers = function() { 
    return drivers;
  };


  this.startInterval = function() {
    interval = $interval(function() {
      const randomIndex = Math.floor(Math.random() * drivers.length); 
      console.log(randomIndex);
      drivers[randomIndex].points++
      console.log(drivers);
    }, 1500)
  };


  this.stopInterval = function() {
    $interval.cancel(interval);
  };


  this.initTeams = function() {
    $http.get("/api/teams.json")
    .success(function(data) {
      return (teams = data);
    })
  };


  this.getTeams = function() {
    return teams;
  }

/*   this.getTeams = function(callback) {
    $http.get("/api/teams.json").then(callback);
  }; */


  this.getTeamDetail = function(id, callback) {
    $http.get("/api/team/" + id + ".json").then(callback)
  };


  this.deleteDriver = function(deleteThisDriver) {
    console.log("The " + deleteThisDriver.driver + " driver has been deleted!");
    const i = drivers.findIndex(driver => driver.driver === deleteThisDriver.driver);
    drivers.splice(i, 1);
  };
});