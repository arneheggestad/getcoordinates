var should = require('should'),
		geocoder = require('../lib/geocoder.js')
		;

var testAddress = '1600 Pennsylvania Ave, Washington DC',
		csvtestResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		csvtestCoords = [38.898748, -77.037684],
		noResults = 'chattanooga, tn'
		;

describe('geocoder', function () {
	describe('csv()', function () {
		it('should return csv version of the White House', function (done) {
			geocoder.csv(testAddress, function (err, result) {
				result.should.eql(csvtestCoords);
				done();
			});
		});
		it('should return no data', function (done) {
			geocoder.csv(noResults, function (err, result) {
				result.should.eql([]);
			})
		})
	});

});
