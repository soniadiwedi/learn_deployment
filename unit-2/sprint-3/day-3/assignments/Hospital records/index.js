// fill in javascript code here
document.querySelector("form").addEventListener("submit",Hospitalreco);

function Hospitalreco(event){
    event.preventDefault();
    let doctorName=document.querySelector("#name").value;
    let doctorId=document.querySelector("#docID").value;
    let specialization=document.querySelector("#dept").value;
    let experience=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
    let obj={
        doctorName,
        doctorId,
        specialization,
        experience,
        email,
        mobile
    };
    displayTable(obj);
    
}

function displayTable(obj){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=obj.doctorName;

    let td2=document.createElement("td");
    td2.innerText=obj.doctorId;

    let td3=document.createElement("td");
    td3.innerText=obj.specialization;

    let td4=document.createElement("td");
    td4.innerText=obj.experience;

    let td5=document.createElement("td");
    td5.innerText=obj.email;

    let td6=document.createElement("td");
    td6.innerText=obj.mobile;

    let td7=document.createElement("td");
    if(obj.experience>5){
        td7.innerText="Senior"
    }else if(obj.experience>2 && experience<5){
        td7.innerText="Junior"
    }else {
        td7.innerText="Trainee"
    }



    let td8=document.createElement("td")
    td8.innerText="Delete"
    td8.style.backgroundColor="red"
    td8.addEventListener("click",deletes)
    function deletes(){
        row.innerHTML=null;
    }

    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row)

}



