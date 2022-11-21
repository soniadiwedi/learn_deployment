function studentData(firstName,lastName,age,marksAraay,...hobbies) {
return{
  fullName:`${firstName} ${lastName}`,
  age:age,
  hobbies:hobbies,
  getInfo:function(){
    return `${firstName} ${lastName}'s age is ${age}.`;
  },



  getResult:function(){
   let ave=0;
   marksAraay.forEach((el)=>{
    ave+=el
   })
   if((ave/marksAraay.length)<50){
    return "Result: FAIL";
   }else{
    return "Result: PASS"
   }
  }

 }
  return object;
}


//studentData('Vivek','Agarwal',38,[50,60,70],'Sing','Coding','Meditating');





export {studentData}