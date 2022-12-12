// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let userName= document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


loginUserButton.addEventListener("click",(event)=>{
  let inputs=document.querySelectorAll(".row input");
  let object={
    [inputs[0].placeholder]: inputs[0].value,
    [inputs[1].placeholder]: inputs[1].value,

  }
  loginPage(object);

});
   async function loginPage(object){
  try{
    let res=await fetch(userLoginURL,{
      method:"POST",
      body:JSON.stringify(object),
      headers:{
        "Content-Type":"application/json"
      }
    });
      if(res.ok){
        alert("LOGGED IN")
        let token=await res.json()
        //console.log(token)
        localStorage.setItem("localaccessToken",token.accessToken);
        localStorage.setItem("userId",token.user.id);
        notificationWrapper.innerText=null;
        let head=document.createElement("h5")
        head.className="notification info"
        head.innerText=`hey ${obj.userName}, welcome back!`
        notificationWrapper.append(head);

        
        
    

      }

  }catch(error){
    alert("err");
  }
}

// let fetchTodo=async () =>{
//   let res=await fetch(`${baseServerURL}/todos?userId=${userId}`,{
//     method:'GET',
//     headers:{
//       "Content-Type":"application/json",
//       Authorization : `Bearer ${localStorage.getItem("userAuthToken")}`
//     }
//   })
//   if(res.ok){
//     let out=await res.json();
//     console.log(out);
//   }else{
//     alert("Done")
//   }
// }


// let render=(out)=>{

// }