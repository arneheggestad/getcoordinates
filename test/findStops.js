// other module dependcies
// var csv = require('csv-to-json');

// local file/module dependencies
// var config = require('../config.js'),
// 		distance = require('../lib/distance.js'),
// 		geocoder = require('../lib/geocoder.js')
// 		;

// var stopsNearStudio = [1086, 1191];

// describe('find-stops-near-studio-via-csv', function () {
// 	it('should find two stops', function (done) {
// 		// finding stops near the studio
// 		var stops = csv.parse('test/data/stops.txt');
// 		var radius = 100; // maximum distance in meters
// 		var closeStops = [];
// 		var address = '400 e main st, chattanooga, tn';
// 		geocoder.csv(address, function (err, coords) {
// 			for (var i = 0; i < stops.length; i++) {
// 				var testCoords = {
// 					lat: stops[i].stop_lat,
// 					lon: stops[i].stop_lon
// 				};
// 				if (distance.haversine(coords, testCoords) <= radius) {
// 					closeStops.push(stops[i]);
// 				}
// 			}
// 			var nearbyStops = [];
// 			for (var j = 0; j < closeStops.length; j++) {
// 				nearbyStops.push(closeStops[j].stop_id);
// 			};
// 			nearbyStops.should.eql(stopsNearStudio);
// 			return done();
// 		});
// 	});
// });
