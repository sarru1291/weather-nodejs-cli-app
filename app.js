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

        console.log("\nAddress: " + geocodeInfo.formatted_address);
        console.log("\n---------Current Weather Report---------" +
            "\n     Summary: " + weatherInfo.currentSummary +
            "\n     Temperature: " + weatherInfo.currentTemperature +
            "\n     ApparentTemperature: " + weatherInfo.currentApparentTemperature +
            "\n     Humidity: " + weatherInfo.currentHumidity + "\n          ---------\n");
    });
});