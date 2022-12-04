import config from "../config.js";
import fetch from "isomorphic-fetch";

// 1.
// the function getFiveTodos() should return a promise that
// resolves to 5 todo items
// request url: https://jsonplaceholder.typicode.com/todos?_limit=5&_sort=title
// hint: what ever you return from an async function is a promise that resolves to the value that you return
// help: https://javascript.info/async-await
async function getFiveTodos() {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5&_sort=title"
    );
    let data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}

// getFiveTodos().then((data) => console.log(data));
// 2.
// the function getUsers should return a promise that
// resolves to all ten users data
// request url: https://jsonplaceholder.typicode.com/users

async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

// getUsers().then((data) => console.log(data));

// 3.
// the getWellFormattedData() should return a promise that
// resolves to an array of 5 objects (for each )
// each object contains userId, name (of the user) & the toDoTitle
// the property names should be `userId`, `name` and `toDoTitle`
// the newData should be sorted by userId in ascending order (low to high)

//------------------------------------------------------------------------------------------
// async function getWellFormattedData() {
//   let newData = [];
//   try {
//     getFiveTodos()
//       .then((data) => {
//         for (let i = 0; i < 5; i++) {
//           newData.push({ toDoTitle: data[i].title });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     getUsers()
//       .then((data) => {
//         for (let i = 0; i < 5; i++) {
//           newData[i]["name"] = data[i].name;
//           newData[i]["userId"] = data[i].id;
//         }
//         console.log(newData);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     return newData;
//   } catch (err) {
//     console.log(err);
//   }
// }
//---------------------------------------------------------------------------------------------------------

async function getWellFormattedData() {
  let todos=await getFiveTodos()
  let users=await getUsers();
  
  let username= users.reduce((acc,item)=>{
    acc[item.id]=item.name;
    return acc;
  },{})

  console.log(username)
  let NewData=todos.map((el)=>{
    let obj={};
    obj["userId"]=el.userId
    obj["name"]=username[el.userId];
    obj["title"]=el.title;
    return obj;
  })
  return NewData;

}
getWellFormattedData().then((data) => console.log(JSON.stringify(data,null,2)));
getWellFormattedData().then((data) => {
  data.sort((a, b) => {
    return a.userId - b.userId;
  });
  console.log(data);
});
