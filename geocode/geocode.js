const axios = require('axios');

var geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    // console.log(encodedAddress);
    let geocodeUrl = `https://apis.mapmyindia.com/advancedmaps/v1/3xn21s2qvfu1kj87yuhkaksg2amxfyth/geo_code?addr=${encodedAddress}`;

    axios.get(geocodeUrl).then((response) => {

        var geocodeInfo = {
            formatted_address: response.data.results[0].formatted_address,
            lat: response.data.results[0].lat,
            lng: response.data.results[0].lng
        }
        callback(geocodeInfo);
    }).catch((e) => {
        console.log(e);
    });
};

exports.geocodeAddress = geocodeAddress;