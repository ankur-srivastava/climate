const request = require('request');

/*
  Sample API call to forecast.io
  https://api.darksky.net/forecast/5ac3380490d4d281b441f6dc380ea860/37.8267,-122.4233
*/

var forecast_api_key = '5ac3380490d4d281b441f6dc380ea860';

var getWeather = (lat,lon,callback)=>{
    var forecast_url = 'https://api.darksky.net/forecast/'+forecast_api_key+'/'+lat+','+lon;

    request({
      url:forecast_url,
      json:true
    }, (error, response, body)=>{
      if(error){
        callback('Unable to fetch weather data');
      }else if(response.statusCode === 400){
        callback('No Response');
      }else if(response.statusCode === 200){
        var temp = 'Current Temperature is '+body.currently.temperature;
        callback(undefined,temp);
      }
    });
};

module.exports = {
  getWeather
};
