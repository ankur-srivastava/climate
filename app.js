const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
//Call the function that makes a call to Google Geocode API and returns location details
geocode.geocodeAddress(argv.address, (errorCode, response)=>{
  if(errorCode){
    console.log(JSON.stringify(errorCode, undefined, 2));
  }else{
    console.log(JSON.stringify(response, undefined, 2));
    //Call the function that makes a call to Forecast API and returns temperature
    weather.getWeather(response.lat,response.lon,(error, response)=>{
      if(error){
          console.log(error);
      }else{
          console.log(response);
      }
    });
  }
});
