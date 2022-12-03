function getData(data) {
    return new Promise((resolve,reject)=>{
        if(isNaN(data)){
            reject ("error")
        }else if(data%2==1){
            setTimeout(()=>{
                resolve ("odd")
            },3000);
        }else if(data%2==0){
            setTimeout(()=>{
                resolve ("even");
            },4000)
            
        }
    });
}

export default getData
