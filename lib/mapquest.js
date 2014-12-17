// dependencies
var keys = require('../config/keys.js'),
		utilities = require('./utilities.js')
		;

var options = {
	hostname: 'open.mapquestapi.com',
	port: 80,
	path: '',
	method: 'GET'
};

var mapquest = {
	open: function (address, cb) {
		options.path = '/geocoding/v1/address?key=' + keys.mapquest.open.key + '&outFormat=json&location=' + address;
		utilities.queryAPI(options, function (err, result) {
			console.log(result);
		})
	}

}

module.exports = mapquest;
