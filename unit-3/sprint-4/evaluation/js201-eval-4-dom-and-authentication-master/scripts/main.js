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

let loginUsername= document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


// loginUserButton.addEventListener("click",(e)=>{
//   let inputs=document.querySelectorAll(".row input");
//   let object={
//     [inputs[0].placeholder]: inputs[0].value,
//     [inputs[1].placeholder]: inputs[1].value

//   }
//   loginPage(object);

// });
//    async function loginPage(object){
//   try{
//     let res=await fetch(userLoginURL,{
//       method:"POST",
//       body:JSON.stringify(object),
//       headers:{
//         "Content-Type":"application/json"
//       }
//     });
//       if(res.ok===true){
//         alert("Logged In")
//         let token=await res.json()
//         //console.log(token)
//         let userAuthToken=token.accessToken;
//         let userId=token.user.id;
//         localStorage.setItem("localAccessToken",userAuthToken);
//         localStorage.setItem("userId",userIdclear);
//         notificationWrapper.innerText=null;
//         let head=document.createElement("h5")
//         head.className="notification info"
//         head.innerText=`hey ${obj.username}, welcome back!`
//         notificationWrapper.append(head);
//       }

//   }catch(error){
//     alert("err");
//   }
// }
// //--------------------------------------------------------------------------------
// async function fetchTodo(){
// //   let res=await fetch(`${baseServerURL}/todos?userId=${userId}`,{
// //     method:'GET',
// //     headers:{
// //       "Content-Type":"application/json",
// //       Authorization : `Bearer ${localStorage.getItem("userAuthToken")}`
// //     }
// //   })
// //   if(res.ok){
// //     let out=await res.json();
// //     console.log(out);
// //   }else{
// //     alert("Done")
// //   }
// // }


// // let render=(out)=>{

// try{
//   let fetch_todo=await fetch(`${baseServerURL}/todos?userId=${userId}`,{
//     method:'GET',
//     headers:{
//       "Content-Type":"application/json",
//       Authorization : `Bearer ${localStorage.getItem("userAuthToken")}`
//     }
//   })
// }

// }

// loginUserButton.addEventListener("click",async function (){
//   let object={username:loginUsername.value,password:loginUserPassword.value};
//   let response=await fetch(userLoginURL,{
//     method:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(object)
//   })
//   if(response.ok){
//     let out=await response.json()
//     console.log(out)
//     localStorage.setItem("localAccessToken",out.accessToken);
//         localStorage.setItem("userId",+out.user.id);
//         notificationWrapper.innerHTML=`<h5 class="notification info">
//         hey ${object.username}, welcome back!
//     </h5>`
//   }else{
//     console.log("Failed")
//   }
// })
//--------------------------------------------------------------------------
loginUserButton.addEventListener("click", (e) => {
  let objects = {};
  obj["username"] = loginUserUsername.value;
  obj["password"] = loginUserPassword.value;

  getData(objects);
});

async function getData(objects) {
  try {
    let res = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objects),
    });
    if (res.ok) {
      let data = await fetching.json();

      localStorage.setItem("userId", +data.user.id);
      localStorage.setItem("localAccessToken", data.accessToken);

      notificationWrapper.innerHTML = `
      <h5 class="notification info">
          hey ${objects.username}, welcome back!
      </h5>
`;
    } else {
      console.log("failed");
    }
  } catch (error) {
    alert("error");
  }
}

getTodoButton.addEventListener("click", (e) => {
  FetchTodos();
});