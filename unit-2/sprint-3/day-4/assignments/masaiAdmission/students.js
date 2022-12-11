    // All the Code for All Students Page Goes Here
//1.get data from local storage.
// 2.catch the table from html page.
// 3.append data to table.
// 4.create admitted data .
// 5.create rejected data
// 6.delete data from old admission data
// 7.create a filter function
// 8.display data


let LSData=JSON.parse(localStorage.getItem("admission"));
let tbody=document.querySelector("tbody");

let filter=document.getElementById("filter");

function displayTable(data){
    tbody.innerHTML=null;
    
    data.forEach(function(element,index){
        let tr=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=element.name;

        let email=document.createElement("td");
        email.innerText=element.email;
        
        let phone=document.createElement("td");
        phone.innerText=element.phone;

        let gender=document.createElement("td");
        gender.innerText=element.gender;

        let course=document.createElement("td");
        course.innerText=element.course;

        let accept=document.createElement("td");
        accept.innerText="Accept";
        accept.addEventListener("click",function(){
            addData("admission-accepted",element)
            deleteData(LSData,index);
        })

        let reject=document.createElement("td");
        reject.innerText="Reject";
        accept.addEventListener("click",function(){
            addData("admission-rejected",element)
            deleteData(LSData,index);
        })

        tr.append(name,email,course,gender,phone,accept,reject);
        document.querySelector("tbody").append(tr);

    })
}
function addData(key,value){//function creating for display data admission accepted or rejected 
    let newLSData=JSON.parse(localStorage.getItem(key))||[];
    newLSData.push(value);
    localStorage.setItem(key,JSON.stringify(newLSData));
}
//data is from where i want to remove the values/student details.
//index is the index of the student details
function deleteData(data,index){//function for deleting data after accepting or rejection.To delet a perticulor delete a row
    data.splice(index,1)
    localStorage.setItem("admission",JSON.stringify(data));
    displayTable(data)
}

filter.addEventListener("change",function(){
   if(filter.value==""||filter.value=="all"){
        displayTable(LSData)
   }else{
    let filteredData=LSData.filter(function(el){
        return el.course===filter.value
    })
    displayTable(filteredData)
   }
   
})


displayTable(LSData);