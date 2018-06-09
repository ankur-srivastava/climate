console.log('Starting Up');

setTimeout(()=>{
  console.log('Timeout 1...');
}, 2000);

setTimeout(()=>{
  console.log('Timeout 2...');
}, 0);

console.log('Done');
