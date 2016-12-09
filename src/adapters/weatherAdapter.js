_ = require("underscore");

exports.transformWeather = function(weatherData) {
  weatherData = JSON.parse(weatherData)
  if (!weatherData.data || !weatherData.data.weather ){
    throw new Error("invalid data format")
  }


  if (!_.isArray(weatherData.data.weather) || !weatherData.data.weather.length){
    throw new Error("invalid data format")
  }

  if (!_.isArray(weatherData.data.weather[0].hourly) || !weatherData.data.weather[0].hourly.length){
    throw new Error("invalid data format")
  }

  return weatherData.data.weather[0].hourly[0]
}
