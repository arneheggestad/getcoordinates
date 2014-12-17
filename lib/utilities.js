var http = require('http');

var functions = {
	queryAPI: function (options, cb) {
		var request = http.request(options, function (response) {
			var body = '';
			response.on('data', function (data) {
				body += data;
			});
			response.on('end', function () {
				return cb(null, body);
			});
		});

		request.on('error', function (err) {
			return cb(err.message, null);
		});
		request.end();
	}
}

module.exports = functions;
