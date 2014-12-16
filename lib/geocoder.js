// implementation for the geocoder.us API
var keys = require('../keys.js'),
		http = require('http'),
		async = require('async'),
		xml2js = require('xml2js')
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
		var coords = {};
		address = address.replace(/\s/g,'\+');
		options.path = '/service/csv/geocode?address=' + address;
		geocoder.queryAPI(options, function (err, result) {
			if (err) cb(err, null);
			if (result) { // result: lat,long,address,city,state
				if (result === '2: couldn\'t find this address! sorry') {
					return cb('Could not find address.', null);
				} else {
					coords.lat = parseFloat(result.split(',')[0]); // latitude
					coords.lon = parseFloat(result.split(',')[1]); // longitude
				}
			}
			if (typeof(cb) === 'function') {
				return cb(null, coords);
			}
		});
	},

	xml: function (address, cb) {
		var coords = {};
		address = address.replace(/\s/g,'\+');
		options.path = '/service/rest/geocode?address=' + address;
		geocoder.queryAPI(options, function (err, result) {
			if (err) cb(err);
			if (result) {

				if (typeof(cb) === 'function') {
					// need to parse returned XML to find coordinates
					geocoder.parseResponse(result, function (err, pointsArray) {
						if (err) { return cb(err, null) };
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

	queryAPI: function (options, cb) {
		var request = http.request(options, function (response) {
			var body = '';
			response.on('data', function (data) {
				body += data;					
			});
			response.on('end', function () {
				cb(null, body);
			});
		});

		request.on('error', function (err) {
			cb(err.message, null);
		});
		request.end();
	},

	parseResponse: function (response, cb) {
		var parser = new xml2js.Parser( {
			attrNameProcessors: [stripPrefix],
			tagNameProcessors: [stripPrefix]
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