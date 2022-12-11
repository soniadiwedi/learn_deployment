let submit_btn=document.querySelector("#register form")

submit_btn.addEventListener("submit",(event)=>{
  event.preventDefault();
  let all_input_tags=document.querySelectorAll("#register input");
  let details={};
  for(let i=0;i<all_input_tags.length-1;i++){
    details[all_input_tags[i].id]=all_input_tags[i].value;
  }
  RegisterNewUser(details);
})


// For creating new User 
async function RegisterNewUser(details) {
  try {
    let res=await fetch("http://localhost:9090/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    })

    console.log(res)
    if(res.ok==true){
      console.log("user has been created")
      //alert("user has been created");
      window.location.href="#tologin";
    }
    
   
  } catch (error) {
    alert("bad request")
  }
}
//---------------------------------------------------------------
let login_btn=document.querySelector("#login form");

login_btn.addEventListener("submit",(e)=>{
  e.preventDefault();

  let all_input_tags=document.querySelectorAll("#login input");
  let details={
    [all_input_tags[0].id]:all_input_tags[0].value,
    [all_input_tags[1].id]:all_input_tags[1].value
  }
 
  //console.log(details);
  LoginUser(details); 
})




// LOGIN function
async function LoginUser(details) {
  try {
    let res=await fetch("http://localhost:9090/user/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)

    })
    //console.log(res)
    if(res.ok==true){
      alert ("Loggin")
      let token= await res.json();
      //console.log(token) 
      //storing the login access token in ss
      sessionStorage.setItem("access_token",token.accessToken)
      window.location.href="todo.html";
      
    }else{
      alert("wrong")
    }
  } catch (error) {
      alert (error)
  }
}
