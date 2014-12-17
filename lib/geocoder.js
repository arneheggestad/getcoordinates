// implementation for the geocoder.us API
var xml2js = require('xml2js'),
		utilities = require('./utilities.js')
		;

var reqOptions = {
	hostname: 'geocoder.us',
	port: 80,
	path: '',
	method: 'GET'
};

var geocoder = {
	csv: function (address, options, cb) {
		var coords = {};
		address = address.replace(/\s/g, '+');
		if (!options.geocoder.auth || options.geocoder.auth.username === null) {
			// no username set, use the free (noncommercial!) service
			reqOptions.hostname = 'rpc.geocoder.us';
			reqOptions.path = '/service/csv?address=' + address;
		} else {
			reqOptions.auth = options.geocoder.auth.username + ':' + options.geocoder.auth.password;
			reqOptions.path = '/service/csv/geocode?address=' + address;
		}
		utilities.queryAPI(reqOptions, function (err, result) {
			if (err) { return cb(err, null); }
			if (result) { // result: lat,long,address,city,state
				if (result === '2: couldn\'t find this address! sorry') { // API returns this body (status 200) for no results
					return cb('no results', null);
				} else {
					coords.lat = parseFloat(result.split(',')[0]); // latitude
					coords.lon = parseFloat(result.split(',')[1]); // longitude
				}
			}
			if (typeof (cb) === 'function') {
				return cb(null, coords);
			}
		});
	},

	xml: function (address, options, cb) {
		var coords = {};
		address = address.replace(/\s/g, '+');
		if (!options.geocoder.auth || options.geocoder.auth.username === null) {
			// no username set, use the free (noncommercial!) service
			reqOptions.hostname = 'rpc.geocoder.us';
			reqOptions.path = '/service/xmlrpc?address=' + address;
		} else {
			reqOptions.auth = options.geocoder.auth.username + ':' + options.geocoder.auth.password;
			reqOptions.path = '/service/rest/geocode?address=' + address;
		}
		utilities.queryAPI(reqOptions, function (err, result) {
			if (err) { return cb(err); }
			if (result) {

				if (typeof (cb) === 'function') {
					// need to parse returned XML to find coordinates
					geocoder.parseResponse(result, function (err, pointsArray) {
						if (err) { return cb(err, null); }
						// get the coordinates out of the parsed response
						if (pointsArray.length === 1) {
							coords.lat = pointsArray[0].lat;
							coords.lon = pointsArray[0].lon;
							return cb(null, coords);
						} else {
							return cb('multiple results');
						}
					});
				}
			}
		});
	},

	parseResponse: function (response, cb) {
		var parser = new xml2js.Parser( {
			attrNameProcessors: [ stripPrefix ],
			tagNameProcessors: [ stripPrefix ]
		});

		parser.parseString(response, function (err, parsedResponse) {
			if (!parsedResponse) {
				return cb('no results');
			} else {
				var pointsArray = [];
				for (var i = 0; i < parsedResponse.RDF.Point.length; i++ ) {
					var temp = {};
					temp.lat = parseFloat(parsedResponse.RDF.Point[i].lat);
					temp.lon = parseFloat(parsedResponse.RDF.Point[i].long);
					pointsArray.push(temp);
				}
				cb(null, pointsArray);
			}
		});
	}
};

var stripPrefix = function (str) {
	var prefixMatch;
  prefixMatch = new RegExp(/(?!xmlns)^.*:/);
	return str.replace(prefixMatch, '');
}

module.exports = geocoder;
