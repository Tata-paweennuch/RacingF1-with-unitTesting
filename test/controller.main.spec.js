describe('MainController', function() {
    var teams = [
        {
            "id": 1,
            "team": "Scuderia Ferrari",
            "car": "Ferrari 059/3"
        },
        {
            "id": 2,
            "team": "Mercedes AMG Petronas F1 Team",
            "car": "Mercedes PU106A Hybrid"
        },
        {
            "id": 3,
            "team": "Infiniti Red Bull Racing",
            "car": "Renault Energy F1-2014"
        },
        {
            "id": 4,
            "team": "Williams Martini Racing",
            "car": "Mercedes PU106A Hybrid"
        },
        {
            "id": 5,
            "team": "McLaren Mercedes",
            "car": "Mercedes PU106A Hybrid"
        }
    ];


    // beforeEach(angular.mock.module('standingListApp'));
    beforeEach(module('standingListApp'));

    var $controller, $rootScope;

    beforeEach(inject(function(_$controller_,  _$rootScope_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('$scope.getTeamName', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('mainCtrl', { $scope: $scope });
        });

        it('The name of the team should be "Mercedes AMG Petronas F1 Team"', function() {
            $scope.teams = teams;
            expect($scope.getTeamName(2)).toEqual('Mercedes AMG Petronas F1 Team');
        });

        it('The name of the team should be "Mercedes PU106A Hybrid"', function() {
            $scope.teams = teams;
            expect($scope.getTeamName(4)).toEqual('Williams Martini Racing');
        });

        it('The name of the team should be "Mercedes PU106A Hybrid"', function() {
            $scope.teams = teams;
            expect($scope.getTeamName(7)).toEqual('This team does not exist');
        });
    });
});






