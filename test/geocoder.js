var should = require('should'),
//		geocoder = require('../lib/geocoder.js'),
		keys = require('./data/keys.js'),
		proxyquire = require('proxyquire'),
		dummyResponses = require('./data/dummyResponses.js').geocoder
		;

var geocoder = proxyquire('../lib/geocoder.js', { 
	'csv': function (loc, opt, cb) {
		// csv API
	},
	'xml': function (loc, opt, cb) {
		// xml API
	}
});

var testAddress = '1600 Pennsylvania Ave, Washington DC',
		testResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		testCoords = {
				lat: 38.898748, 
				lon: -77.037684},
		noResults = '123 Fake Street, Anytown, TN',
		multipleResults = '400 Main St, Chattanooga, TN'
		;

var options = {
	service: 'geocoder.us',
	geocoder: {
		type: '',
		auth: {
			username: keys.geocoder.username,
			password: keys.geocoder.password
		}
	}
};

describe('geocoder', function () {
	describe('csv()', function () {
		options.geocoder.type = 'csv';
		it('should return csv version of the White House', function (done) {
			geocoder.csv(testAddress, options, function (err, result) {
				result.should.eql(testCoords);
				done();
			});
		});
		it('should return multiple coordinates', function (done) {
			geocoder.csv(multipleResults, options, function (err, result) {
				err.should.equal('multiple results');
				done();
			})
		})
		it('should return an error for data not found', function (done) {
			geocoder.csv(noResults, options, function (err, result) {
				err.should.eql('no results');
				done();
			});
		});
	});

	describe('xml()', function () {
		// options.geocoder.type = 'xml';
		// it('should return coordinates of White House via xml', function (done) {
		// 	geocoder.xml(testAddress, options, function (err, result) {
		// 		result.should.eql(testCoords);
		// 		done();
		// 	});
		// });
		// it('should find multiple points', function (done) {
		// 	geocoder.xml(multipleResults, options, function (err, result) {
		// 		err.should.eql('multiple results');
		// 		done();
		// 	});
		// });
		// it('should find no points', function (done) {
		// 	geocoder.xml(noResults, options, function (err, result) {
		// 		err.should.eql('no results');
		// 		done();
		// 	});
		// });
	});

	describe('test CSV parser', function () {
		it('should return a single set of coordinates', function (done) {
			geocoder.parseCsvResponse(dummyResponses.csv.single, function (err, pointsArray) {
				pointsArray.length.should.eql(1);
				done();
			});
		});
		it('should return two sets of coordinates', function (done) {
			geocoder.parseCsvResponse(dummyResponses.csv.multi, function (err, pointsArray) {
				pointsArray.length.should.be.greaterThan(1);
				done();
			});
		});
		it('should return no coordinates', function (done) {
			geocoder.parseCsvResponse(dummyResponses.csv.none, function (err, pointsArray) {
				err.should.equal('no results');
				done();
			});
		});
	});

	describe('test XML parser', function () {
		it('should return a single set of coordinates', function (done) {
			geocoder.parseXmlResponse(dummyResponses.xml.single, function (err, pointsArray) {
				pointsArray.length.should.eql(1);
				done();
			});
		});
		it('should return two sets of coordinates', function (done) {
			geocoder.parseXmlResponse(dummyResponses.xml.multi, function (err, pointsArray) {
				pointsArray.length.should.be.greaterThan(1);
				done();
			});
		});
		it('should return no coordinates', function (done) {
			geocoder.parseXmlResponse(dummyResponses.xml.none, function (err, pointsArray) {
				err.should.equal('no results');
				done();
			});
		});
	});
});
