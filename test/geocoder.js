var should = require('should'),
		geocoder = require('../lib/geocoder.js')
		;

var testAddress = '1600 Pennsylvania Ave, Washington DC',
		csvtestResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n';
var csvtestArray = [38.898748, -77.037684];

describe('geocoder', function () {
	describe('csv()', function () {
		it('should return csv version of the White House', function (done) {
			geocoder.csv(testAddress, function (err, result) {
				result.should.eql(csvtestArray);
				done();
			});
		});
	});

});
