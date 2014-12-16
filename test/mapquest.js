var should = require('should'),
		mapquest = require('../lib/mapquest.js')
		;

var testAddress = '1600 Pennsylvania Ave NW, Washington DC',
		testResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		testCoords = {
				lat: 38.898748, 
				lon: -77.037684},
		noResults = '123 Fake Street, Anytown, TN',
		multipleResults = '400 Main St, Chattanooga, TN'
		;

describe('open-API', function () {
	describe('white house', function (done) {
		mapquest.open(testAddress, function (err, coords) {
			coords.should.eql(testCoods);
		})
	})
})