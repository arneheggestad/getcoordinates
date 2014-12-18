var utilities = require('./utilities.js'),
		xml2js = require('xml2js')
		;

var reqOptions = {
	hostname: 'geocoder.cit.api.here.com',
	port: 80,
	path: '',
	method: 'GET'
};

var here = {
	geocode: function (address, options, callback) {
		var coords = {};
		address = address.replace(/\s/g, '+');
		if (!options.here.auth || !options.here.auth.app_id || !options.here.auth.app_code) {
			return callback('no credentials', null);
		}
		reqOptions.path = '/6.2/geocode.xml?app_id=' + options.here.auth.app_id
										+ '&app_code=' + options.here.auth.app_code + '&gen=8&searchtext=' + address;
		console.log(reqOptions.hostname + reqOptions.path);
		utilities.queryAPI(reqOptions, function (err, response) {
			if (err) { return callback(err); }
			here.parseResponse(response, function (err, pointsArray) {
				if (err) { return callback (err); }
				switch (pointsArray.length) {
					case 0:
						return callback('no results');
					case 1:
						coords.lat = pointsArray[0].lat;
						coords.lon = pointsArray[0].lon;
						return callback(null, coords);
					default:
						return callback('multiple results');
				}
			});
		});
	},

	parseResponse: function (response, callback) {
		var parser = new xml2js.Parser( {
			attrNameProcessors: [ stripPrefix ],
			tagNameProcessors: [ stripPrefix ]
		});

		parser.parseString(response, function (err, parsedResponse) {
			if (!parsedResponse) {
				return callback('API error');
			} else if (!parsedResponse.Search.Response[0].View) {
				return callback('no results');
			} else {
				var pointsArray = [];
				var results = parsedResponse.Search.Response[0].View[0].Result;
				for (var i = 0; i < results.length; i++ ) {
					var temp = {};
					temp.lat = parseFloat(results[i].Location[0].DisplayPosition[0].Latitude[0]);
					temp.lon = parseFloat(results[i].Location[0].DisplayPosition[0].Longitude[0]);
					pointsArray.push(temp);
				}
				callback(null, pointsArray);
			}
		});
	}
};

var stripPrefix = function (str) {
	var prefixMatch;
  prefixMatch = new RegExp(/(?!xmlns)^.*:/);
	return str.replace(prefixMatch, '');
}

module.exports = here;
