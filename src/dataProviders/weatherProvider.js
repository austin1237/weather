var Promise = require("bluebird");
var request = require("request");
var apiKey = "09d6c96df43e4f9ead8165023160612";
var querystring = require("querystring")
var baseApiUrl = "http://api.worldweatheronline.com/premium/v1/past-weather.ashx"
exports.getWeatherPromise = function(){
  var query = {
    key: apiKey,
    q: "80223",
    format: "json",
    startDate: "12/08/2016",
    tp: 24
  }
  query = querystring.stringify(query)
  var weatherUrl = baseApiUrl + "12/08/2016"
  return new Promise(function(resolve, reject){
   request(baseApiUrl + "?" + query, function (error, response, body) {
      if (error && response.statusCode !== 200) {
        return reject("weather api failed");
      }
      return resolve(body);
    });
  });
}
