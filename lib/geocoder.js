// implementation for the geocoder.us API
var keys = require('../keys.js'),
		http = require('http'),
		async = require('async')
		;

var options = {
	'hostname': 'geocoder.us',
	'port': 80,
	'path': '',
	'method': 'GET',
	'auth': keys.geocoder.username + ':' + keys.geocoder.password
};


var geocoder = {
	csv: function (address, cb) {
		var coords = [];
		address = address.replace(/\s/g,'\+');
		options.path = '/service/csv/geocode?address=' + address;
		geocoder.queryAPI(options, function (err, result) {
			if (err) cb(err);
			if (result) { // result: lat,long,address,city,state
				coords[0] = parseFloat(result.split(',')[0]); // latitude
				coords[1] = parseFloat(result.split(',')[1]); // longitude
			}
			if (typeof(cb) === 'function') {
				cb(null, coords);
			}
		});
	},

	queryAPI: function (options, cb) {
		var request = http.request(options, function (response) {
			var body = '';
			response.on('data', function (data) {
				console.log(data);
				body += data;
			});
			response.on('end', function () {
				cb(null, body);
			});
		});

		request.on('error', function (err) {
			console.log(err);
			cb(err.message, null);
		});
		request.end();
	}
};

module.exports = geocoder;