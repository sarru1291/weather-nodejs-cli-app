const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
var argv = yargs.option({
    address: {
        demand: true,
        describe: 'Address to fetch weather for',
        alias: 'a',
        string: true
    }
}).alias('h', 'help').help().argv;

geocode.geocodeAddress(argv.address, (geocodeInfo) => {

    weather.getWeather(geocodeInfo, (weatherInfo) => {
        console.log(geocodeInfo.formatted_address);
        console.log(weatherInfo.currentTemperature);
    });
});