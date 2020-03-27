// create a nwe promise
let promise = new Promise((resolve,reject)=>{
    resolve();
});
promise
    .then(()=>{
        console.log('progarm ran successfully');
    })
    .then(()=>{
        console.log('application compiled successfully');
    })
    .catch(()=>{
        console.log('Something went wrong');
    })