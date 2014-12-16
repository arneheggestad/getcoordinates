var should = require('should'),
		geocoder = require('../lib/geocoder.js'),
		responses = require('./dummyResponses.js')
		;

var testAddress = '1600 Pennsylvania Ave, Washington DC',
		testResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		testCoords = {
				lat: 38.898748, 
				lon: -77.037684},
		noResults = '123 Fake Street, Anytown, TN'
		;

describe('geocoder', function () {
	describe('csv()', function () {
		it('should return csv version of the White House', function (done) {
			geocoder.csv(testAddress, function (err, result) {
				result.should.eql(testCoords);
				done();
			});
		});
		it('should return an error for data not found', function (done) {
			geocoder.csv(noResults, function (err, result) {
				err.should.eql('Could not find address.');
				done();
			});
		});
	});

	describe('xml()', function () {
		it('should return xml page about the White House', function (done) {
			geocoder.xml(testAddress, function (err, result) {
				result.should.eql(testCoords);
				done();
			});
		});
	});

});
