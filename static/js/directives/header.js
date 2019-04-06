angular.module("standingListApp").directive("header", function() {
  return {
    templateUrl: "/static/templates/header.html",
    controller: "mainCtrl"
  };
});