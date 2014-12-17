var should = require('should'),
		mapquest = require('../lib/mapquest.js')
		;

var testAddress = '1600 Pennsylvania Ave NW, Washington DC',
		testResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		testCoords = {
		// note: these are *slightly* different than those from geocoder.us
			lat: 38.897699, 
			lon: -77.036553},
		noResults = '123 Fake Street, Anytown, TN',
		multipleResults = '400 Main St, Chattanooga, TN'
		;

describe('open-API', function () {
	it('should return coordinates for the white house', function (done) {
		mapquest.open(testAddress, function (err, coords) {
			console.log(err);
			coords.should.eql(testCoords);
			done();
		})
	})
})
