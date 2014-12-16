var distance = {
	haversine: function (pointA, pointB) {
		var r = 6371 * 1000; // earth's mean radius in m
		// phi = latitude, lambda = longitude
		var lat1 = pointA.lat,
				lat2 = pointB.lat,
				long1 = pointA.lon,
				long2 = pointB.lon;
		var phi1 = lat1 * Math.PI / 180, // convert degrees to radians (2pi radians = 360 degrees)
				phi2 = lat2 * Math.PI / 180,
				deltaPhi = (lat2 - lat1) * Math.PI / 180,
				deltaLambda = (long2 - long1) * Math.PI / 180;

		var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
						Math.cos(phi1) * Math.cos(phi2) *
						Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2),
				c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
				d = r * c;
		return Math.round(d * 10) / 10; // return 1 decimal place
	}
}

module.exports = distance;
