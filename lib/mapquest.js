// dependencies
var keys = require('../keys.js'),
		utilities = require('./utilities.js')
		;

var options = {
	hostname: 'open.mapquestapi.com',
	port: 80,
	path: '',
	method: 'GET'
};
var coords = {};

var mapquest = {
	open: function (address, cb) {
		address = address.replace(/\s/g, '+');
		options.path = '/geocoding/v1/address?key=' + keys.mapquest.open.key + '&outFormat=json&location=' + address;
		utilities.queryAPI(options, function (err, response) {
			mapquest.parseResponse(response, function (err, coords) {
				return cb(null, coords);
			})
		});
	},

	parseResponse: function (response, cb) {
		parsedResponse = JSON.parse(response);
		coords.lat = parsedResponse.results[0].locations[0].latLng.lat;
		coords.lon = parsedResponse.results[0].locations[0].latLng.lng;
		return cb(null, coords);
	}

}

module.exports = mapquest;
