function job(delay, value) {
    let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value)
        },delay);
    })
    return promise;
}


var results;
let R=Promise.all([
    job(1000,10),
    job(2000,20),
    job(500,30),
    job(1500,40)
])



R.then((data)=>{results=data});

export { job, results };
