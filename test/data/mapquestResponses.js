exports.singleResult = {
    "results": [
        {
            "locations": [
                {
                    "latLng": {
                        "lng": -77.036553,
                        "lat": 38.897699
                    },
                    "adminArea4": "District of Columbia",
                    "adminArea5Type": "City",
                    "adminArea4Type": "County",
                    "adminArea5": "Washington",
                    "street": "1600 Pennsylvania Avenue Northwest",
                    "adminArea1": "US",
                    "adminArea3": "",
                    "type": "s",
                    "displayLatLng": {
                        "lng": -77.036553,
                        "lat": 38.897699
                    },
                    "linkId": 0,
                    "postalCode": "20500",
                    "sideOfStreet": "N",
                    "dragPoint": false,
                    "adminArea1Type": "Country",
                    "geocodeQuality": "POINT",
                    "geocodeQualityCode": "P1CXX",
                    "mapUrl": "http://open.mapquestapi.com/staticmap/v4/getmap?key=Fmjtd|luurn1uzn1,aa=o5-9wy514&type=map&size=225,160&pois=purple-1,38.8976989,-77.036553192281,0,0|&center=38.8976989,-77.036553192281&zoom=15&rand=1313182816",
                    "adminArea3Type": "State"
                }
            ],
            "providedLocation": {
                "location": "1600 Pennsylvania Ave NW, Washington DC"
            }
        }
    ],
    "options": {
        "ignoreLatLngInput": false,
        "maxResults": -1,
        "thumbMaps": true
    },
    "info": {
        "copyright": {
            "text": "© 2014 MapQuest, Inc.",
            "imageUrl": "http://api.mqcdn.com/res/mqlogo.gif",
            "imageAltText": "© 2014 MapQuest, Inc."
        },
        "statuscode": 0,
        "messages": []
    }
};

exports.multipleResults = {
    "results": [
        {
            "locations": [
                {
                    "latLng": {
                        "lng": -85.263078,
                        "lat": 35.022148
                    },
                    "adminArea4": "Hamilton County",
                    "adminArea5Type": "City",
                    "adminArea4Type": "County",
                    "adminArea5": "Chattanooga",
                    "street": "Main Street",
                    "adminArea1": "US",
                    "adminArea3": "TN",
                    "type": "s",
                    "displayLatLng": {
                        "lng": -85.263078,
                        "lat": 35.022148
                    },
                    "linkId": 0,
                    "postalCode": "37404",
                    "sideOfStreet": "N",
                    "dragPoint": false,
                    "adminArea1Type": "Country",
                    "geocodeQuality": "STREET",
                    "geocodeQualityCode": "B2XXX",
                    "mapUrl": "http://open.mapquestapi.com/staticmap/v4/getmap?key=Fmjtd|luurn1uzn1,aa=o5-9wy514&type=map&size=225,160&pois=purple-1,35.0221482,-85.2630778,0,0|&center=35.0221482,-85.2630778&zoom=15&rand=1228524378",
                    "adminArea3Type": "State"
                },
                {
                    "latLng": {
                        "lng": -85.13646,
                        "lat": 35.081155
                    },
                    "adminArea4": "Hamilton County",
                    "adminArea5Type": "City",
                    "adminArea4Type": "County",
                    "adminArea5": "Chattanooga",
                    "street": "Main Street",
                    "adminArea1": "US",
                    "adminArea3": "TN",
                    "type": "s",
                    "displayLatLng": {
                        "lng": -85.13646,
                        "lat": 35.081155
                    },
                    "linkId": 0,
                    "postalCode": "37416",
                    "sideOfStreet": "N",
                    "dragPoint": false,
                    "adminArea1Type": "Country",
                    "geocodeQuality": "STREET",
                    "geocodeQualityCode": "B2XXX",
                    "mapUrl": "http://open.mapquestapi.com/staticmap/v4/getmap?key=Fmjtd|luurn1uzn1,aa=o5-9wy514&type=map&size=225,160&pois=purple-2,35.0811548,-85.1364598,0,0|&center=35.0811548,-85.1364598&zoom=15&rand=1226600633",
                    "adminArea3Type": "State"
                }
            ],
            "providedLocation": {
                "location": "400 Main St, Chattanooga, TN"
            }
        }
    ],
    "options": {
        "ignoreLatLngInput": false,
        "maxResults": -1,
        "thumbMaps": true
    },
    "info": {
        "copyright": {
            "text": "© 2014 MapQuest, Inc.",
            "imageUrl": "http://api.mqcdn.com/res/mqlogo.gif",
            "imageAltText": "© 2014 MapQuest, Inc."
        },
        "statuscode": 0,
        "messages": []
    }
};

exports.noResults = {
    "results": [
        {
            "locations": [],
            "providedLocation": {
                "location": "123 Fake Street, Anytown, TN"
            }
        }
    ],
    "options": {
        "ignoreLatLngInput": false,
        "maxResults": -1,
        "thumbMaps": true
    },
    "info": {
        "copyright": {
            "text": "© 2014 MapQuest, Inc.",
            "imageUrl": "http://api.mqcdn.com/res/mqlogo.gif",
            "imageAltText": "© 2014 MapQuest, Inc."
        },
        "statuscode": 0,
        "messages": []
    }
};
