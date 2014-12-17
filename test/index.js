var should = require('should'),
		index = require('../index.js')
		;

var options = {},
		address = '1600 Pennslyvania Ave, Washington, DC'
		geocoderWhiteHouseCoords = {
				lat: 38.898748, 
				lon: -77.037684}
		;

describe('geocoder', function () {
	describe('success', function () {
		options.service = 'geocoder.us';
		it('should find the White House without a login', function (done) {
			index(address, options, function (err, coords) {
				err.should.be.null;
				coords.should.eql(geocoderWhiteHouseCoords);
				done();
			})
		})

	})
})