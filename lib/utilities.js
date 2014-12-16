var http = require('http');

var utilities = {
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
	}
}

module.exports = utilities;