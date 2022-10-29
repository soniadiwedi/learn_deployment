document.querySelector("form").addEventListener("submit",myTodo)
let todoArr=JSON.parse(localStorage.getItem("todo"))||[];//creating array 
displayTable(todoArr);
let favArr=JSON.parse(localStorage.getItem("favorite"))||[]
function myTodo(event){
    event.preventDefault();
    let taskName=document.querySelector("#task").value
    let taskPriority=document.querySelector("#priority").value
    let obj={
        taskName,
        taskPriority
    }
    todoArr.push(obj)//obj push the array
    localStorage.setItem("todo",JSON.stringify(todoArr))//data storing in localStorage
    displayTable(todoArr)

}


function displayTable(todoArr){
    document.querySelector("tbody").innerHTML=""
    for(let i=0;i<todoArr.length;i++){
// console.log(element)
let row=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=todoArr[i].taskName;
let td2=document.createElement("td");
td2.innerText=todoArr[i].taskPriority;
if(todoArr[i].taskPriority=="High"){
    td2.style.backgroundColor="red"
}else{
    td2.style.backgroundColor="green"
}

let td3=document.createElement("td");
td3.innerText="Add my fav";
td3.addEventListener("click",function(){ //catching 3rd column for clicking go to fav
   favArr.push(todoArr[i])
   console.log(favArr)
   localStorage.setItem("favorite",JSON.stringify(favArr))

})
row.append(td1,td2,td3);

document.querySelector("tbody").append(row);

    }
       
    
}   
