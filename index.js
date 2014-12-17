// other module dependcies

// local file/module dependencies
var config = require('./config/config.js'),
		distance = require('./lib/distance.js'),
		geocoder = require('./lib/geocoder.js')
		;

var defaultOptions = {
	service: 'geocoder.us',
	geocoder: {
		type: 'csv',
		auth: {
			username: null,
			password: null			
		}
	},
	mapquest: {
		type: 'open',
		key: null
	}
}

var getCoordinates = function (address, options, callback) {
	if (!options) {
		var options = defaultOptions;
	}
	switch (options.service) {
		case 'geocoder.us':
			if (!options.geocoder) {
				options.geocoder = defaultOptions.geocoder;
			}
			if (options.geocoder && options.geocoder.type) {
				if (options.geocoder.type === 'csv') {
					geocoder.csv(address, options, callback);
					break;
				} else if (options.geocoder.type === 'xml') {
					geocoder.xml(address, options, callback);
					break;
				}
			}
			break;
		case 'mapquest':
			mapquest.open(address, options, callback);
			break;
		default:
			geocoder.csv(address, options, callback);
			break;
	}
}

module.exports = getCoordinates;
