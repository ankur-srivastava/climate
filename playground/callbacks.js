
//Define a getUser function
var getUser = (id, callback)=>{
  var user = {
    id:id,
    name:'Ankur'
  };
  //Introducing a delay to invoke the callback function
  setTimeout(()=>{
    callback(user);
  }, 3000);
};

//Let's call getUser
getUser(1, (user)=>{
  console.log(user);
});
