const yargs = require('yargs');
const axios = require('axios');

/*
  @author: Ankur Srivastava
*/

//Using yargs to get user address from command line
//Like $node app.js a Hill Ridge Springs Hyderabad
//a is an alias for address

const argv = yargs
    .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        //this attribute tells Yargs to parse address as a String
        string: true
      }
    })
    .help()
    .argv;

var geocode_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var geocode_api_key = 'AIzaSyBaalIyifyyHg4rIj2gDMIUBTWldBtweQo';
var input_address = encodeURIComponent(argv.address);
var url = geocode_url+input_address+'&key='+geocode_api_key;

var forecast_base_url='https://api.darksky.net/forecast/';
var forecast_api_key = '5ac3380490d4d281b441f6dc380ea860';

//Call the function that makes a call to Google Geocode API and returns location details
axios
  .get(url)
  .then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('No Results Found.');
    }else{
      console.log(response.data.results[0].formatted_address);
      var lat = response.data.results[0].geometry.location.lat;
      var lon = response.data.results[0].geometry.location.lng;
      var forecast_url = forecast_base_url+forecast_api_key+'/'+lat+','+lon;
      axios
        .get(forecast_url)
        .then((response)=>{
          console.log('Current Temperature is '+response.data.currently.temperature);
        });
    }
  })
  .catch((e)=>{
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to URL');
    }else{
      console.log(e.message);
    }
  });
