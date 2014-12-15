// other module dependcies
var csv = require('csv-to-json');

// local file/module dependencies
var config = require('./config.js'),
		keys = require('./keys.js'),
		distance = require('./lib/distance.js'),
		geocoder = require('./lib/geocoder.js')
		;

// finding stops near the studio
var stops = csv.parse('./stops.txt');
var radius = 100; // maximum distance in meters
var closeStops = [];

// testing CSV API call for geocoder.us
var start = '400 e main st, chattanooga, tn';
geocoder.csv(start, function (err, coords) {
	if (err) {
		console.log('Error! ' + err);
	}
	if (coords) {
		console.log(coords);
		for (var i = 0; i < stops.length; i++) {
			if (distance.haversine(coords, [stops[i].stop_lat, stops[i].stop_lon]) <= radius) {
				closeStops.push(stops[i]);
			}
		}
		for (var j = 0; j < closeStops.length; j++) {
			var stop = [closeStops[j].stop_lat, closeStops[j].stop_lon];
			console.log(closeStops[j].stop_name + ': ' + distance.haversine(coords, stop) + ' meters');
		}
	}
})
