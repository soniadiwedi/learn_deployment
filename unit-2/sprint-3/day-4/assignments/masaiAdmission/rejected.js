// All the Code for the Rejected page goes here
let rejected_Data=JSON.parse(localStorage.getItem("admission-rejected"))
function displayTable(data){
    
    data.forEach(function(element){
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

      

        tr.append(name,email,course,gender,phone);
        document.querySelector("tbody").append(tr);

    })
}
displayTable(rejected_Data);