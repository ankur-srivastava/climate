const request = require('request');
const yargs = require('yargs');

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

var input_address = encodeURIComponent(argv.a);

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address='+input_address,
  json:true
}, (error, response, body)=>{
  if(error){
      console.log(JSON.stringify(error, undefined, 2));
  }else{
      var address = 'Address: '+body.results[0].formatted_address;
      var lat = 'Latitude: '+body.results[0].geometry.location.lat;
      var lon = 'Longitude: '+body.results[0].geometry.location.lng;
      console.log(address);
      console.log(lat);
      console.log(lon);
  }
});
