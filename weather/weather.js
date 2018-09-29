const axios = require('axios');

var getWeather = (geocodeInfo, callback) => {
    let lat = geocodeInfo.lat;
    let lng = geocodeInfo.lng;
    let weatherUrl = `https://api.darksky.net/forecast/d05021fe50e263eca7f96f79bbf99824/${lat},${lng}`;
    axios.get(weatherUrl).then((response) => {
        let weatherInfo = {
            currentTime: response.data.currently.time,
            currentTemperature: response.data.currently.temperature,
            currentApparentTemperature: response.data.currently.apparentTemperature,
            currentHumidity: response.data.currently.humidity,

        };
        callback(weatherInfo);
    }).catch((e) => {
        console.log(e);
    });
}
exports.getWeather = getWeather;

// https: //api.darksky.net/forecast/[key]/[latitude],[longitude]
// dark sky api key  d05021fe50e263eca7f96f79bbf99824