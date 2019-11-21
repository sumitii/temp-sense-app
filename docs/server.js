var express = require("express"),
  expressLess = require('express-less');
var app = express();
var request = require('request');
var dateFormat = require('dateformat');

//set view engine
app.set('views', __dirname + '/public')
app.set("view engine", "jade")

// Compile LESS file to CSS.
app.use('/', expressLess(__dirname + '/public'));
// What the site should read from.
app.use(express.static(__dirname + '/public'))

app.listen(9000);

// routes as normal
/**
 * Get API data and format the display settings
 * Add to results array that get's passed to the browser.
 */
app.get('/', function (req, res) {
  request('http://localhost:8000/api/temperature', function (error, response) {
    if (!error && response.statusCode == 200) {
      var result = [];
      var temperatureData = JSON.parse(response.body);
      temperatureData = temperatureData.data;
      result.push(temperatureData);
      for (var i = 0; i < result.length; i++) {
        var formattedDate = dateFormat(result[i].date_recorded, "mmm dd, yyyy, hh:MMTT");
        result[i].date_recorded = formattedDate;
      }
      res.render('index', { title: 'temperatureData', data: result });
    }
  });
});