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
		xmlSingleResponse = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T14:52:15.614Z</Timestamp></MetaInfo><View xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:SearchResultsViewType"><ViewId>0</ViewId><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>pointAddress</MatchType><Location><LocationId>NT_cQlZIGPM5M0B+9bocbVVTD_1600</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>38.8976784</Latitude><Longitude>-77.0365524</Longitude></DisplayPosition><NavigationPosition><Latitude>38.8987503</Latitude><Longitude>-77.0365295</Longitude></NavigationPosition><MapView><TopLeft><Latitude>38.8988025</Latitude><Longitude>-77.0379969</Longitude></TopLeft><BottomRight><Latitude>38.8965542</Latitude><Longitude>-77.035108</Longitude></BottomRight></MapView><Address><Label>1600 Pennsylvania Ave NW, Washington, DC 20500, United States</Label><Country>USA</Country><State>DC</State><County>District of Columbia</County><City>Washington</City><District>Washington Mall</District><Street>Pennsylvania Ave NW</Street><HouseNumber>1600</HouseNumber><PostalCode>20500</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">District of Columbia</AdditionalData></Address></Location></Result></View></Response></ns2:Search>'
		xmlMultiResponse = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T15:31:45.572Z</Timestamp></MetaInfo><View xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:SearchResultsViewType"><ViewId>0</ViewId><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>pointAddress</MatchType><Location><LocationId>NT_oK+ZeQ6zaf0tK8wvoP7hfB_400</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>35.0338783</Latitude><Longitude>-85.3022385</Longitude></DisplayPosition><NavigationPosition><Latitude>35.0342293</Latitude><Longitude>-85.3023529</Longitude></NavigationPosition><MapView><TopLeft><Latitude>35.0350025</Latitude><Longitude>-85.3036114</Longitude></TopLeft><BottomRight><Latitude>35.0327542</Latitude><Longitude>-85.3008656</Longitude></BottomRight></MapView><Address><Label>400 E Main St, Chattanooga, TN 37408, United States</Label><Country>USA</Country><State>TN</State><County>Hamilton</County><City>Chattanooga</City><District>Southside Historic District</District><Street>E Main St</Street><HouseNumber>400</HouseNumber><PostalCode>37408</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">Tennessee</AdditionalData></Address></Location></Result><Result><Relevance>1.0</Relevance><MatchLevel>houseNumber</MatchLevel><MatchQuality><State>1.0</State><City>1.0</City><Street>0.95</Street><HouseNumber>1.0</HouseNumber></MatchQuality><MatchType>interpolated</MatchType><Location><LocationId>NT_u319Bp60+5vm7Ue8JYZVAD_400</LocationId><LocationType>address</LocationType><DisplayPosition><Latitude>35.0375328</Latitude><Longitude>-85.3114624</Longitude></DisplayPosition><NavigationPosition><Latitude>35.03766</Latitude><Longitude>-85.3114101</Longitude></NavigationPosition><MapView><TopLeft><Latitude>35.038657</Latitude><Longitude>-85.3128354</Longitude></TopLeft><BottomRight><Latitude>35.0364087</Latitude><Longitude>-85.3100894</Longitude></BottomRight></MapView><Address><Label>400 W Main St, Chattanooga, TN 37402, United States</Label><Country>USA</Country><State>TN</State><County>Hamilton</County><City>Chattanooga</City><District>Downtown Chattanooga</District><Street>W Main St</Street><HouseNumber>400</HouseNumber><PostalCode>37402</PostalCode><AdditionalData key="CountryName">United States</AdditionalData><AdditionalData key="StateName">Tennessee</AdditionalData></Address></Location></Result></View></Response></ns2:Search>',
		multiResponseArray = [ 
			{ lat: 35.0338783, lon: -85.3022385 },
			{ lat: 35.0375328, lon: -85.3114624 } ];
		xmlNoResponse = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Search xmlns:ns2="http://www.navteq.com/lbsp/Search-Search/4"><Response><MetaInfo><Timestamp>2014-12-18T15:31:45.733Z</Timestamp></MetaInfo></Response></ns2:Search>'
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
	describe('multiple addresses', function () {
		it('should find multiple results', function (done) {
			here.geocode(multipleResults, options, function (err, coords) {
				err.should.equal('multiple results');
				done();
			})
		})
	});
	describe('no results', function () {
		it('should find no results', function (done) {
			here.geocode(noResults, options, function (err, coords) {
				err.should.equal('no results');
				done();
			})
		})
	})
});

describe('xml-parsing-for-here', function () {
	it('should parse a single point response', function (done) {
		here.parseResponse(xmlSingleResponse, function (err, pointsArray) {
			pointsArray.should.eql(testArray);
			done();
		})
	})
	it('should parse a multiple point response', function (done) {
		here.parseResponse(xmlMultiResponse, function (err, pointsArray) {
			pointsArray.should.eql(multiResponseArray);
			done();
		});
	});
	it('should parse a not-found response', function (done) {
		here.parseResponse(xmlNoResponse, function (err, pointsArray) {
			err.should.equal('no results');
			done();
		})
	})
})