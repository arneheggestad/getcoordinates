getcoordinates [![Code Climate](https://codeclimate.com/github/arneheggestad/getcoordinates/badges/gpa.svg)](https://codeclimate.com/github/arneheggestad/getcoordinates) [![Test Coverage](https://codeclimate.com/github/arneheggestad/getcoordinates/badges/coverage.svg)](https://codeclimate.com/github/arneheggestad/getcoordinates)
=====


A node.js-based geocoding front end.

-----
##Notes##
You will need a `keys.js` file if you are using a remote API to perform the geocoding. The file should be in the form:
```
var keys = {
	'service': {
		'username': '*username*',
		'password': '*password*'
	}
}
module.exports = keys;
```

There is a `notes.txt` file for general notes and thoughts; essentially, a shared scratchpad.