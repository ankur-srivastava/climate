//Experiments with promises in ES6
var myPromise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    //resolve('Inside Promise Object');
    reject('Oops');
  }, 2000);
});

//Called when Promise is fulfilled
myPromise.then((message) => {
  console.log('Success', message);
}, (errorMsg)=>{
  console.log('Error',errorMsg);
});
