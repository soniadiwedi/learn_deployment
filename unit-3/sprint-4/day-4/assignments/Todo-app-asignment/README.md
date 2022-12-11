# JS-User-Database-Mock-Server


- This is your Todo Application Practice Assignment.



<!--  TASK - 1 -->

## Create a New user
- You first have to Create a new user for creating a new user use below API.
- POST http://localhost:9090/user/register
       Content-Type: application/json
- Deatils you have to give for creating new user -:
{
  "username": "dmehra",
  "firstname": "deepanshu",
  "lastname": "mehra",
  "email": "hello@mail.com",
  "password": "js201",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
}

ONCE YOU ARE DONE WITH CREATING NEW USER IT WILL REDIRECT YOU TO LOGIN PAGE.

<!-- TASK - 2 -->
## Do Login and get your accessToken.
- This is the second step of your assignment.
- In this step you have to do Login with your credentials. The API for Login is given Below.
- POST http://localhost:9090/user/login
  Content-Type: application/json

In the credential you have to give username and password.
  {
    "username": "dmehra",
    "password": "js201"
  }

- Once you are successfully logged In, the API will give you one accessToken. 
- You have to store that accessToken in localStorage/ sessionStorage 


<!-- TASK -3 -->
## Fetch all todo data
- Once you are logged In and stored your accessToken then you have to fetch your todo list by using the API given below. 

### GET a todo data
GET http://localhost:9090/todos
Content-Type: application/json
Authorization:  `Bearer ${accessToken}`      


NOTE-:  You have to provide accesssToken in order to get todo data.

- After getting all the data, append(show) that data in DOM.

Use this template for appending you data -:  
<!-- `<div class="task">
        <div class="content">
            <input 
                type="text" 
                class="text" 
                value=${item.title}
                readonly>
        </div>
        <div class="actions">
            <button class="toggle" data-id=${item.id} data-completed=${item.completed}>
                   ${item.completed === "true" ? "Completed" : "Not completed"}
            </button>
            <button class="edit" data-id=${item.id} >Edit</button>
            <button class="delete" data-id=${item.id} >Delete</button>
        </div>
    </div>` -->




<!-- Task-4 -->

## Add all CRUD opreation
- you have to write logic for adding new todo data. All the APIs are provided below for CRUD opreation-:

### CREATE a todo
POST http://localhost:9090/todos
Content-Type: application/json
Authorization : `Bearer ${accessToken}`

body : {
  "title": "New loyal Minskin",
  "completed": false
}


### DELETE a todo
DELETE http://localhost:9090/todos/${id}
Content-Type: application/json
Authorization:  `Bearer ${accessToken}`



### PATCH a todo
PATCH http://localhost:9090/todos/${id}
Content-Type: application/json
Authorization:  `Bearer ${accessToken}`

{
  "completed": false
}


### Google Drive Link (Problem Explanation)
- https://drive.google.com/file/d/18vMW_Htoh9tMlFfQVCxRl6pSv_GCdOy6/view?usp=sharing