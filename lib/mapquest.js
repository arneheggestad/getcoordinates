// dependencies
var utilities = require('./utilities.js')
		;

var reqOptions = {
	hostname: 'open.mapquestapi.com',
	port: 80,
	path: '',
	method: 'GET'
};

var mapquest = {
	open: function (address, options, cb) {
		reqOptions.path = '/geocoding/v1/address?key=' + options.mapquest.auth.key + '&outFormat=json&location=' + address;
		utilities.queryAPI(options, function (err, result) {
			console.log(result);
		})
	}

}

module.exports = mapquest;
