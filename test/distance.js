var should = require('should'),
		distance = require('../lib/distance.js')
		;

var stopA = {
	'name': '5TH ST AND MARKET ST',
	'latitude': 35.0507,
	'longitude': -85.30953
}
var stopB = {
	'name': '11TH ST AND MARKET ST',
	'latitude': 35.04425,
	'longitude': -85.30944
}
var stopC = {
	'name': '12TH ST AND MARKET ST',
	'latitude': 35.04235,
	'longitude': -85.30907
}

describe('haversine', function (done) {
	describe('AtoB', function() {
		it('distance in km', function() {
			distance.haversine(stopA, stopB).should.equal(717.3);
		});
	});
	describe('AtoC', function() {
		it('distance in km', function() {
			distance.haversine(stopA, stopC).should.equal(929.4);
		});
	});
})