var weatherProvider = require('../dataProviders/weatherProvider')
var weatherAdapter = require('../adapters/weatherAdapter')

exports.getWeatherData = function (req, res, next) {
  weatherProvider.getWeatherPromise()
  .then(function(weatherData){
    var weatherResponse = weatherAdapter.transformWeather(weatherData)
    return res.status(200).json(weatherResponse);
  }).catch(function(e){
    next(e);
  })
}
