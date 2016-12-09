var express = require('express');
var argv = require('minimist')(process.argv.slice(2));
var weather = require('./src/controllers/weatherController')
version = 'v1';
baseurl = "/" + version + "/weather";


var app = express();
var port = argv.p;
app.get(baseurl, weather.getWeatherData);
app.use(function(err, req, res, next) {
  console.log(err)
    res.status(500).json({ error: 'something went wrong' });
});
console.log('app is listening on port ' + port)
app.listen(port);
