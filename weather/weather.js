const axios = require('axios');

var getWeather = (geocodeInfo, callback) => {

    let lat = geocodeInfo.lat;
    let lng = geocodeInfo.lng;
    let weatherUrl = `https://api.darksky.net/forecast/d05021fe50e263eca7f96f79bbf99824/${lat},${lng}`;

    axios.get(weatherUrl).then((response) => {

        let currentSummary = response.data.currently.summary;
        let currentTemperature = response.data.currently.temperature;
        let currentApparentTemperature = response.data.currently.apparentTemperature;
        let currentHumidity = response.data.currently.humidity;
        let weatherInfo = {
            currentSummary: currentSummary,
            currentTemperature: currentTemperature,
            currentApparentTemperature: currentApparentTemperature,
            currentHumidity: currentHumidity
        };
        callback(weatherInfo);

    }).catch((e) => {
        if (e.code == 'ENOTFOUND') {
            console.log("Unable to connect to server");
        } else {
            console.log("The given location is invalid.");
        }
    });
}
exports.getWeather = getWeather;

// https: //api.darksky.net/forecast/[key]/[latitude],[longitude]
// dark sky api key  d05021fe50e263eca7f96f79bbf99824