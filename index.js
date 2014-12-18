// other module dependcies

// local file/module dependencies
var config = require('./config/config.js'),
		distance = require('./lib/distance.js'),
		geocoder = require('./lib/geocoder.js'),
		here = require('./lib/here.js'),
		mapquest = require('./lib/mapquest.js')
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
	here: {
		type: '',
		auth: {
			app_id: null,
			app_code: null
		}
	},
	mapquest: {
		type: 'open',
		key: null
	}
}

var getCoordinates = function (address, options, callback) {
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
		case 'here':
			here.geocode(address, options, callback);
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
