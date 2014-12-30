var should = require('should'),
		index = require('../index.js'),
		keys = require('./data/keys.js')
		;

var options = {},
		address = '1600 Pennsylvania Ave, Washington, DC'
		geocoderWhiteHouseCoords = {
				lat: 38.898748, 
				lon: -77.037684}
		;

describe('index: geocoder', function () {
	options.service = 'geocoder.us';
	describe('default-service', function () {
		it('should find the White House without a login', function (done) {
			index(address, options, function (err, coords) {
				coords.should.eql(geocoderWhiteHouseCoords);
				done();
			});
		});
	});
	describe('with-auth', function () {
		it('should find the White House with a login', function (done) {
			options.geocoder.auth.username = keys.geocoder.username + ':' + keys.geocoder.password;
			index(address, options, function (err, coords) {
				coords.should.eql(geocoderWhiteHouseCoords);
				done();
			});
		});
	});
});
