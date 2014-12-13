var csv = require('csv-to-json');

var distance = require('./lib/distance.js')
		;

var stops = csv.parse('./stops.txt');

var start = [35.034374, -85.302557];
var maxDist = 300; // maximum distance in meters
var closeStops = [];
for (var i = 0; i < stops.length; i++) {
	if (distance.haversine(start, [stops[i].stop_lat, stops[i].stop_lon]) <= maxDist) {
		closeStops.push(stops[i]);
	}
}
for (var j = 0; j < closeStops.length; j++) {
	var stop = [closeStops[j].stop_lat, closeStops[j].stop_lon];
	console.log(closeStops[j].stop_name + ': ' + distance.haversine(start, stop) + ' meters');
}