// index.js

//  import the crypto module
  const crypto=require("crypto")
  // const process=require("process")



//  get a commands using process.argv
  const operation=process.argv


// complete the  function
 



switch (operation[2]) {
  case "add":{
    console.log(Number(operation[3])+Number(operation[4]))
    break
  }
  case "sub":{
    console.log(Number(operation[3])-Number(operation[4]))
    break
  }
  case 'mult' :{
    console.log(Number(operation[3])*Number(operation[4]))
    break
  }
  case 'divide' :{
    console.log(Number(operation[3])/Number(operation[4]))
    break
  }
  case 'sin' :{
    console.log(Math.sin(Number(operation[3])))
    break
  }
  case 'cos' :{
    console.log(Math.cos(Number(operation[3])))
    break
  }
  case 'tan' :{
    console.log(Math.tan(Number(operation[3])))
    break
  }
  case ("random") :{
      if(operation[3]!=undefined){
        
        console.log(crypto.randomBytes(Number(operation[3])).toString("binary"))
        break
      }else{
        console.log("Provide length for random number generation.")
        break
      }
  }
  default:
    console.log("Invalid operation");
}
