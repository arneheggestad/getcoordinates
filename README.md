getcoordinates [![Code Climate](https://codeclimate.com/github/arneheggestad/getcoordinates/badges/gpa.svg)](https://codeclimate.com/github/arneheggestad/getcoordinates) [![Test Coverage](https://codeclimate.com/github/arneheggestad/getcoordinates/badges/coverage.svg)](https://codeclimate.com/github/arneheggestad/getcoordinates) [![Build Status](https://travis-ci.org/arneheggestad/getcoordinates.svg?branch=master)](https://travis-ci.org/arneheggestad/getcoordinates)
=====


A general geocoding module for node.js.

-----

This module is intended to be a way to access as many geocoding services as possible. The module currently works with the API provided by [geocoder.us](http://geocoder.us), with plans to expand to [MapQuest's open API](http://www.mapquestapi.com/geocoding/) next. Services may be selected with the `options` object as described below.

#Use

```
var getcoordinates = require('getcoordinates');

getcoordinates.(location, options, callback);
```

#options

`options` is an object that can be used to select the geocoding service desired and provide the necessary credentials. Presently, only `options.service = 'geocoder.us'` is functional.

If an API offers more than one endpoint and you have a preference, that preference can be set in `options.<service>.type`. For example, the geocoder.us service can return data in either csv or xml format, which can be selected with `options.geocoder.type: 'csv'` or `'xml'`.

Authentication credentials will be passed in the `options.<service>.auth` namespace, as appropriate for the service. Username and password for the geocoder.us service are stored as `options.geocoder.auth.username` and `options.geocoder.auth.password` respectively.

-----
#API Keys

NB: Developers using this package will need their own API keys to use the geocoding services.

* geocoder.us: [geocoder.us/user/signup](http://geocoder.us/user/signup)
* Google Maps: ...
* Here.com: [developer.here.com/get-started](http://developer.here.com)
