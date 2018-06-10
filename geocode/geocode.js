const request = require('request');

var geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var geocode_api_key = 'AIzaSyBaalIyifyyHg4rIj2gDMIUBTWldBtweQo';

var geocodeAddress = function(address, callback){
  var input_address = encodeURIComponent(address);
  request({
    url: geocode_url+input_address+'&key='+geocode_api_key,
    json:true
  }, (error, response, body)=>{
    if(error){
        callback(error);
    } else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find the address');
    } else if(body.status === 'OK'){
        callback(undefined, {
          address:body.results[0].formatted_address,
          lat:body.results[0].geometry.location.lat,
          lon:body.results[0].geometry.location.lng
        });
    } else {
      callback('Some problem occured '+body.status);
    }
  });
}

module.exports = {
  geocodeAddress
};
