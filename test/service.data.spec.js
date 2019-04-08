describe('DataService', function() {
    var drivers = [
        {
            "points":0,
            "driver": "Kimi Räikkönen",
            "country": "fi",
            "team": 1
        },
        {
            "points":0,
            "driver": "Fernando Alonso",
            "country": "es",
            "team": 1
        },
        {
            "points":0,
            "driver": "Nico Rosberg",
            "country": "de",
            "team": 2
        },
        {
            "points":0,
            "driver": "Lewis Hamilton",
            "country": "uk",
            "team": 2
        },
        {
            "points":0,
            "driver": "Sebastian Vettel",
            "country": "de",
            "team": 3
        },
        {
            "points":0,
            "driver": "Daniel Ricciardo",
            "country": "au",
            "team": 3
        },
        {
            "points":0,
            "driver": "Valtteri Botas",
            "country": "fi",
            "team": 4
        },
        {
            "points":0,
            "driver": "Felipe Massa",
            "country": "br",
            "team": 4
        },
        {
            "points":0,
            "driver": "Kevin Magnussen",
            "country": "dk",
            "team": 5
        },
        {
            "points":0,
            "driver": "Jenson Button",
            "country": "uk",
            "team": 5
        }
    ];

    var defer;
    var dataService;
    var $httpBackend;

    beforeEach(module('standingListApp'));

    beforeEach(inject(function($q, _dataService_, _$httpBackend_) {
        defer = $q.defer();
        dataService = _dataService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should exist', function() {
        expect(dataService).toBeDefined();
    });


    describe('Asyn call of .initDrivers()', function() {
        it('should exist', function() {
            expect(dataService.initDrivers).toBeDefined();
        });

        it('Calling initDrivers() should return array of all driver objects, 10 drivers, as hard-coded above', function(done) {
            var expectedData = drivers;
            $httpBackend.expectGET('/api/standings.json')
            .respond(expectedData);

            var actualResult;
            dataService.initDrivers().then(function(response) {
                done()
                actualResult = dataService.getDrivers();
            });

            $httpBackend.flush();

            expect(actualResult).toEqual(expectedData);
        });
    });
});






