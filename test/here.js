var should = require('should'),
		here = require('../lib/here.js'),
		keys = require('./data/keys.js')
		;

var testAddress = '1600 Pennsylvania Ave, Washington DC',
		testResult = '38.898748,-77.037684,1600 Pennsylvania Ave NW,Washington,DC,20502\n',
		testCoords = { // here.com's coordinates for the White House
				lat: 38.8976784, 
				lon: -77.0365524},
		testArray = [testCoords];
		noResults = '123 Fake Street, Anytown, TN',
		multipleResults = '400 Main St, Chattanooga, TN',
		xmlResponse = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T14:52:15.614Z</Timestamp></MetaInfo><View xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:SearchResultsViewType"><ViewId>0</ViewId><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>pointAddress</MatchType><Location><LocationId>NT_cQlZIGPM5M0B+9bocbVVTD_1600</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>38.8976784</Latitude><Longitude>-77.0365524</Longitude></DisplayPosition><NavigationPosition><Latitude>38.8987503</Latitude><Longitude>-77.0365295</Longitude></NavigationPosition><MapView><TopLeft><Latitude>38.8988025</Latitude><Longitude>-77.0379969</Longitude></TopLeft><BottomRight><Latitude>38.8965542</Latitude><Longitude>-77.035108</Longitude></BottomRight></MapView><Address><Label>1600 Pennsylvania Ave NW, Washington, DC 20500, United States</Label><Country>USA</Country><State>DC</State><County>District of Columbia</County><City>Washington</City><District>Washington Mall</District><Street>Pennsylvania Ave NW</Street><HouseNumber>1600</HouseNumber><PostalCode>20500</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">District of Columbia</AdditionalData></Address></Location></Result></View></Response></ns2:Search>'
		;

var options = {
	service: 'here',
	here: {
		type: '',
		auth: {
			app_id: keys.here.appID,
			app_code: keys.here.appCode
		}
	}
};

describe('here-geocoding', function () {
	describe('valid address', function () {
		it('should find the White House', function (done) {
			here.geocode(testAddress, options, function (err, coords) {
				coords.should.eql(testCoords);
				done();
			});
		});
	});
});

describe('xml-parsing-for-here', function () {
	it('should parse an xml response', function (done) {
		here.parseResponse(xmlResponse, function (err, pointsArray) {
			pointsArray.should.eql(testArray);
			done();
		})
	})
})