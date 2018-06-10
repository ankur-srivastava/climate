const yargs = require('yargs');

const common = require('./geocode/common');

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

common.geocodeAddress(argv.address, (errorCode, response)=>{
  if(errorCode){
    console.log(JSON.stringify(errorCode, undefined, 2));
  }else{
    console.log(JSON.stringify(response, undefined, 2));
  }
});
