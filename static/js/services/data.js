"use strict";

angular.module("standingListApp").service("dataService", function($http, $timeout, $interval) {
  var drivers = [];

  this.initDrivers = function() {
    $http.get("/api/standings.json")
    .then(function(response) {
      drivers = response.data;
      console.log(drivers);
    })

/*     const randomIndex = Math.floor(Math.random() * drivers.length);
    console.log(randomIndex);
    drivers[randomIndex].points = drivers[randomIndex].points +1
 */  
  };


  this.getDrivers = function() {
    return drivers;
  }

/* 
  this.getDrivers = function(callback) {
    $http.get("/api/standings.json")
      .then(callback)
    // $http.get("../data/drivers.json").then(callback);
  }; */

  this.setInterval = function() {
    $interval(function() {
      const randomIndex = Math.floor(Math.random() * drivers.length); 
      console.log(randomIndex);
      drivers[randomIndex].points = drivers[randomIndex].points +1
      // this.setInterval();
    }, 1000)
  };


  this.getTeams = function(callback) {
    $http.get("/api/teams.json").then(callback);
  };


  this.getTeamDetail = function(id, callback) {
    $http.get("/api/team/" + id + ".json").then(callback)
  }


  this.deleteDriver = function(deleteThisDriver) {
    console.log("The " + deleteThisDriver.driver + " driver has been deleted!");
    // other logic
    const i = drivers.findIndex(driver => driver.driver === deleteThisDriver.driver);
    drivers.splice(i, 1);
  };
});


    // var promise = $http.get("/api/standings.json")
    // .success(function(response) {
    //   drivers = response.data;
    //   console.log(drivers);
    //   return drivers;      
    // })
    // return promise;