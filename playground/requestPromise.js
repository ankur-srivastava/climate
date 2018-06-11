const request = require('request');

var geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var geocode_api_key = 'AIzaSyBaalIyifyyHg4rIj2gDMIUBTWldBtweQo';

var geocodeAddress = (address) => {
  return new Promise((resolve, reject)=>{
    var input_address = encodeURIComponent(address);
    request({
      url: geocode_url+input_address+'&key='+geocode_api_key,
      json:true
    }, (error, response, body)=>{
      if(error){
          reject(error);
      } else if(body.status === 'ZERO_RESULTS'){
          reject('Unable to find the address');
      } else if(body.status === 'OK'){
          resolve({
            address:body.results[0].formatted_address,
            lat:body.results[0].geometry.location.lat,
            lon:body.results[0].geometry.location.lng
          });
      }
    });
  });
};
geocodeAddress('00000000000').then((location)=>{
  console.log('Success', JSON.stringify(location, undefined, 2));
}, (error)=>{
  console.log('Error', error);
});
