// fill in javascript code here
document.querySelector("form").addEventListener("submit",masaiemployee);

function masaiemployee(event){
    event.preventDefault();
    let emName=document.querySelector("#name").value;
    let emID=document.querySelector("#employeeID").value;
    let deparment=document.querySelector("#department").value;
    let exp=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
    let obj={
        emName,
        emID,
        deparment,
        exp,
        email,
        mobile
    }
    displayTable(obj)

}

function displayTable(obj){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=obj.emName;

    let td2=document.createElement("td");
    td2.innerText=obj.emID;

    let td3=document.createElement("td");
    td3.innerText=obj.deparment;

    let td4=document.createElement("td");
    td4.innerText=obj.exp;

    let td5=document.createElement("td");
    td5.innerText=obj.email;

    let td6=document.createElement("td");
    td6.innerText=obj.mobile;

    let td7=document.createElement("td");
    if(obj.exp>5){
        td7.innerText="Senior"
    }else if(obj.exp<2 && obj.exp>5){
        td7.innerText="Junior"
    }else{
        td7.innerText="fresher"
    }

    let td8=document.createElement("td");
    td8.innerText="Delete"

    td8.addEventListener("click",deletes);
    function deletes(){
        row.innerHTML=null;
    }
   
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);
}