const axios = require('axios');

var geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    // console.log(encodedAddress);
    let geocodeUrl = `https://apis.mapmyindia.com/advancedmaps/v1/3xn21s2qvfu1kj87yuhkaksg2amxfyth/geo_code?addr=${encodedAddress}`;

    axios.get(geocodeUrl).then((response) => {
        if (response.data.responseCode == 200 && response.data.results[0] != null) {
            let formatted_address = response.data.results[0].formatted_address;
            let lat = response.data.results[0].lat;
            let lng = response.data.results[0].lng;
            var geocodeInfo = {
                formatted_address: formatted_address,
                lat: lat,
                lng: lng
            };
            callback(geocodeInfo);
        } else {
            console.log("The given location is invalid.");
        };
    }).catch((e) => {
        if (e.code == 'ENOTFOUND') {
            console.log("Unable to connect to server");
        } else {
            console.log("Invalid geocode URL");
        }
    });
};

exports.geocodeAddress = geocodeAddress;