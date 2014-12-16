var responses = {
	geocoder: {
		csvSuccess: '',
		csvMulti: '',
		csvNotFound: '',
		csvError: '',
		xmlSuccess: '<?xml version=\"1.0\"?>\n<rdf:RDF\nxmlns:dc=\"http://purl.org/dc/elements/1.1/\"\nxmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"\nxmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n>\n<geo:Point rdf:nodeID=\"aid83401430\">\n<dc:description>1600 Pennsylvania Ave NW, Washington DC 20502</dc:description>\n<geo:long>-77.037684</geo:long>\n<geo:lat>38.898748</geo:lat>\n</geo:Point>\n</rdf:RDF>\n',
		xmlMulti: '',
		xmlNotFound: '',
		xmlError: ''
	}
};

module.exports = responses;

