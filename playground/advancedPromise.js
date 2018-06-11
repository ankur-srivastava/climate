/*
  Promises with Parameters
*/

var asyncAdd = (a,b)=>{
    return new Promise((resolve, reject)=>{
      if(typeof a === 'number' && typeof b === 'number'){
          resolve(a+b);
      }else{
          reject('Params should be nos');
      }
    });
};

asyncAdd(4,'6').then((msg)=>{
  console.log('Sum ',msg);
  //To chain promises we can return a new promise here
  return asyncAdd(msg, 44);
}).then((msg)=>{
  console.log('Chained Sum', msg);
}).catch((error)=>{
  console.log('Error', error);
});
