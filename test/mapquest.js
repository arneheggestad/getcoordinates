var should = require('should'),
		mapquest = require('../lib/mapquest.js'),
		demoResponses = require('./data/mapquestResponses.js')
		;

var testAddress = '1600 Pennsylvania Ave NW, Washington DC',
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
			coords.should.eql(testCoords);
			done();
		});
	});
	it('should return multiple results', function (done) {
		mapquest.open(multipleResults, function (err, coords) {
			err.should.eql('multiple results');
			done();
		});
	});
	// it('should return no results', function (done) {
	// 	mapquest.open(noResults, function (err, coords) {
	// 		err.should.eql('no results');
	// 		done();
	// 	});
	// });
});
