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



loginUserButton.addEventListener("click",loginfunction)

async function loginfunction(){
  let obj={
    "username":userName,
    "password":loginUserPassword
  };
  console.log(obj);
  try{
    let res=await fetch(userLoginURL,{
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        "Content-Type" : "application/json"
      },
    })
    if(res.ok==true){
      let token=await res.json();
      userAuthToken;
      alert(`hey welcome back!`)
    }else{
      alert("User not found")
    } 
  }catch{
    alert("Wrong username or password")
  }
}
